'use client'

import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-b from-background to-background/50">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name Badge */}
        <motion.div variants={itemVariants} className="mb-4">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/50 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            Computer Science Engineering @ MIT
          </div>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight text-foreground"
        >
          Amshita N U
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-cyan-400 font-semibold mb-8"
        >
          2nd Year Computer Science Engineering Student
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building high-performance C++ systems and AI-powered solutions to tackle real-world challenges.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center px-8 py-3 bg-cyan-500 text-background font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:gap-2"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#roadmap"
            className="group inline-flex items-center justify-center px-8 py-3 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
          >
            CivicLens Roadmap
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-card border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-foreground/70 hover:text-cyan-400"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-card border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-foreground/70 hover:text-cyan-400"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:your.email@mit.edu"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-card border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-foreground/70 hover:text-cyan-400"
            aria-label="Email"
            title="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
