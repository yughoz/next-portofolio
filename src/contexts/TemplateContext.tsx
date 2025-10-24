'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { TemplateType, TemplateConfig } from '@/types/template'

interface TemplateContextType {
  currentTemplate: TemplateType
  setTemplate: (template: TemplateType) => void
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

      // Load template-specific CSS
      if (config.styles.css) {
        const styleId = `template-${templateType}-styles`
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

  const value = {
    currentTemplate,
    setTemplate,
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