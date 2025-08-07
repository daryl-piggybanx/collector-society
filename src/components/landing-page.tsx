"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const navItems = [
  { name: "Drop Site", image: "/assets/landing_hover_black-white_1.jpg", link: "#" },
  { name: "Collector Applications", image: "/assets/landing_hover_black-white_2.jpg", link: "#" },
  { name: "Club House", image: "/assets/landing_hover_black-white_3.jpg", link: "#" },
  { name: "What is PiggyBanx", image: "/assets/landing_hover_black-white_4.jpg", link: "#" },
  { name: "How to Collect", image: "/assets/landing_hover_black-white_1.jpg", link: "#" },
  { name: "What are the Knights", image: "/assets/landing_hover_black-white_2.jpg", link: "#" },
  { name: "General Guidelines", image: "/assets/landing_hover_black-white_3.jpg", link: "#" },
]

export default function LandingPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen cursor-auto relative flex flex-col items-center justify-center overflow-hidden font-serif">
    {navItems.map((item, index) => (
      <motion.div
        key={`image-${index}`}
        className="fixed z-0 pointer-events-none"
        style={{
          left: mousePosition.x - (index % 2 === 0 ? 350 :  -150), // Alternate left/right positioning
          top: mousePosition.y - 150,
          rotate: hoveredIndex === index ? (index % 2 === 0 ? 5 : 355) : 0, // Alternate rotation: even=5°, odd=355°
        }}
        animate={{
          opacity: hoveredIndex === index ? 1 : 0,
          scale: hoveredIndex === index ? 1 : 0.8,
          
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Image
          src={item.image || "/placeholder.svg"}
          alt={`${item.name} background`}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </motion.div>
    ))}

    <header className="absolute top-0 left-0 p-8">
      <Link href="/">
        <Image
          src="/assets/logo-white.png"
          alt="Logo"
          width={32}
          height={32}
          className="pointer-events-auto"
        />
      </Link>
    </header>

    <main className="z-10">
      <nav>
        <ul className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <li
              key={`nav-${index}`}
              className="text-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={item.link}
                className="relative z-10 block sm:text-7xl text-4xl font-light leading-tight text-white/70 transition-all duration-300 hover:text-white/90 uppercase"
                style={{
                  mixBlendMode: "difference",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>

    <footer className="absolute bottom-0 left-0 p-8 text-sm text-white/50">
      <p>PIGGYBANK ©2025</p>
    </footer>
  </div>
  )
}