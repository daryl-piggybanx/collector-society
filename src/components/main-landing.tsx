"use client"

import { useState } from "react"

import { AnimatePresence } from "framer-motion"
import IntroPage from "~/components/intro-page"
import LandingPage from "~/components/landing-page"
import ThreeCanvasWrapper from "~/components/three-canvas-wrapper"
import { Menu, SquareX } from "lucide-react"
import HeaderAlt from "./header-alt"

export default function MainLanding() {
  const [showIntro, setShowIntro] = useState(true)

  const handleEnter = () => {
    setShowIntro(false)
  }

  const toggleView = () => {
    setShowIntro(!showIntro)
  }
 

  return (
    <div className="bg-[#111111] text-white">
      <header className="fixed top-2 right-10 p-8 z-[100]">
        <button onClick={toggleView} className="pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity duration-300">
        {showIntro ? (<Menu className="w-8 h-8" />) : (<SquareX className="w-8 h-8" />)}
        </button>
      </header>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroPage key="intro" onEnter={handleEnter} />
        ) : (
          <LandingPage key="landing" />
          // <ThreeCanvasWrapper key="three-scene" />
        )}
      </AnimatePresence>
    </div>
  )
}
