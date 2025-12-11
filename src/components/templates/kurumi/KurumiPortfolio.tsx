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
  Clock,
  Star,
  Target,
  Sparkles
} from 'lucide-react'
import { Profile, Education, Project, Experience, Certification } from '@/types/portfolio'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface KurumiPortfolioProps {
  profile: Profile
  education: Education[]
  portfolio: Project[]
  experience: Experience[]
  certifications: Certification[]
  skills: string[]
}

type KurumiExpression = 'main' | 'happy' | 'thinking' | 'confusion'

export default function KurumiPortfolio({
  profile,
  education,
  portfolio,
  experience,
  certifications,
  skills
}: KurumiPortfolioProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])
  const [currentExpression, setCurrentExpression] = useState<KurumiExpression>('main')
  const [activeSection, setActiveSection] = useState<string>('hero')

  // Expression mapping based on section
  const expressionMap: Record<string, KurumiExpression> = {
    hero: 'main',
    skills: 'happy',
    portfolio: 'happy',
    experience: 'thinking',
    education: 'thinking',
    certifications: 'happy'
  }

  useEffect(() => {
    // Create pixel particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.floor(Math.random() * 3 + 2) * 2, // Pixel-perfect sizes: 4, 6, 8
      delay: Math.random() * 5
    }))
    setParticles(particleArray)
  }, [])

  // Track scroll position to change expression
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'portfolio', 'experience', 'education', 'certifications']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(`kurumi-${section}`)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            setCurrentExpression(expressionMap[section] || 'main')
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  const pixelBorderClass = "border-4 border-red-600 shadow-[4px_4px_0px_0px_rgba(185,28,28,1)]"
  const pixelCardClass = "bg-gray-900 border-4 border-red-700 shadow-[6px_6px_0px_0px_rgba(127,29,29,1)] hover:shadow-[8px_8px_0px_0px_rgba(185,28,28,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"

  return (
    <div className="template-kurumi min-h-screen bg-[#0D0D0D] relative overflow-hidden">
      {/* Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
        }}
      />

      {/* Pixel Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(185,28,28,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185,28,28,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Floating Pixel Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-red-500"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + particle.delay,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Kurumi Character - Fixed Position */}
      <div className="fixed bottom-8 left-8 z-40 hidden lg:block">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Character Container with breathing animation */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="relative"
          >
            {/* Glow effect behind character */}
            <motion.div
              className="absolute -inset-4 bg-red-600/20 blur-xl rounded-full"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Character Frame */}
            <div className={`relative w-44 h-44 ${pixelBorderClass} bg-gradient-to-br from-gray-900 to-gray-800`}>
              {/* Inner pixel border decoration */}
              <div className="absolute inset-2 border-2 border-red-700/50" />

              {/* Character Image with smooth transition */}
              <motion.div
                key={currentExpression}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-1"
              >
                <Image
                  src={`/data/kurumi/${currentExpression}.png`}
                  alt="Kurumi"
                  fill
                  className="object-contain p-2"
                  style={{ imageRendering: 'auto' }}
                  priority
                />
              </motion.div>

              {/* Decorative corner pixels */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-red-500" />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-500" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-red-500" />
            </div>

            {/* Animated particles around character */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-red-400"
                style={{
                  left: `${20 + i * 25}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Speech Bubble - Positioned properly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            key={activeSection}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.2
            }}
            className="absolute -top-20 left-36 min-w-[140px]"
          >
            <div className="relative bg-gray-900 border-4 border-red-600 px-4 py-3 shadow-[4px_4px_0px_0px_rgba(185,28,28,1)]">
              {/* Speech bubble tail */}
              <div
                className="absolute -left-3 bottom-4 w-0 h-0"
                style={{
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderRight: '12px solid #dc2626',
                }}
              />
              <div
                className="absolute -left-1 bottom-4 w-0 h-0"
                style={{
                  borderTop: '6px solid transparent',
                  borderBottom: '6px solid transparent',
                  borderRight: '10px solid #111827',
                }}
              />

              {/* Animated text */}
              <motion.p
                className="text-red-400 text-sm font-mono whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {activeSection === 'hero' && "✨ Welcome~!"}
                {activeSection === 'skills' && "💪 Nice skills~"}
                {activeSection === 'portfolio' && "🎯 Great work!"}
                {activeSection === 'experience' && "🤔 Impressive..."}
                {activeSection === 'education' && "📚 Knowledge~"}
                {activeSection === 'certifications' && "🏆 Certified!"}
              </motion.p>

              {/* Blinking cursor */}
              <motion.span
                className="inline-block w-2 h-4 bg-red-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Character name tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-3 text-center"
          >
            <span
              className="px-4 py-1 bg-red-700 text-white text-xs font-bold border-2 border-red-500 shadow-[2px_2px_0px_0px_rgba(127,29,29,1)]"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}
            >
              KURUMI
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section id="kurumi-hero" className="min-h-screen flex items-center justify-center relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container text-center px-4"
        >
          {/* Pixel Art Avatar */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <div className={`w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white text-5xl font-bold ${pixelBorderClass}`}
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                {profile.name.split(' ').map(n => n[0]).join('')}
              </div>
              {/* Decorative Corner Pixels */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-500" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-4 text-white pixel-title"
            style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #7f1d1d' }}
          >
            <span className="text-red-500">{profile.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl mb-6 text-red-400"
            style={{ fontFamily: "'VT323', monospace", letterSpacing: '2px' }}
          >
            &lt; {profile.position} /&gt;
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-mono"
          >
            {profile.description}
          </motion.p>

          {/* Pixel Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className={`px-6 py-3 bg-red-700 text-white font-bold transition-all duration-200 ${pixelBorderClass} hover:bg-red-600 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(185,28,28,1)]`}
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px' }}
            >
              <Mail size={16} className="inline mr-2" />
              CONTACT
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 bg-gray-800 text-red-400 font-bold transition-all duration-200 ${pixelBorderClass} hover:bg-gray-700 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(185,28,28,1)]`}
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px' }}
            >
              <Linkedin size={16} className="inline mr-2" />
              LINKEDIN
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 bg-gray-800 text-red-400 font-bold transition-all duration-200 ${pixelBorderClass} hover:bg-gray-700 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(185,28,28,1)]`}
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px' }}
            >
              <Github size={16} className="inline mr-2" />
              GITHUB
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="kurumi-skills" className="py-20 relative z-10">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-red-500 mr-3" size={32} />
              <h2
                className="text-2xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #7f1d1d' }}
              >
                SKILLS
              </h2>
            </div>
            <div className="w-48 h-2 bg-red-600 mx-auto shadow-[4px_4px_0px_0px_rgba(127,29,29,1)]" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`px-5 py-3 bg-gray-900 text-red-400 font-mono font-bold transition-all duration-200 border-4 border-red-700 shadow-[4px_4px_0px_0px_rgba(127,29,29,1)] hover:shadow-[6px_6px_0px_0px_rgba(185,28,28,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-red-950 cursor-default`}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="kurumi-portfolio" className="py-20 relative z-10 bg-gray-950/50">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Target className="text-red-500 mr-3" size={32} />
              <h2
                className="text-2xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #7f1d1d' }}
              >
                PROJECTS
              </h2>
            </div>
            <div className="w-48 h-2 bg-red-600 mx-auto shadow-[4px_4px_0px_0px_rgba(127,29,29,1)]" />
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
                className={`${pixelCardClass} p-6 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className="text-lg font-bold text-white group-hover:text-red-400 transition-colors"
                    style={{ fontFamily: "'VT323', monospace", fontSize: '24px' }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-sm text-red-400 bg-red-950 px-3 py-1 border-2 border-red-700 font-bold font-mono">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed font-mono text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-gray-800 text-red-400 border-2 border-red-700/50 font-mono"
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
                      className="flex-1 text-center px-4 py-2 bg-red-700 text-white font-bold transition-all duration-200 border-4 border-red-600 shadow-[3px_3px_0px_0px_rgba(127,29,29,1)] hover:shadow-[4px_4px_0px_0px_rgba(185,28,28,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] font-mono text-sm"
                    >
                      <Zap size={14} className="inline mr-1" />
                      DEMO
                    </a>
                  )}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gray-800 text-red-400 font-bold transition-all duration-200 border-4 border-red-700 shadow-[3px_3px_0px_0px_rgba(127,29,29,1)] hover:shadow-[4px_4px_0px_0px_rgba(185,28,28,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] font-mono text-sm"
                    >
                      <Github size={14} className="inline mr-1" />
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
      <section id="kurumi-experience" className="py-20 relative z-10">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="text-red-500 mr-3" size={32} />
              <h2
                className="text-2xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #7f1d1d' }}
              >
                EXPERIENCE
              </h2>
            </div>
            <div className="w-48 h-2 bg-red-600 mx-auto shadow-[4px_4px_0px_0px_rgba(127,29,29,1)]" />
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
                className={`${pixelCardClass} p-8 group`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors"
                      style={{ fontFamily: "'VT323', monospace", fontSize: '28px' }}
                    >
                      {exp.company}
                    </h3>
                    <p className="text-lg text-red-400 font-mono">
                      {exp.position}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <div className="px-6 py-3 bg-red-700 text-white font-bold border-4 border-red-600 shadow-[4px_4px_0px_0px_rgba(127,29,29,1)] font-mono">
                      <Clock size={14} className="inline mr-2" />
                      {exp.start_year} - {exp.end_year}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed font-mono">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="kurumi-education" className="py-20 relative z-10 bg-gray-950/50">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="text-red-500 mr-3" size={32} />
              <h2
                className="text-2xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #7f1d1d' }}
              >
                EDUCATION
              </h2>
            </div>
            <div className="w-48 h-2 bg-red-600 mx-auto shadow-[4px_4px_0px_0px_rgba(127,29,29,1)]" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${pixelCardClass} p-6 group`}
              >
                <h3
                  className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors"
                  style={{ fontFamily: "'VT323', monospace", fontSize: '24px' }}
                >
                  {edu.institution}
                </h3>
                <p className="text-red-400 font-mono mb-2">{edu.degree}</p>
                <p className="text-gray-500 font-mono text-sm">
                  {edu.start_year} - {edu.end_year}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="kurumi-certifications" className="py-20 relative z-10">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Trophy className="text-red-500 mr-3" size={32} />
              <h2
                className="text-2xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '4px 4px 0 #7f1d1d' }}
              >
                CERTS
              </h2>
            </div>
            <div className="w-48 h-2 bg-red-600 mx-auto shadow-[4px_4px_0px_0px_rgba(127,29,29,1)]" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${pixelCardClass} p-6 group`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-700 border-4 border-red-600 flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-white mb-1 group-hover:text-red-400 transition-colors"
                      style={{ fontFamily: "'VT323', monospace", fontSize: '20px' }}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-red-400 font-mono text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 font-mono text-xs mt-1">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-4 border-red-700 relative z-10">
        <div className="container px-4 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-red-400 mb-4">
              <Star size={16} />
              <span className="font-mono text-sm">
                CRAFTED WITH PIXEL PERFECTION
              </span>
              <Star size={16} />
            </div>
            <p className="text-gray-500 font-mono text-sm">
              © {new Date().getFullYear()} {profile.name} | KURUMI THEME
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
