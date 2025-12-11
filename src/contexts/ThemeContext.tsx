'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Theme } from '@/types/portfolio'
import { getThemeByIndex } from '@/lib/themes'

interface ThemeContextType {
  theme: Theme
  themeIndex: number
  setTheme: (theme: Theme) => void
  setThemeByIndex: (index: number) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  initialThemeIndex?: number
}

export function ThemeProvider({ children, initialThemeIndex = 0 }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(getThemeByIndex(initialThemeIndex))
  const [themeIndex, setThemeIndex] = useState(initialThemeIndex)

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    const index = parseInt(newTheme.id) - 1
    setThemeIndex(index)
    localStorage.setItem('portfolioTheme', index.toString())
  }

  const setThemeByIndex = (index: number) => {
    const newTheme = getThemeByIndex(index)
    setThemeState(newTheme)
    setThemeIndex(index)
    localStorage.setItem('portfolioTheme', index.toString())
  }

  useEffect(() => {
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem('portfolioTheme')
    if (savedTheme) {
      const index = parseInt(savedTheme)
      if (!isNaN(index)) {
        setThemeByIndex(index)
      }
    }
  }, [])

  useEffect(() => {
    // Apply theme colors as CSS variables
    const root = document.documentElement
    root.style.setProperty('--theme-primary', theme.colors.primary)
    root.style.setProperty('--theme-secondary', theme.colors.secondary)
    root.style.setProperty('--theme-accent', theme.colors.accent)
    root.style.setProperty('--theme-background', theme.colors.background)
    root.style.setProperty('--theme-surface', theme.colors.surface)
    root.style.setProperty('--theme-text', theme.colors.text)
    root.style.setProperty('--theme-text-secondary', theme.colors.textSecondary)
  }, [theme])

  const value = {
    theme,
    themeIndex,
    setTheme,
    setThemeByIndex,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}