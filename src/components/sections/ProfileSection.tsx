'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Globe, Instagram, Twitter, Youtube, Facebook } from 'lucide-react'
import { Profile } from '@/types/portfolio'
import { useTheme } from '@/contexts/ThemeContext'

interface ProfileSectionProps {
  profile: Profile
}

export default function ProfileSection({ profile }: ProfileSectionProps) {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  // Define all possible contact options with their configurations
  const contactOptions = [
    {
      key: 'email',
      href: `mailto:${profile.contact.email}`,
      icon: Mail,
      label: 'Email',
      color: '',
      shadowColor: '',
      isTheme: true,
    },
    {
      key: 'linkedin',
      href: profile.contact.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'bg-blue-600 hover:bg-blue-700',
      shadowColor: 'hover:shadow-blue-600/25',
    },
    {
      key: 'github',
      href: profile.contact.github,
      icon: Github,
      label: 'GitHub',
      color: 'bg-gray-700 hover:bg-gray-600',
      shadowColor: 'hover:shadow-gray-700/25',
    },
    {
      key: 'website',
      href: profile.contact.website,
      icon: Globe,
      label: 'Website',
      color: 'bg-purple-600 hover:bg-purple-700',
      shadowColor: 'hover:shadow-purple-600/25',
    },
    {
      key: 'phone',
      href: `tel:${profile.contact.phone}`,
      icon: Phone,
      label: 'Phone',
      color: 'bg-green-600 hover:bg-green-700',
      shadowColor: 'hover:shadow-green-600/25',
    },
    {
      key: 'instagram',
      href: profile.contact.instagram,
      icon: Instagram,
      label: 'Instagram',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      shadowColor: 'hover:shadow-purple-600/25',
      isGradient: true,
    },
    {
      key: 'twitter',
      href: profile.contact.twitter,
      icon: Twitter,
      label: 'Twitter',
      color: 'bg-sky-500 hover:bg-sky-600',
      shadowColor: 'hover:shadow-sky-500/25',
    },
    {
      key: 'youtube',
      href: profile.contact.youtube,
      icon: Youtube,
      label: 'YouTube',
      color: 'bg-red-600 hover:bg-red-700',
      shadowColor: 'hover:shadow-red-600/25',
    },
    {
      key: 'facebook',
      href: profile.contact.facebook,
      icon: Facebook,
      label: 'Facebook',
      color: 'bg-blue-700 hover:bg-blue-800',
      shadowColor: 'hover:shadow-blue-700/25',
    },
  ]

  return (
    <section
      className="min-h-screen flex items-center justify-center text-white px-4"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.background}, ${theme.colors.surface}, ${theme.colors.background})`
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div
            className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
            }}
          >
            <span className="text-4xl font-bold text-white">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 font-heading bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
            }}
          >
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-heading" style={{ color: theme.colors.textSecondary }}>
            {profile.position}
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: theme.colors.textSecondary }}
        >
          {profile.description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          {contactOptions
            .filter(option => {
              // Filter out options that don't have a value in the contact object
              const contactValue = profile.contact[option.key as keyof typeof profile.contact]
              return contactValue && contactValue.trim() !== ''
            })
            .map((option) => {
              const Icon = option.icon
              const isExternal = option.key !== 'email' && option.key !== 'phone'

              if (option.isTheme) {
                return (
                  <a
                    key={option.key}
                    href={option.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: theme.colors.primary,
                      boxShadow: `0 4px 14px 0 ${theme.colors.primary}25`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.secondary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.primary
                    }}
                  >
                    <Icon size={20} />
                    <span>{option.label}</span>
                  </a>
                )
              }

              return (
                <a
                  key={option.key}
                  href={option.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 px-6 py-3 ${option.color} rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${option.shadowColor}`}
                >
                  <Icon size={20} />
                  <span>{option.label}</span>
                </a>
              )
            })}
        </motion.div>
      </motion.div>
    </section>
  )
}