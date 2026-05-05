'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import React, { useState } from 'react'

export function Contact({ data }: { data?: { email?: string } }) {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // 1. Log the message securely to Sanity CMS via our backend API
      const localResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const localResult = await localResponse.json()
      if (!localResponse.ok) {
        throw new Error(localResult.error || 'Failed to save to database.')
      }

      // 2. Dispatch the email directly from the browser to bypass Cloudflare's server blocking
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      if (!web3FormsKey) {
        console.warn(
          'Warning: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing. Skipping email dispatch.'
        )
      } else {
        const emailPayload = new FormData()
        emailPayload.append('access_key', web3FormsKey)
        emailPayload.append('name', formData.name)
        emailPayload.append('email', formData.email)
        emailPayload.append('message', formData.message)
        emailPayload.append(
          'subject',
          `New Portfolio Message from ${formData.name}`
        )
        emailPayload.append('from_name', 'Portfolio Contact Bot')

        // Generate a localized Indian Standard Time (IST) timestamp
        const istTimestamp = new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'medium',
          timeStyle: 'short'
        })
        emailPayload.append('Submitted At (IST)', istTimestamp)

        const emailResponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: emailPayload
        })

        const emailResult = await emailResponse.json()
        if (!emailResponse.ok || !emailResult.success) {
          throw new Error(
            emailResult.message || 'Failed to deliver email notification.'
          )
        }
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error: Error | unknown) {
      console.error('Submission error:', error)
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'An unexpected error occurred.'
      )
    }
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
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center flex flex-col items-center justify-center py-12 space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold tracking-tight uppercase font-mono text-foreground">
                  Message Sent
                </h3>
                <p className="text-muted-foreground max-w-sm font-light text-sm leading-relaxed">
                  Thank you for reaching out! I have received your message and
                  look forward to connecting with you soon.
                </p>
                <Button
                  type="button"
                  onClick={() => setStatus('idle')}
                  variant="outline"
                  className="rounded-full px-6 cursor-pointer hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="DESCRIBE THE PROJECT PARAMETERS..."
                    className="w-full min-h-30 resize-none bg-muted/30 border border-border/50 rounded-md px-4 py-3 text-sm font-mono focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300 placeholder:text-muted-foreground/40 hover:bg-muted/50"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-500 font-mono tracking-wide">
                    {errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest uppercase text-xs rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 active:translate-y-0 cursor-pointer disabled:opacity-50"
                >
                  {status === 'loading'
                    ? 'Executing...'
                    : 'Execute Transmission'}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
