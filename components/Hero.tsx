"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero({ data }: { data?: any }) {
  const resumeHref = data?.resumeUrl || "/resume.pdf"

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="relative z-10 w-full flex flex-col items-center text-center space-y-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-border bg-muted/30"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Senior Full Stack Engineer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-tight"
        >
          Building scalable systems from <span className="text-muted-foreground italic font-serif">ERP platforms</span> to mobile apps.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          I specialize in high-density data visualization, schema-driven architectures, and performance-critical AI solutions for enterprise clients.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <a href="#projects">
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium">
              View Case Studies
            </Button>
          </a>
          <a href={resumeHref} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-medium group">
              <FileText className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
