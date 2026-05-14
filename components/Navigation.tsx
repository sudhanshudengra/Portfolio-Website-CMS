'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Navigation({ data }: { data?: { resumeUrl?: string } }) {
  const resumeHref = data?.resumeUrl || '/resume.pdf'
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Force scroll to top on every reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="flex items-center space-x-2 min-w-50">
        <span className="text-xl font-bold tracking-tight text-foreground">
          Sudhanshu Dengra
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
        <a
          href="#projects"
          onClick={e => scrollToSection(e, 'projects')}
          className="hover:text-foreground transition-colors cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#skills"
          onClick={e => scrollToSection(e, 'skills')}
          className="hover:text-foreground transition-colors cursor-pointer"
        >
          Skills
        </a>
        <a
          href="#experience"
          onClick={e => scrollToSection(e, 'experience')}
          className="hover:text-foreground transition-colors cursor-pointer"
        >
          Experience
        </a>
        <a
          href="#philosophy"
          onClick={e => scrollToSection(e, 'philosophy')}
          className="hover:text-foreground transition-colors cursor-pointer"
        >
          Philosophy
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <AnimatePresence>
          {isScrolled && (
            <motion.a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 15, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="hidden sm:flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mr-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 mr-2 " />
              Resume
            </motion.a>
          )}
        </AnimatePresence>
        <ThemeToggle />
        <a
          href="#contact"
          onClick={e => scrollToSection(e, 'contact')}
          className="cursor-pointer"
        >
          <Button className="rounded-full px-6 font-semibold shadow-sm cursor-pointer">
            Get in touch
          </Button>
        </a>
      </div>
    </motion.nav>
  )
}
