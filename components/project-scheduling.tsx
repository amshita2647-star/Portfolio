'use client'

import { motion } from 'framer-motion'

export function ProjectScheduling() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="scheduling" className="py-20 px-4 bg-background">
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
            Project <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Scheduling</span>
          </h2>
          <p className="text-foreground/60 text-lg">CivicLens Development Workflow</p>
        </motion.div>

        {/* Diagrams Container */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* AOE Diagram */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-6">Activity-on-Edge (AOE)</h3>
            <div className="bg-card border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 flex-grow flex items-center justify-center">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-auto max-w-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.1))' }}
              >
                {/* Define Markers */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
                  </marker>
                  <style>{`
                    .event-circle:hover { 
                      filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.8)); 
                    }
                    .activity-label:hover {
                      opacity: 1;
                    }
                  `}</style>
                </defs>

                {/* Arrows (Activities) */}
                <line x1="80" y1="200" x2="140" y2="200" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#arrowhead)" opacity="0.8" />
                <line x1="200" y1="200" x2="260" y2="200" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#arrowhead)" opacity="0.8" />
                <line x1="320" y1="200" x2="380" y2="200" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#arrowhead)" opacity="0.8" />
                <line x1="440" y1="200" x2="500" y2="200" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#arrowhead)" opacity="0.8" />
                <line x1="560" y1="200" x2="620" y2="200" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#arrowhead)" opacity="0.8" />
                <line x1="680" y1="200" x2="740" y2="200" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#arrowhead)" opacity="0.8" />

                {/* Events (Circles) */}
                <circle cx="60" cy="200" r="15" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="event-circle" />
                <text x="60" y="235" textAnchor="middle" fontSize="12" fill="#94a3b8" className="font-semibold">Start</text>

                <circle cx="170" cy="200" r="15" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="event-circle" />
                <circle cx="290" cy="200" r="15" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="event-circle" />
                <circle cx="410" cy="200" r="15" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="event-circle" />
                <circle cx="530" cy="200" r="15" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="event-circle" />
                <circle cx="650" cy="200" r="15" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="event-circle" />
                <circle cx="770" cy="200" r="15" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="event-circle" />
                <text x="770" y="235" textAnchor="middle" fontSize="12" fill="#94a3b8" className="font-semibold">End</text>

                {/* Activity Labels */}
                <text x="110" y="185" textAnchor="middle" fontSize="11" fill="#0ea5e9" fontWeight="600" className="activity-label">A</text>
                <text x="230" y="185" textAnchor="middle" fontSize="11" fill="#0ea5e9" fontWeight="600" className="activity-label">B</text>
                <text x="350" y="185" textAnchor="middle" fontSize="11" fill="#0ea5e9" fontWeight="600" className="activity-label">C</text>
                <text x="470" y="185" textAnchor="middle" fontSize="11" fill="#0ea5e9" fontWeight="600" className="activity-label">D</text>
                <text x="590" y="185" textAnchor="middle" fontSize="11" fill="#0ea5e9" fontWeight="600" className="activity-label">E</text>
                <text x="710" y="185" textAnchor="middle" fontSize="11" fill="#0ea5e9" fontWeight="600" className="activity-label">F</text>

                {/* Legend */}
                <text x="60" y="320" fontSize="13" fill="#e0e8f0" fontWeight="600">Activities:</text>
                <text x="60" y="345" fontSize="12" fill="#94a3b8">A: Requirements Analysis</text>
                <text x="60" y="365" fontSize="12" fill="#94a3b8">B: System Design</text>
                <text x="320" y="345" fontSize="12" fill="#94a3b8">C: Frontend Development</text>
                <text x="320" y="365" fontSize="12" fill="#94a3b8">D: Backend Development</text>
                <text x="580" y="345" fontSize="12" fill="#94a3b8">E: AI Integration</text>
                <text x="580" y="365" fontSize="12" fill="#94a3b8">F: Testing & Deployment</text>
              </svg>
            </div>
          </motion.div>

          {/* AON Diagram */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-6">Activity-on-Node (AON)</h3>
            <div className="bg-card border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 flex-grow flex items-center justify-center">
              <svg
                viewBox="0 0 500 700"
                className="w-full h-auto max-w-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.1))' }}
              >
                {/* Define Markers */}
                <defs>
                  <marker
                    id="arrowhead-aon"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
                  </marker>
                  <style>{`
                    .node-rect {
                      transition: all 0.3s ease;
                    }
                    .node-rect:hover {
                      filter: drop-shadow(0 0 12px rgba(6, 182, 212, 0.7));
                      stroke-width: 3;
                    }
                  `}</style>
                </defs>

                {/* Connecting Arrows */}
                <line x1="250" y1="90" x2="250" y2="120" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-aon)" opacity="0.6" />
                <line x1="250" y1="180" x2="250" y2="210" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-aon)" opacity="0.6" />
                <line x1="250" y1="270" x2="250" y2="300" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-aon)" opacity="0.6" />
                <line x1="250" y1="360" x2="250" y2="390" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-aon)" opacity="0.6" />
                <line x1="250" y1="450" x2="250" y2="480" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-aon)" opacity="0.6" />
                <line x1="250" y1="540" x2="250" y2="570" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowhead-aon)" opacity="0.6" />

                {/* Nodes (Rectangles) */}
                {/* Requirements Analysis */}
                <rect x="150" y="30" width="200" height="60" rx="8" fill="none" stroke="#0ea5e9" strokeWidth="2.5" className="node-rect" />
                <text x="250" y="55" textAnchor="middle" fontSize="14" fill="#e0e8f0" fontWeight="600">Requirements Analysis</text>

                {/* System Design */}
                <rect x="150" y="120" width="200" height="60" rx="8" fill="none" stroke="#0ea5e9" strokeWidth="2.5" className="node-rect" />
                <text x="250" y="145" textAnchor="middle" fontSize="14" fill="#e0e8f0" fontWeight="600">System Design</text>

                {/* Frontend Development */}
                <rect x="150" y="210" width="200" height="60" rx="8" fill="none" stroke="#0ea5e9" strokeWidth="2.5" className="node-rect" />
                <text x="250" y="235" textAnchor="middle" fontSize="14" fill="#e0e8f0" fontWeight="600">Frontend Development</text>

                {/* Backend Development */}
                <rect x="150" y="300" width="200" height="60" rx="8" fill="none" stroke="#0ea5e9" strokeWidth="2.5" className="node-rect" />
                <text x="250" y="325" textAnchor="middle" fontSize="14" fill="#e0e8f0" fontWeight="600">Backend Development</text>

                {/* AI Integration */}
                <rect x="150" y="390" width="200" height="60" rx="8" fill="none" stroke="#0ea5e9" strokeWidth="2.5" className="node-rect" />
                <text x="250" y="410" textAnchor="middle" fontSize="13" fill="#e0e8f0" fontWeight="600">Google Gemini AI</text>
                <text x="250" y="430" textAnchor="middle" fontSize="13" fill="#e0e8f0" fontWeight="600">Integration</text>

                {/* Testing */}
                <rect x="150" y="480" width="200" height="60" rx="8" fill="none" stroke="#0ea5e9" strokeWidth="2.5" className="node-rect" />
                <text x="250" y="510" textAnchor="middle" fontSize="14" fill="#e0e8f0" fontWeight="600">Testing</text>

                {/* Deployment */}
                <rect x="150" y="570" width="200" height="60" rx="8" fill="none" stroke="#0ea5e9" strokeWidth="2.5" className="node-rect" />
                <text x="250" y="600" textAnchor="middle" fontSize="14" fill="#e0e8f0" fontWeight="600">Deployment</text>
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Legend/Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-card border border-cyan-500/10 rounded-xl p-6"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-3">Activity-on-Edge (AOE)</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Represents activities as directed edges between event nodes. Shows the sequential workflow where each activity must complete before the next can begin. Useful for understanding project dependencies and critical paths.
              </p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-3">Activity-on-Node (AON)</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Represents activities as nodes with dependencies shown by connecting arrows. Provides a clearer visualization of which phases must be completed before moving to the next stage. Commonly used in PERT and CPM analysis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
