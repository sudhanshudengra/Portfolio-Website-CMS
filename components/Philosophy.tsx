'use client'

import { motion } from 'framer-motion'

type PhilosophyItem = {
  _key?: string
  title?: string
  description?: string
  metricLabel?: string
  metricValue?: string
}

export function Philosophy({ data }: { data: PhilosophyItem[] }) {
  if (!data || data.length === 0) return null

  return (
    <section
      id="philosophy"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-20"
      >
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
          The Methodology
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
          Obsessive about the{' '}
          <span className="italic font-serif text-muted-foreground">
            invisible details.
          </span>
        </h3>
        <p className="mt-6 text-muted-foreground max-w-2xl text-lg font-light">
          A system is only as strong as its weakest edge case. I build with a
          &ldquo;fail-fast, recover-faster&rdquo; philosophy.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={item._key || index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 1,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="group flex flex-col h-full"
          >
            <div className="flex flex-col h-full p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-foreground/20 transition-all duration-500 relative overflow-hidden">
              {/* Subtle animated background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-foreground/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted border border-border/50 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-lg font-mono font-medium">
                    {index + 1}
                  </span>
                </div>

                <h4 className="text-2xl font-medium mb-4 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed font-light mb-12">
                  {item.description}
                </p>

                <div className="mt-auto pt-6 flex items-baseline justify-between border-t border-border/50 group-hover:border-foreground/10 transition-colors duration-500">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {item.metricLabel}
                  </span>
                  <span className="text-4xl font-medium tracking-tighter">
                    {item.metricValue}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
