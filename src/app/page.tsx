import { getPortfolioData } from '@/lib/portfolio'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { TemplateProvider } from '@/contexts/TemplateContext'
import TemplateSwitcher from '@/components/TemplateSwitcher'
import TemplateRenderer from '@/components/TemplateRenderer'

export default async function Home() {
  const data = await getPortfolioData()
  const themeIndex = data.theme ? data.theme - 1 : 0
  const templateType = data.template || 'default'

  // Extract portfolio data
  const portfolioData = {
    profile: data.profile,
    education: data.education,
    portfolio: data.portfolio,
    experience: data.experience,
    certifications: data.certifications,
    skills: data.skills
  }

  return (
    <ThemeProvider initialThemeIndex={themeIndex}>
      <TemplateProvider initialTemplate={templateType}>
        <main className="min-h-screen relative">
          <TemplateSwitcher />
          <TemplateRenderer portfolioData={portfolioData} />
        </main>
      </TemplateProvider>
    </ThemeProvider>
  )
}