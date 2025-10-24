export interface Contact {
  email: string
  phone: string
  linkedin: string
  github: string
  website: string
  instagram?: string
  twitter?: string
  youtube?: string
  facebook?: string
}

export interface Profile {
  name: string
  position: string
  description: string
  contact: Contact
}

export interface Education {
  institution: string
  major: string
  degree: string
  start_year: number
  end_year: number
  description: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  demo_link: string
  github_link: string
  year: number
}

export interface Experience {
  company: string
  position: string
  start_year: number
  end_year: number
  description: string
}

export interface Certification {
  name: string
  issuer: string
  year: number
  link: string
}

export interface Theme {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
    gradient: string
  }
  gradients: {
    hero: string
    card: string
    button: string
  }
}

export interface PortfolioData {
  profile: Profile
  education: Education[]
  portfolio: Project[]
  skills: string[]
  experience: Experience[]
  certifications: Certification[]
  theme?: number
  template?: 'default' | 'anime' | 'cat'
}