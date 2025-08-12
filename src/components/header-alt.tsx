"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

const navItems = [
  { name: "Start Here", image: "/assets/landing_hover_black-white_1.jpg", link: "/ethos" },
  { name: "Collector Applications", image: "/assets/landing_hover_black-white_2.jpg", link: "https://www.collectorsonly.com" },
  { name: "Drop Site", image: "/assets/landing_hover_black-white_3.jpg", link: "https://piggybanxinc.com" },
  { name: "PiggyVerse", image: "/assets/landing_hover_black-white_1.jpg", link: "https://intothepiggyverse.com" },
  { name: "The Knights", image: "/assets/landing_hover_black-white_2.jpg", link: "/knights-of-the-roundtable" },
]

export default function HeaderAlt() {

  const togglePages = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      {/* Header Logo */}
      <header className="fixed top-2 right-10 p-8 z-50">
        <button onClick={togglePages} className="pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity duration-300">
          <Menu className="w-8 h-8" />
        </button>
      </header>
    </>
  )
}