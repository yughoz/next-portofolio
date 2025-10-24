'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Monitor, Sparkles, Cat, Flame } from 'lucide-react'
import { useState } from 'react'
import { useTemplate } from '@/contexts/TemplateContext'
import { TemplateType } from '@/types/template'

const templateConfig = {
  default: {
    name: 'Modern Developer',
    description: 'Clean, professional design',
    icon: Monitor,
    color: 'from-blue-500 to-teal-500'
  },
  anime: {
    name: 'Anime Theme',
    description: 'Kawaii anime aesthetics',
    icon: Sparkles,
    color: 'from-pink-400 to-purple-500'
  },
  cat: {
    name: 'Neko Theme',
    description: 'Whimsical neko animations',
    icon: Cat,
    color: 'from-orange-400 to-pink-500'
  },
  anime2: {
    name: 'Anime 2 Theme',
    description: 'Dark modern anime style',
    icon: Flame,
    color: 'from-red-600 to-black'
  }
}

export default function TemplateSwitcher() {
  const { currentTemplate, setTemplate, isLoading } = useTemplate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectTemplate = (template: TemplateType) => {
    setTemplate(template)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <motion.button
          onClick={toggleDropdown}
          className="p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-700/80 transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          <Palette
            size={20}
            className="text-white"
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-lg border border-gray-700 rounded-lg shadow-xl"
            >
              <div className="p-4">
                <div className="px-3 py-2 text-sm font-medium text-gray-300 mb-4">
                  Choose Template
                </div>
                {Object.entries(templateConfig).map(([key, config]) => {
                  const Icon = config.icon
                  const isActive = currentTemplate === key

                  return (
                    <motion.button
                      key={key}
                      onClick={() => selectTemplate(key as TemplateType)}
                      className={`w-full flex items-start gap-4 p-4 rounded-lg transition-all duration-200 mb-2 ${
                        isActive
                          ? 'bg-gray-700/50 border border-teal-500/30'
                          : 'hover:bg-gray-700/30 border border-transparent'
                      }`}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${config.color} text-white`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-white font-medium text-sm">
                          {config.name}
                        </h3>
                        <p className="text-gray-400 text-xs mt-1">
                          {config.description}
                        </p>
                      </div>
                      {isActive && (
                        <div className="text-teal-400">
                          <div className="w-5 h-5 rounded-full bg-teal-400/20 border-2 border-teal-400 flex items-center justify-center">
                            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </motion.button>
                  )
                })}

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-400 text-center">
                    Templates change the entire visual design and layout
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}