'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { useEffect, useState } from 'react'

export function Studio() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <NextStudio config={config} />
}
