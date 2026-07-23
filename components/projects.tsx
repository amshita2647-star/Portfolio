'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'CivicLens',
      subtitle: 'AI-Powered Local Government Decision Tracker',
      description:
        'An innovative AI-driven platform designed to democratize civic participation. CivicLens personalizes government policy impacts for everyday citizens, enabling them to understand how policies affect their lives.',
      techStack: ['Python', 'LLM Integration', 'Web Scraping', 'Tailwind CSS', 'React'],
      color: 'from-cyan-400/20 to-blue-500/20',
      borderColor: 'border-cyan-400/50',
      status: 'In Progress',
      progress: 10,
      highlights: [
        'Real-time policy tracking',
        'AI personalization engine',
        'Interactive dashboard',
        'Civic impact analysis',
      ],
    },
    {
      id: 2,
      title: 'C++ Sudoku Game Engine',
      subtitle: 'Object-Oriented Puzzle Engine',
      description:
        'A high-performance puzzle engine featuring integrated timing mechanisms and optimized memory management. Demonstrates advanced OOP design principles with clean architecture.',
      techStack: ['C++', 'Modern OOP Design', 'Game Mechanics', 'Performance Optimization'],
      color: 'from-blue-400/20 to-cyan-500/20',
      borderColor: 'border-blue-400/50',
      highlights: [
        'Optimized algorithms',
        'Memory efficiency',
        'Real-time performance',
        'Clean OOP architecture',
      ],
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
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
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
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground/60 text-lg">Showcasing my journey in systems and AI</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Card */}
              <div className={`relative bg-card border ${project.borderColor} rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 h-full flex flex-col`}>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                    {project.status && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'In Progress' 
                          ? 'bg-amber-500/20 border border-amber-400/50 text-amber-400'
                          : 'bg-green-500/20 border border-green-400/50 text-green-400'
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-cyan-400/80 font-medium mb-3">{project.subtitle}</p>
                  {project.progress !== undefined && (
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-foreground/50 font-medium">Progress</span>
                        <span className="text-xs text-foreground/70 font-semibold">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-card border border-cyan-500/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">{project.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span className="text-foreground/60">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-foreground/60 text-sm font-medium mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 text-sm font-medium group/btn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-sm font-medium group/btn"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
