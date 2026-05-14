'use client'

import { NextStudio } from 'next-sanity/studio'
import { useSyncExternalStore } from 'react'
import config from '../../../sanity.config'

export function Studio() {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  if (!isMounted) return null

  return <NextStudio config={config} />
}
