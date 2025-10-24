'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar } from 'lucide-react'
import { Experience } from '@/types/portfolio'

interface ExperienceSectionProps {
  experience: Experience[]
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 px-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Building2 className="text-teal-500 mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
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
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 backdrop-blur-sm"
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
                    <Calendar size={16} />
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
  )
}