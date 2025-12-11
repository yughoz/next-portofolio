'use client'

import { useTemplate } from '@/contexts/TemplateContext'
import { PortfolioData } from '@/types/portfolio'

export default function TemplateRenderer({ portfolioData }: { portfolioData: Omit<PortfolioData, 'theme' | 'template'> }) {
  const { templateConfig, isLoading } = useTemplate()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading template...</p>
        </div>
      </div>
    )
  }

  if (!templateConfig || !templateConfig.component) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <p className="text-red-500 text-xl">Error loading template</p>
          <p className="text-gray-400 text-sm mt-2">Please refresh the page</p>
        </div>
      </div>
    )
  }

  const TemplateComponent = templateConfig.component

  return (
    <TemplateComponent
      profile={portfolioData.profile}
      education={portfolioData.education}
      portfolio={portfolioData.portfolio}
      experience={portfolioData.experience}
      certifications={portfolioData.certifications}
      skills={portfolioData.skills}
    />
  )
}