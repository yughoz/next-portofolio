'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Globe,
  Instagram,
  GraduationCap,
  Briefcase,
  Code2,
  Building2,
  Award,
  Zap,
  TrendingUp,
  Trophy,
  Flame,
  Star,
  Target
} from 'lucide-react'
import { Profile, Education, Project, Experience, Certification } from '@/types/portfolio'
import { useEffect, useState } from 'react'

interface Anime2PortfolioProps {
  profile: Profile
  education: Education[]
  portfolio: Project[]
  experience: Experience[]
  certifications: Certification[]
  skills: string[]
}

export default function Anime2Portfolio({
  profile,
  education,
  portfolio,
  experience,
  certifications,
  skills
}: Anime2PortfolioProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1
    }))
    setParticles(particleArray)
  }, [])

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
    hidden: {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="template-anime2 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-red-500 opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Grid Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 59, 59, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 59, 59, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container text-center px-4"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-4xl font-bold border-4 border-red-500 shadow-2xl shadow-red-500/50">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </div>
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-red-500"
                animate={{
                  rotate: [0, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black mb-4 text-white"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl mb-6 text-gray-300 font-semibold"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            {profile.position}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {profile.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-red-500/30"
            >
              <span className="flex items-center gap-2">
                <Mail size={20} />
                <span>CONTACT</span>
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gray-900 text-red-400 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-red-500/30"
            >
              <span className="flex items-center gap-2">
                <Linkedin size={20} />
                <span>LINKEDIN</span>
              </span>
              <div className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gray-900 text-red-400 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border border-red-500/30"
            >
              <span className="flex items-center gap-2">
                <Github size={20} />
                <span>GITHUB</span>
              </span>
              <div className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Flame className="text-red-500 mr-3" size={36} />
              <h2
                className="text-4xl md:text-6xl font-black text-white"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                SKILLS
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="px-6 py-3 bg-gray-900 border border-red-500/30 rounded-lg text-red-400 font-semibold transition-all duration-300 hover:border-red-500 hover:bg-red-950 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative z-10 bg-gray-950/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Target className="text-red-500 mr-3" size={36} />
              <h2
                className="text-4xl md:text-6xl font-black text-white"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                PROJECTS
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 border border-red-500/30 rounded-lg p-6 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {project.title}
                  </h3>
                  <span className="text-sm text-red-400 bg-red-950 px-3 py-1 rounded border border-red-500/30 font-bold">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-gray-800 text-red-400 rounded border border-red-500/20 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demo_link && (
                    <a
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 border border-red-500/30"
                    >
                      <Zap size={16} className="inline mr-1" />
                      DEMO
                    </a>
                  )}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gray-800 text-red-400 rounded font-bold transition-all duration-300 hover:bg-gray-700 hover:scale-105 border border-red-500/30"
                    >
                      <Github size={16} className="inline mr-1" />
                      CODE
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="text-red-500 mr-3" size={36} />
              <h2
                className="text-4xl md:text-6xl font-black text-white"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                EXPERIENCE
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 border border-red-500/30 rounded-lg p-8 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {exp.company}
                    </h3>
                    <p className="text-xl text-red-400 font-medium mb-1">
                      {exp.position}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-bold border border-red-500/30">
                      {exp.start_year} - {exp.end_year}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-red-500/20 relative z-10">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-red-400 mb-4">
              <Star className="animate-pulse" size={20} />
              <span className="font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                CRAFTED WITH PRECISION
              </span>
              <Star className="animate-pulse" size={20} />
            </div>
            <p className="text-gray-500 font-semibold">
              © {new Date().getFullYear()} {profile.name} | BUILT WITH MODERN ANIME AESTHETICS
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}