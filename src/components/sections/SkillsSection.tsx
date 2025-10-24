'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

interface SkillsSectionProps {
  skills: string[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
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
            <Code2 className="text-teal-500 mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
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
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 backdrop-blur-sm group"
            >
              <span className="text-gray-300 group-hover:text-teal-400 transition-colors font-medium">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}