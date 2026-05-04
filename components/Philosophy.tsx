"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function Philosophy({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null

  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="mb-20">
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">The Methodology</h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">Obsessive about the <span className="italic font-serif text-muted-foreground">invisible details.</span></h3>
        <p className="mt-6 text-muted-foreground max-w-2xl text-lg font-light">A system is only as strong as its weakest edge case. I build with a "fail-fast, recover-faster" philosophy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <motion.div 
            key={item._key || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="group flex flex-col"
          >
            <div className="pt-8 border-t border-border group-hover:border-foreground transition-colors duration-500">
              <h4 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h4>
              <p className="text-muted-foreground text-base leading-relaxed font-light mb-12">
                {item.description}
              </p>
              
              <div className="mt-auto flex items-baseline justify-between">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{item.metricLabel}</span>
                <span className="text-3xl font-medium tracking-tighter">{item.metricValue}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
