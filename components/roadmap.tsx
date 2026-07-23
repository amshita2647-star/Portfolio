'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

export function Roadmap() {
  const phases = [
    {
      name: 'Planning',
      month: 1,
      color: '#3B82F6',
      tasks: [
        'Requirements Gathering',
        'Feasibility Study',
        'Software Requirement Specification (SRS)',
        '[Milestone] Requirements Approved',
      ],
    },
    {
      name: 'Design',
      month: 2,
      color: '#8B5CF6',
      tasks: [
        'System Design',
        'Database Design',
        'UI/UX Wireframes',
        'Architecture Design',
        '[Milestone] Design Completed',
      ],
    },
    {
      name: 'Core Backend',
      month: 3,
      color: '#10B981',
      tasks: [
        'User Authentication Module',
        'Government Policy Collection',
        'Database Implementation',
      ],
    },
    {
      name: 'AI Development',
      month: 4,
      color: '#10B981',
      tasks: [
        'AI CivicLens Agent Development',
        'Policy Summarization',
        '"How Does This Affect Me?" Engine',
        '[Milestone] AI Module Completed',
      ],
    },
    {
      name: 'Frontend & Integration',
      month: 5,
      color: '#10B981',
      tasks: [
        'Dashboard Development',
        'Search & Filter Features',
        'Notification System',
        'Integration of All Modules',
      ],
    },
    {
      name: 'Testing & Deployment',
      month: 6,
      color: '#F59E0B',
      tasks: [
        'Unit Testing',
        'Integration Testing',
        'Bug Fixing',
        '[Milestone] Testing Completed',
        'Deployment',
        '[Milestone] Project Deployment',
        'Documentation & Final Presentation',
      ],
    },
  ]

  const chartData = phases.map((phase) => ({
    name: `Month ${phase.month}`,
    [phase.name]: 1,
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="roadmap" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            CivicLens Development <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-foreground/60 text-lg">6-Month Strategic Timeline</p>
        </motion.div>

        {/* Timeline Layout */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {phases.map((phase, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group">
              {/* Phase Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: phase.color }}
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{phase.name}</h3>
                  <p className="text-foreground/60 text-sm">Month {phase.month}</p>
                </div>
              </div>

              {/* Tasks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-8">
                {phase.tasks.map((task, taskIdx) => {
                  const isMilestone = task.includes('[Milestone]')
                  const taskName = task.replace('[Milestone] ', '')
                  return (
                    <div
                      key={taskIdx}
                      className={`px-4 py-3 rounded-lg border transition-all duration-300 ${
                        isMilestone
                          ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-300 font-semibold'
                          : 'bg-card border-cyan-500/20 text-foreground/80 hover:border-cyan-400/50'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {isMilestone ? (
                          <span className="text-lg">⭐</span>
                        ) : (
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                            style={{ backgroundColor: phase.color }}
                          />
                        )}
                        <span>{taskName}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Divider */}
              {idx < phases.length - 1 && (
                <div className="border-t border-cyan-500/20 mt-8" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-cyan-500/20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
            <p className="text-foreground/60 text-sm">Months Duration</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">30+</div>
            <p className="text-foreground/60 text-sm">Tasks & Milestones</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">7</div>
            <p className="text-foreground/60 text-sm">Key Deliverables</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
            <p className="text-foreground/60 text-sm">Complete Coverage</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
