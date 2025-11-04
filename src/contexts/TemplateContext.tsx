'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { TemplateType, TemplateConfig } from '@/types/template'

interface TemplateContextType {
  currentTemplate: TemplateType
  setTemplate: (template: TemplateType) => void
  switchTemplate: (template: TemplateType, updateUrl?: boolean) => void
  templateConfig: TemplateConfig | null
  isLoading: boolean
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined)

interface TemplateProviderProps {
  children: ReactNode
  initialTemplate?: TemplateType
}

export function TemplateProvider({ children, initialTemplate = 'default' }: TemplateProviderProps) {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>(initialTemplate)
  const [templateConfig, setTemplateConfig] = useState<TemplateConfig | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [portfolioData, setPortfolioData] = useState<any>(null)

  const loadTemplate = async (templateType: TemplateType) => {
    setIsLoading(true)
    try {
      // Dynamic import of template config
      const { getTemplateConfig } = await import(`@/lib/templates/${templateType}`)
      const config = await getTemplateConfig()
      setTemplateConfig(config)

      // Load template-specific CSS with cache busting for development
      if (config.styles.css) {
        const timestamp = process.env.NODE_ENV === 'development' ? Date.now() : ''
        const styleId = `template-${templateType}-styles-${timestamp}`

        // Remove old template styles in development
        if (process.env.NODE_ENV === 'development') {
          const oldStyles = document.querySelectorAll(`[id^="template-${templateType}-styles"]`)
          oldStyles.forEach(style => style.remove())
        }

        let styleElement = document.getElementById(styleId) as HTMLStyleElement

        if (!styleElement) {
          styleElement = document.createElement('style')
          styleElement.id = styleId
          document.head.appendChild(styleElement)
        }
        styleElement.textContent = config.styles.css
      }
    } catch (error) {
      console.error(`Failed to load template ${templateType}:`, error)
      // Fallback to default template
      if (templateType !== 'default') {
        await loadTemplate('default')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const setTemplate = async (templateType: TemplateType) => {
    setCurrentTemplate(templateType)
    localStorage.setItem('portfolioTemplate', templateType)
    await loadTemplate(templateType)
  }

  useEffect(() => {
    // Load template from localStorage or URL params
    const savedTemplate = localStorage.getItem('portfolioTemplate') as TemplateType
    const urlParams = new URLSearchParams(window.location.search)
    const urlTemplate = urlParams.get('template') as TemplateType

    const templateToLoad = urlTemplate || savedTemplate || initialTemplate
    setTemplate(templateToLoad)
  }, [initialTemplate])

  // Listen for URL changes and update template accordingly
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const urlTemplate = urlParams.get('template') as TemplateType

      if (urlTemplate && urlTemplate !== currentTemplate) {
        setTemplate(urlTemplate)
      }
    }

    window.addEventListener('popstate', handlePopState)

    // Also listen for URL parameter changes (for navigation without page reload)
    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState

    const handleUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const urlTemplate = urlParams.get('template') as TemplateType

      if (urlTemplate && urlTemplate !== currentTemplate) {
        setTemplate(urlTemplate)
      }
    }

    history.pushState = function(...args) {
      originalPushState.apply(history, args)
      setTimeout(handleUrlChange, 0)
    }

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args)
      setTimeout(handleUrlChange, 0)
    }

    return () => {
      window.removeEventListener('popstate', handlePopState)
      history.pushState = originalPushState
      history.replaceState = originalReplaceState
    }
  }, [currentTemplate])

  // Template switching utility
  const switchTemplate = (templateType: TemplateType, updateUrl = true) => {
    setTemplate(templateType)

    // Update URL parameter if requested
    if (updateUrl) {
      const url = new URL(window.location.href)
      if (templateType !== 'default') {
        url.searchParams.set('template', templateType)
      } else {
        url.searchParams.delete('template')
      }

      // Update URL without page reload
      if (url.toString() !== window.location.href) {
        history.replaceState({}, '', url.toString())
      }
    }
  }

  const value = {
    currentTemplate,
    setTemplate,
    switchTemplate,
    templateConfig,
    isLoading,
  }

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  )
}

export function useTemplate() {
  const context = useContext(TemplateContext)
  if (context === undefined) {
    throw new Error('useTemplate must be used within a TemplateProvider')
  }
  return context
}