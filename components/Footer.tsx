import React from 'react'

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-muted-foreground font-mono tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Sudhanshu Dengra.</p>
          <p className="mt-1">Engineered with Next.js & Sanity CMS.</p>
        </div>
        
        <div className="flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
