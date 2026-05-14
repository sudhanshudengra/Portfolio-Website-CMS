'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  Bot,
  Code,
  Cpu,
  Database,
  DatabaseZap,
  FileCode,
  GitBranch,
  Layout,
  Monitor,
  Paintbrush,
  PenTool,
  Server,
  Wrench
} from 'lucide-react'
import type { ComponentType } from 'react'

type SkillItem = {
  _id: string
  name?: string
  category?: string
  icon?: string
}

type LucideIcon = ComponentType<{ className?: string; strokeWidth?: number }>

const iconMap: Record<string, LucideIcon> = {
  Code,
  Server,
  Database,
  Activity,
  Monitor,
  Paintbrush,
  FileCode,
  DatabaseZap,
  GitBranch,
  PenTool,
  Cpu,
  Bot,
  Layout,
  Wrench
}

export function Skills({ data }: { data: SkillItem[] }) {
  if (!data || data.length === 0) return null

  const categories = Array.from(new Set(data.map(item => item.category)))

  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50"
    >
      <div className="mb-24">
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Technical Arsenal
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
          Tools of the trade.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
        {categories.map((category, catIdx) => {
          const categorySkills = data.filter(s => s.category === category)
          return (
            <motion.div
              key={category as string}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: catIdx * 0.1,
                ease: 'easeOut'
              }}
            >
              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-8 pb-4 border-b border-border">
                {category as string}
              </h4>
              <ul className="space-y-6">
                {categorySkills.map(skill => {
                  const Icon = skill.icon ? iconMap[skill.icon] || Code : Code
                  return (
                    <li
                      key={skill._id}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="text-muted-foreground/50 group-hover:text-foreground transition-colors duration-300">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className="font-light text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {skill.name}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
