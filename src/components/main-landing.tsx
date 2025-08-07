"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence } from "framer-motion"
import IntroPage from "~/components/intro-page"
import LandingPage from "~/components/landing-page"
import ThreeCanvasWrapper from "~/components/three-canvas-wrapper"

export default function MainLanding() {
  const [showIntro, setShowIntro] = useState(true)

  const handleEnter = () => {
    setShowIntro(false)
  }
 

  return (
    <div className="bg-[#111111] text-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroPage key="intro" onEnter={handleEnter} />
        ) : (
          // <LandingPage key="landing" />
          <ThreeCanvasWrapper key="three-scene" />
        )}
      </AnimatePresence>
    </div>
  )
}
