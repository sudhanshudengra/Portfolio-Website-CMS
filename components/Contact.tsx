"use client"

import React, { useState } from 'react'
import { Mail, MapPin, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Contact({ data }: { data?: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const resumeHref = data?.resumeUrl || "/resume.pdf"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1500)
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Copy & Info */}
        <div className="flex-1 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 uppercase">
              Ready to build <br/>
              <span className="text-cyan-400">something robust?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md">
              I am currently accepting inquiries for high-impact production roles and select architectural consultancy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 pt-4"
          >
            <div className="flex items-center space-x-4 text-sm font-mono tracking-widest uppercase">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>sudhanshudengra07@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-sm font-mono tracking-widest uppercase">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>India / Remote Worldwide</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 w-full max-w-xl lg:ml-auto"
        >
          <div className="bg-[#111111] border border-white/5 rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="space-y-3">
                <label htmlFor="name" className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase block">
                  Identity
                </label>
                <input 
                  id="name" 
                  required 
                  placeholder="YOUR NAME" 
                  className="w-full bg-black/50 border border-white/5 rounded-md px-4 py-3 text-sm font-mono focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-muted-foreground/30"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase block">
                  Contact Email
                </label>
                <input 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-black/50 border border-white/5 rounded-md px-4 py-3 text-sm font-mono focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-muted-foreground/30"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase block">
                  Project Scope
                </label>
                <textarea 
                  id="message" 
                  required 
                  placeholder="DESCRIBE THE PROJECT PARAMETERS..." 
                  className="w-full min-h-[120px] resize-none bg-black/50 border border-white/5 rounded-md px-4 py-3 text-sm font-mono focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-muted-foreground/30"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 bg-white hover:bg-gray-200 text-black font-bold tracking-widest uppercase text-xs rounded-md transition-colors"
              >
                {isSubmitting ? "Executing..." : "Execute Transmission"}
              </Button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
