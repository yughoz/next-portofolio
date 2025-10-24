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
  Award
} from 'lucide-react'
import { Profile, Education, Project, Experience, Certification } from '@/types/portfolio'

interface DefaultPortfolioProps {
  profile: Profile
  education: Education[]
  portfolio: Project[]
  experience: Experience[]
  certifications: Certification[]
  skills: string[]
}

export default function DefaultPortfolio({
  profile,
  education,
  portfolio,
  experience,
  certifications,
  skills
}: DefaultPortfolioProps) {
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

  return (
    <div className="template-default min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="hero-avatar">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading gradient-text">
              {profile.name}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-heading text-gray-300">
              {profile.position}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {profile.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              style={{ background: '#3b82f6' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#2563eb' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#3b82f6' }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              style={{ background: '#6b7280' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#4b5563' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#6b7280' }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            {profile.contact.instagram && (
              <a
                href={profile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="text-teal-500 mr-3" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text">
                Education
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                      {edu.institution}
                    </h3>
                    <p className="text-xl text-teal-400 font-medium mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-lg text-gray-300">
                      {edu.major}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg border border-teal-500/30 font-medium">
                      {edu.start_year} - {edu.end_year}
                    </span>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Code2 className="text-teal-500 mr-3" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text">
                Technical Skills
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
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
                className="tech-badge"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="text-teal-500 mr-3" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text">
                Portfolio
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 bg-gray-900/50 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
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
                        className="flex-1 btn-primary text-center text-sm"
                      >
                        View Demo
                      </a>
                    )}
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center text-sm"
                        style={{ background: '#6b7280' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#4b5563' }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = '#6b7280' }}
                      >
                        View Code
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
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Building2 className="text-teal-500 mr-3" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text">
                Work Experience
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                      {exp.company}
                    </h3>
                    <p className="text-xl text-teal-400 font-medium mb-1">
                      {exp.position}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg border border-teal-500/30 font-medium">
                      <span>{exp.start_year} - {exp.end_year}</span>
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

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="text-teal-500 mr-3" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text">
                Certifications
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-teal-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-lg text-gray-300 mb-1">
                      {cert.issuer}
                    </p>
                    <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 rounded-lg text-sm border border-teal-500/30">
                      {cert.year}
                    </span>
                  </div>
                  <div className="ml-4">
                    <Award className="text-teal-500 group-hover:text-teal-400 transition-colors" size={24} />
                  </div>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mt-4"
                  >
                    <span>View Certificate</span>
                    <Globe size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/50">
        <div className="container text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}