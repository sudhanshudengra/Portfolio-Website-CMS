'use client'

import { motion } from 'framer-motion'
import { Code2, ExternalLink, GitBranch as Github } from 'lucide-react'
import Image from 'next/image'
import { urlForImage } from '../sanity/lib/image'

type ProjectMetric = {
  _key?: string
  label?: string
  value?: string
}

type ProjectItem = {
  _key?: string
  title?: string
  description?: string
  technologies?: string[]
  features?: string[]
  metrics?: ProjectMetric[]
  liveLink?: string
  repoLink?: string
  coverImage?: Parameters<typeof urlForImage>[0]
}

export function Projects({ data }: { data: ProjectItem[] }) {
  if (!data || data.length === 0) return null

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50"
    >
      <div className="mb-24">
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Selected Works
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
          Impact-Driven Development
        </h3>
        <p className="mt-6 text-muted-foreground max-w-2xl text-lg font-light">
          Detailed case studies on systems designed for massive throughput and
          mission-critical reliability.
        </p>
      </div>

      <div className="space-y-32">
        {data.map((project, index) => (
          <motion.div
            key={project._key || index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
          >
            <div className="flex-1 space-y-8 w-full">
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-4xl lg:text-5xl font-medium tracking-tight">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <ul className="space-y-3 border-l border-border pl-6">
                  {project.features.map((feature: string) => (
                    <li
                      key={feature}
                      className="text-base text-muted-foreground font-light"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-8 pt-8">
                  {project.metrics.map(metric => (
                    <div key={metric._key}>
                      <p className="text-4xl font-medium tracking-tighter mb-2">
                        {metric.value}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center space-x-2 text-sm font-medium transition-colors hover:text-muted-foreground cursor-pointer"
                  >
                    <span>View Live Project</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center space-x-2 text-sm font-medium transition-colors hover:text-muted-foreground cursor-pointer"
                  >
                    <span>View Source</span>
                    <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex-1 w-full aspect-4/3 relative bg-muted/30 group overflow-hidden">
              {project.coverImage ? (
                <Image
                  src={urlForImage(project.coverImage).url()}
                  alt={project.title || 'Project preview'}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover mix-blend-normal opacity-100 xl:mix-blend-luminosity xl:opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 xl:group-hover:scale-105 transition-all duration-1000 ease-out"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 border border-border/50">
                  <Code2 className="w-12 h-12 text-muted-foreground/30 mb-6" />
                  <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
                    Project Preview
                  </p>
                  <p className="text-xs text-muted-foreground/40 mt-4 italic">
                    Pending asset upload
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
