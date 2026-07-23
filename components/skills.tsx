'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Brain } from 'lucide-react'

export function Skills() {
  const skillsData = [
    {
      category: 'Systems & Core',
      icon: Code2,
      color: 'from-cyan-400 to-blue-500',
      skills: ['C++', 'C', 'Object-Oriented Design', 'Abstraction & Encapsulation'],
    },
    {
      category: 'Fundamentals',
      icon: Brain,
      color: 'from-blue-400 to-cyan-500',
      skills: ['Data Structures', 'Algorithms', 'Graph Theory', 'Group Theory'],
    },
    {
      category: 'Platforms & Tools',
      icon: Zap,
      color: 'from-cyan-400 to-emerald-500',
      skills: ['Python', 'LLM Integration', 'Web Scraping', 'Tailwind CSS'],
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-foreground/60 text-lg">Specialized expertise across multiple domains</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillsData.map((skillGroup, idx) => {
            const Icon = skillGroup.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skillGroup.color} p-3 mb-6 flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-background" />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-2xl font-bold mb-6 text-foreground">{skillGroup.category}</h3>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {skillGroup.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
