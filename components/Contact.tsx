'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import React, { useState } from 'react'

export function Contact({
  data
}: {
  data?: { email?: string }
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1500)
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/20"
    >
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
              Ready to build <br />
              <span className="text-cyan-400">something robust?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md">
              I am currently accepting inquiries for high-impact production
              roles and select architectural consultancy.
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
              <a
                href={`mailto:${data?.email || 'sudhanshudengra07@gmail.com'}`}
                className="hover:text-cyan-500 transition-colors relative group/link cursor-pointer"
              >
                {data?.email || 'sudhanshudengra07@gmail.com'}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover/link:w-full"></span>
              </a>
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
          className="flex-1 w-full max-w-xl lg:ml-auto relative group"
        >
          {/* Subtle glow effect behind the card that activates on hover */}
          <div className="absolute -inset-1 bg-linear-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />

          <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-2xl relative transition-all duration-500 hover:-translate-y-1 hover:border-border">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3 group/input">
                <label
                  htmlFor="name"
                  className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase block transition-colors group-focus-within/input:text-cyan-500"
                >
                  Identity
                </label>
                <input
                  id="name"
                  required
                  placeholder="YOUR NAME"
                  className="w-full bg-muted/30 border border-border/50 rounded-md px-4 py-3 text-sm font-mono focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300 placeholder:text-muted-foreground/40 hover:bg-muted/50"
                />
              </div>

              <div className="space-y-3 group/input">
                <label
                  htmlFor="email"
                  className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase block transition-colors group-focus-within/input:text-cyan-500"
                >
                  Contact Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-muted/30 border border-border/50 rounded-md px-4 py-3 text-sm font-mono focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300 placeholder:text-muted-foreground/40 hover:bg-muted/50"
                />
              </div>

              <div className="space-y-3 group/input">
                <label
                  htmlFor="message"
                  className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase block transition-colors group-focus-within/input:text-cyan-500"
                >
                  Project Scope
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="DESCRIBE THE PROJECT PARAMETERS..."
                  className="w-full min-h-30 resize-none bg-muted/30 border border-border/50 rounded-md px-4 py-3 text-sm font-mono focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300 placeholder:text-muted-foreground/40 hover:bg-muted/50"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest uppercase text-xs rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                {isSubmitting ? 'Executing...' : 'Execute Transmission'}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
