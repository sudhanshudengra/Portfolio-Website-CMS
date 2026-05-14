type SiteSettings = {
  githubUrl?: string
  linkedinUrl?: string
  twitterUrl?: string
}

export function Footer({ data }: { data?: SiteSettings }) {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-muted-foreground font-mono tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Sudhanshu Dengra.</p>
          <p className="mt-1">Engineered with Next.js & Sanity CMS.</p>
        </div>

        <div className="flex space-x-8 text-sm font-medium tracking-wide">
          <a
            href={data?.githubUrl || 'https://github.com/sudhanshudengra'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            GitHub
          </a>
          <a
            href={
              data?.linkedinUrl ||
              'https://www.linkedin.com/in/sudhanshudengra/'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href={data?.twitterUrl || 'https://x.com/Sudhanshu_0705'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
