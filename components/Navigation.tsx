'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Navigation({ data }: { data?: { resumeUrl?: string } }) {
  const resumeHref = data?.resumeUrl || '/resume.pdf'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'philosophy', label: 'Philosophy' }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/80 border-b border-border"
      >
        <div className="flex items-center space-x-2 md:min-w-50">
          <span className="text-xl font-bold tracking-tight text-foreground whitespace-nowrap">
            Sudhanshu Dengra
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={e => scrollToSection(e, link.id)}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
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
            className="hidden sm:block cursor-pointer"
          >
            <Button className="rounded-full px-6 font-semibold shadow-sm cursor-pointer">
              Get in touch
            </Button>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors z-50"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 md:hidden bg-background pt-24 px-8"
          >
            <div className="flex flex-col space-y-8 text-2xl font-medium">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  onClick={e => scrollToSection(e, link.id)}
                  className="text-foreground hover:text-muted-foreground transition-colors cursor-pointer border-b border-border/50 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={e => scrollToSection(e, 'contact')}
                className="text-cyan-400 font-bold cursor-pointer"
              >
                Get in touch
              </motion.a>
              <motion.a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center text-muted-foreground cursor-pointer"
              >
                <FileText className="w-6 h-6 mr-3" />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

