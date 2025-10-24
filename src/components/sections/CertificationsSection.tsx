'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { Certification } from '@/types/portfolio'

interface CertificationsSectionProps {
  certifications: Certification[]
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
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
            <Award className="text-teal-500 mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
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
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 backdrop-blur-sm group"
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
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}