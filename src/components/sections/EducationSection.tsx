'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { Education } from '@/types/portfolio'

interface EducationSectionProps {
  education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
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
    <section className="py-20 px-4 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="text-teal-500 mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
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
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 backdrop-blur-sm"
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
  )
}