"use client"

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Experience({ data }: { data: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  if (!data || data.length === 0) return null

  return (
    <section id="experience" className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-border/50" ref={containerRef}>
      <div className="mb-32 text-center">
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">Professional Journey</h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">Enterprise Experience</h3>
      </div>

      <div className="relative">
        {/* Timeline Line background */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/30 -translate-x-1/2" />
        
        {/* Animated Timeline Line */}
        <motion.div 
          style={{ scaleY: pathLength, originY: 0 }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground -translate-x-1/2" 
        />

        <div className="space-y-32">
          {data.map((exp, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={exp._id} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-background border-2 border-foreground -translate-x-1/2 z-10" />

                {/* Content */}
                <div className="hidden md:block w-1/2 pl-12 md:pl-0" />
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-1/2 pl-12 md:px-16 ${isEven ? 'md:text-left' : 'md:text-right'}`}
                >
                  <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
                    {exp.startDate ? new Date(exp.startDate).getFullYear() : ''} — {exp.isCurrent ? 'PRESENT' : (exp.endDate ? new Date(exp.endDate).getFullYear() : '')}
                  </p>
                  <h4 className="text-3xl font-medium tracking-tight mb-2">{exp.role}</h4>
                  <p className="text-muted-foreground font-serif italic text-xl mb-6">{exp.company}</p>
                  
                  <div className="text-muted-foreground text-base leading-relaxed font-light mb-8">
                    {exp.description?.[0]?.children?.[0]?.text || ''}
                  </div>

                  <div className={`flex flex-wrap gap-3 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                    {exp.technologies?.map((tech: string) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
