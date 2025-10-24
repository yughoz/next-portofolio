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
  Cat,
  Star,
  Heart,
  Zap,
  TrendingUp,
  Trophy,
  Coffee,
  Sparkles
} from 'lucide-react'
import { Profile, Education, Project, Experience, Certification } from '@/types/portfolio'

interface CatPortfolioProps {
  profile: Profile
  education: Education[]
  portfolio: Project[]
  experience: Experience[]
  certifications: Certification[]
  skills: string[]
}

export default function CatPortfolio({
  profile,
  education,
  portfolio,
  experience,
  certifications,
  skills
}: CatPortfolioProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  }

  const catEmojis = ['🐱', '😺', '😸', '😻', '🐾', '🧶', '🥛', '🐟']
  const catSounds = ['Meow!', 'Purr...', 'Nya~', 'Mrrp?', 'Hiss...']

  return (
    <div className="template-cat min-h-screen gradient-bg">
      {/* Walking Cat Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`paw-${i}`}
            className="paw-print absolute"
            style={{
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
        {catEmojis.map((emoji, index) => (
          <div
            key={index}
            className="cat-decorator absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-8 animate-catPounce">
            <div className="hero-avatar relative">
              {profile.name.split(' ').map(n => n[0]).join('')}
              <div className="absolute -top-4 -right-4 text-3xl animate-catYawn">🐱</div>
              <div className="absolute -bottom-2 -left-4 text-2xl animate-catWalkIn" style={{ animationDelay: '0.3s' }}>🐾</div>
            </div>
            <div className="meow-bubble inline-block mb-6">
              {catSounds[Math.floor(Math.random() * catSounds.length)]}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading gradient-text animate-catStretch">
              {profile.name}
              <span className="inline-block ml-3 text-5xl">😸</span>
            </h1>
            <h2 className="text-2xl md:text-4xl mb-6 font-heading text-pink-300 animate-catWalkIn">
              {profile.position}
              <span className="inline-block ml-2 text-3xl">🐾</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-pink-100 mb-12 max-w-2xl mx-auto leading-relaxed animate-catWalkIn"
            style={{ animationDelay: '0.2s' }}
          >
            {profile.description}
            <span className="inline-block ml-1">✨</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 animate-catPounce">
            <a
              href={`mailto:${profile.contact.email}`}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              <Mail size={20} />
              <span>Send Meow!</span>
              <Cat className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 group"
              style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <Coffee className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 group"
              style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
            >
              <Github size={20} />
              <span>GitHub</span>
              <Cat className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            {profile.contact.instagram && (
              <a
                href={profile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
                style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}
              >
                <Instagram size={20} />
                <span>Instagram</span>
                <Heart className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="section-padding relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <GraduationCap className="text-yellow-400 mr-3" size={36} />
                <Cat className="absolute -top-3 -right-3 text-pink-400 w-5 h-5 animate-catYawn" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading gradient-text section-title">
                Neko Education
              </h2>
            </div>
            <div className="w-32 h-3 bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 mx-auto rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 stagger-children"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pink-100 mb-2 font-heading group-hover:text-yellow-300 transition-colors">
                      {edu.institution}
                      <span className="inline-block ml-2 text-xl">🎓</span>
                    </h3>
                    <p className="text-xl text-yellow-400 font-medium mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-lg text-pink-200">
                      {edu.major}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-200 to-pink-200 text-purple-900 rounded-lg border-2 border-yellow-400 font-bold font-heading">
                      {edu.start_year} - {edu.end_year}
                      <span className="inline-block ml-1">📚</span>
                    </span>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-pink-100 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Zap className="text-yellow-400 mr-3" size={36} />
                <Sparkles className="absolute -top-3 -right-3 text-pink-400 w-5 h-5 animate-spin" style={{ animationDuration: '2s' }} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading gradient-text section-title">
                Neko Skills
              </h2>
            </div>
            <div className="w-32 h-3 bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 mx-auto rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 stagger-children"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="tech-badge group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {skill}
                <span className="inline-block ml-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {['🐾', '😺', '🐱', '😸', '😻'][index % 5]}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Heart className="text-pink-400 mr-3" size={36} />
                <Cat className="absolute -top-3 -right-3 text-yellow-400 w-5 h-5 animate-catBounce" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading gradient-text section-title">
                Neko Projects
              </h2>
            </div>
            <div className="w-32 h-3 bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-300 mx-auto rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children"
          >
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card overflow-hidden group"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-pink-100 font-heading group-hover:text-yellow-300 transition-colors">
                      {project.title}
                      <span className="inline-block ml-2 text-sm">🐾</span>
                    </h3>
                    <span className="text-sm text-pink-200 bg-yellow-400 px-3 py-1 rounded-full border-2 border-yellow-300 font-bold">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-pink-100 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-badge text-xs"
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
                        className="flex-1 btn-primary text-center text-sm group"
                      >
                        Try It!
                        <Cat className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity inline-block" />
                      </a>
                    )}
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center text-sm group"
                        style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
                      >
                        Code
                        <Heart className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity inline-block" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <TrendingUp className="text-yellow-400 mr-3" size={36} />
                <Cat className="absolute -top-3 -right-3 text-pink-400 w-5 h-5 animate-catYawn" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading gradient-text section-title">
                Neko Work
              </h2>
            </div>
            <div className="w-32 h-3 bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 mx-auto rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 stagger-children"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pink-100 mb-2 font-heading group-hover:text-yellow-300 transition-colors">
                      {exp.company}
                      <span className="inline-block ml-2 text-xl">💼</span>
                    </h3>
                    <p className="text-xl text-yellow-400 font-medium mb-1">
                      {exp.position}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-200 to-pink-200 text-purple-900 rounded-lg border-2 border-yellow-400 font-bold font-heading">
                      <span>{exp.start_year} - {exp.end_year}</span>
                      <Cat className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <p className="text-pink-100 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Trophy className="text-yellow-400 mr-3" size={36} />
                <Star className="absolute -top-3 -right-3 text-pink-400 w-5 h-5 animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-heading gradient-text section-title">
                Neko Awards
              </h2>
            </div>
            <div className="w-32 h-3 bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 mx-auto rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 group"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pink-100 mb-2 font-heading group-hover:text-yellow-300 transition-colors">
                      {cert.name}
                      <span className="inline-block ml-2 text-sm">🏆</span>
                    </h3>
                    <p className="text-lg text-pink-200 mb-1">
                      {cert.issuer}
                    </p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-200 to-pink-200 text-purple-900 rounded-lg text-sm border-2 border-yellow-400 font-bold">
                      {cert.year}
                      <Star className="w-3 h-3 inline-block ml-1" />
                    </span>
                  </div>
                  <div className="ml-4">
                    <Trophy className="text-yellow-400 group-hover:text-yellow-300 transition-colors" size={28} />
                  </div>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-pink-300 transition-colors mt-4 group"
                  >
                    <span>View Trophy</span>
                    <Globe size={18} />
                    <Cat className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-pink-400 relative">
        <div className="container text-center">
          <div className="meow-bubble inline-block mb-4">
            Made with lots of catnip and love! 🐱💖
          </div>
          <p className="text-pink-200 font-bold font-heading">
            © {new Date().getFullYear()} {profile.name} 🐾 Pawsome coding experiences! ✨
          </p>
        </div>
      </footer>
    </div>
  )
}