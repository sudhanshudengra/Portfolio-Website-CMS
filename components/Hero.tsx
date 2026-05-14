'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { useEffect } from 'react'

export function Hero({ data }: { data?: any }) {
  const resumeHref = data?.resumeUrl || '/resume.pdf'
  const greetingText = data?.heroGreeting || "Hi, I'm Sudhanshu"
  const headlineText = data?.heroHeadline || "Building robust applications & scalable systems."
  const subtitleText = data?.heroSubtitle || "I'm a Full Stack Engineer specializing in high-density data visualizations, schema-driven architectures, and performance-critical AI solutions for enterprise clients."

  useEffect(() => {
    // Lock scrolling while the initial entrance animation plays
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      document.body.style.overflow = ''
    }, 2800)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="relative z-10 w-full flex flex-col items-center text-center space-y-10">
        <motion.div
          className="font-mono text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold mb-4 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {greetingText.split('').map((char: string, index: number) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, display: 'none' },
                visible: { opacity: 1, display: 'inline-block' }
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}

          <motion.div
            className="inline-block origin-bottom text-3xl md:text-4xl lg:text-5xl"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', stiffness: 200, damping: 10 }
              }
            }}
          >
            <motion.span
              className="inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                delay: 2.5
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center w-full space-y-10 pt-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter leading-tight max-w-4xl"
          >
            {headlineText.split('&').map((part: string, i: number, arr: string[]) => (
              <span key={i}>
                {part}
                {i !== arr.length - 1 && (
                  <span className="text-muted-foreground italic font-serif text-[0.85em]">
                    &amp;
                  </span>
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
          >
            {subtitleText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <a href="#projects">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium cursor-pointer"
              >
                View Case Studies
              </Button>
            </a>
            <a href={resumeHref} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium group cursor-pointer"
              >
                <FileText className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
