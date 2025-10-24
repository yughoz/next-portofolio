import { getPortfolioData } from '@/lib/portfolio'
import ProfileSection from '@/components/sections/ProfileSection'
import EducationSection from '@/components/sections/EducationSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import CertificationsSection from '@/components/sections/CertificationsSection'

export default async function Home() {
  const data = await getPortfolioData()

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <ProfileSection profile={data.profile} />
      <EducationSection education={data.education} />
      <SkillsSection skills={data.skills} />
      <PortfolioSection projects={data.portfolio} />
      <ExperienceSection experience={data.experience} />
      <CertificationsSection certifications={data.certifications} />

      <footer className="py-8 px-4 bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {data.profile.name}. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </footer>
    </main>
  )
}