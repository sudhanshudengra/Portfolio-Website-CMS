'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Navigation({ data }: { data?: any }) {
  const resumeHref = data?.resumeUrl || '/resume.pdf'

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold tracking-tight text-foreground">
          Sudhanshu Dengra
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
        <Link
          href="#projects"
          className="hover:text-foreground transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="hover:text-foreground transition-colors"
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className="hover:text-foreground transition-colors"
        >
          Experience
        </Link>
        <Link
          href="#philosophy"
          className="hover:text-foreground transition-colors"
        >
          Philosophy
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mr-2"
        >
          <FileText className="w-4 h-4 mr-2" />
          Resume
        </a>
        <ThemeToggle />
        <Link href="#contact">
          <Button className="rounded-full px-6 font-semibold shadow-sm cursor-pointer">
            Get in touch
          </Button>
        </Link>
      </div>
    </motion.nav>
  )
}
