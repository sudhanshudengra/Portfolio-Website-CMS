import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'kdqqibg9',
  dataset: 'production',
  apiVersion: '2024-04-30',
  useCdn: false,
  token: 'skqiDSSgcjsPLypcmR6w0jFlFDall0tESDlByEydYtNEXj74IiCGeenTjKEPsU2Qy563iAjRX2uwqmNkKJDwlvtw9oil7hdlPhQx8pUePX6E9Fiq6tJ0VNOyKancut63Nc6Yoe2QMV0eKC3tfto66CnvUpulkbkFp3jG80b7Gjl5fD5lWxFr'
})

async function seed() {
  console.log('Seeding data...')
  
  // Projects
  await client.create({
    _type: 'project',
    title: 'GST Invoice Ledger Pro',
    slug: { _type: 'slug', current: 'gst-invoice-ledger-pro' },
    description: 'A high-precision billing engine featuring deep tax logic validation, multi-currency support, and automated PDF generation for SMBs.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    features: ['Attendance Management', 'Google Drive Integration', 'Automated PDF Reconciliation', 'Real-time Analytics'],
    metrics: [
      { _key: 'm1', label: 'Uptime', value: '99.9%' },
      { _key: 'm2', label: 'Avg Response', value: '0.8s' }
    ],
    isFeatured: true
  })
  
  await client.create({
    _type: 'project',
    title: 'Production-Level ERP Ecosystem',
    slug: { _type: 'slug', current: 'erp-ecosystem' },
    description: 'Developed a comprehensive resource planning platform managing $20M+ in annual transactions. Re-architected data layer to support 500% traffic growth during peak cycles.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    features: ['High-density data visualization', 'Schema-driven architectures', 'Complex workflows'],
    metrics: [
      { _key: 'm1', label: 'Efficiency', value: '94%' },
      { _key: 'm2', label: 'Throughput', value: '2.5x' }
    ],
    isFeatured: true
  })

  // Experience
  await client.create({
    _type: 'experience',
    role: 'Jr. Full Stack Developer',
    company: 'TDC Consultancy Pvt Ltd',
    startDate: '2024-03-01',
    isCurrent: true,
    description: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        markDefs: [],
        children: [
          { _type: 'span', _key: 's1', text: 'Lead developer for large-scale enterprise resource planning systems at TDC Consultancy. Focused on optimizing database queries and frontend performance.' }
        ]
      }
    ],
    technologies: ['TypeScript', 'React', 'PostgreSQL', 'GraphQL']
  })

  await client.create({
    _type: 'experience',
    role: 'Full-Stack Web Development Internship',
    company: 'TDC Consultancy Pvt Ltd',
    startDate: '2023-09-01',
    endDate: '2024-03-01',
    isCurrent: false,
    description: [
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        markDefs: [],
        children: [
          { _type: 'span', _key: 's2', text: 'Developed internal tooling and automated testing suites. Streamlined CI/CD pipelines reducing deployment times by 30%.' }
        ]
      }
    ],
    technologies: ['TypeScript', 'React', 'PostgreSQL', 'GraphQL']
  })

  // Skills
  await client.create({ _type: 'skill', name: 'React / Next.js', category: 'frontend', icon: 'Code' })
  await client.create({ _type: 'skill', name: 'TypeScript', category: 'frontend', icon: 'FileCode' })
  await client.create({ _type: 'skill', name: 'Tailwind CSS', category: 'frontend', icon: 'Paintbrush' })
  await client.create({ _type: 'skill', name: 'Framer Motion', category: 'frontend', icon: 'Activity' })

  await client.create({ _type: 'skill', name: 'Node.js', category: 'backend', icon: 'Server' })
  await client.create({ _type: 'skill', name: 'GraphQL', category: 'backend', icon: 'Database' })
  await client.create({ _type: 'skill', name: 'PostgreSQL', category: 'backend', icon: 'DatabaseZap' })
  
  await client.create({ _type: 'skill', name: 'Git / GitHub', category: 'tooling', icon: 'GitBranch' })
  await client.create({ _type: 'skill', name: 'Figma', category: 'tooling', icon: 'PenTool' })
  await client.create({ _type: 'skill', name: 'VS Code', category: 'tooling', icon: 'Monitor' })
  
  await client.create({ _type: 'skill', name: 'AI Solutions', category: 'ai', icon: 'Bot' })
  await client.create({ _type: 'skill', name: 'System Architecture', category: 'ai', icon: 'Cpu' })

  // Philosophy
  await client.create({
    _type: 'philosophy',
    title: 'Performance First',
    description: 'Every millisecond counts. I optimize the critical rendering path and database queries before touching the UI, ensuring instantaneous interactions.',
    metricValue: '0ms',
    metricLabel: 'Input Latency'
  })
  await client.create({
    _type: 'philosophy',
    title: 'Aggressive Debugging',
    description: 'Integration of comprehensive observability tools. Monitoring error rates in real-time allows for proactive scaling and preemptive hot-fixes.',
    metricValue: '99%',
    metricLabel: 'Uptime Focus'
  })
  await client.create({
    _type: 'philosophy',
    title: 'Systemic Design',
    description: 'Thinking in layers. Frontend is the skin, API is the nervous system, Database is the memory.',
    metricValue: 'DRY',
    metricLabel: 'Code Standard'
  })

  console.log('Seeding complete!')
}

seed().catch(console.error)
