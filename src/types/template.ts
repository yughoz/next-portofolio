export interface Template {
  id: string
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
  }
  fonts: {
    heading: string[]
    body: string[]
  }
  features: {
    animations: boolean
    sounds: boolean
    specialEffects: boolean
  }
  assets: {
    icons: string
    illustrations: string
    backgroundType: 'gradient' | 'pattern' | 'solid'
  }
}

export type TemplateType = 'default' | 'anime' | 'cat' | 'anime2'

export interface TemplateConfig {
  type: TemplateType
  id: string
  component: React.ComponentType<any>
  styles: {
    css: string
    animations?: string
  }
  assets: {
    icons: Record<string, string>
    illustrations: Record<string, string>
  }
}