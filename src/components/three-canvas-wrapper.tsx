'use client'

import { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the actual Three.js scene with no SSR
const SculptureScene = dynamic(() => import('./sculpture-scene'), {
  ssr: false,
  loading: () => (
    <div className="w-screen h-screen flex items-center justify-center bg-neutral-900 text-white">
      Loading 3D scene...
    </div>
  )
})

export default function ThreeCanvasWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-neutral-900 text-white">
        Initializing...
      </div>
    )
  }

  return (
    <Suspense fallback={
      <div className="w-screen h-screen flex items-center justify-center bg-neutral-900 text-white">
        Loading 3D scene...
      </div>
    }>
      <SculptureScene />
    </Suspense>
  )
} 