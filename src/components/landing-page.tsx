"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

import bgVideo from "~/assets/webBG.mp4"
import landingbg from "~/assets/landingBG2.png"

const navItems = [
  { name: "Start Here", image: "/assets/landing_hover_black-white_1.jpg", link: "/ethos" },
  { name: "Collector Applications", image: "/assets/landing_hover_black-white_2.jpg", link: "https://www.collectorsonly.com" },
  { name: "Drop Site", image: "/assets/landing_hover_black-white_3.jpg", link: "https://piggybanxinc.com" },
  { name: "PiggyVerse", image: "/assets/landing_hover_black-white_1.jpg", link: "https://intothepiggyverse.com" },
  { name: "The Knights", image: "/assets/landing_hover_black-white_2.jpg", link: "/knights-of-the-roundtable" },
]

export default function LandingPage() {
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)
    const [videoError, setVideoError] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)


  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     setMousePosition({ x: event.clientX, y: event.clientY })
  //   }

  //   window.addEventListener("mousemove", handleMouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove)
  //   }
  // }, [])

  useEffect(() => {
    // Fallback timeout to show content even if video events don't fire
    const fallbackTimer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 3000) // 3 second fallback

    // Check if video is already loaded (e.g., from cache)
    const checkVideoReady = () => {
      const video = videoRef.current
      if (video && video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
        setIsVideoLoaded(true)
        clearTimeout(fallbackTimer)
      }
    }

    // Check immediately
    checkVideoReady()

    // Also check periodically for the first few seconds
    const intervalTimer = setInterval(checkVideoReady, 100)
    setTimeout(() => clearInterval(intervalTimer), 2000)

    return () => {
      clearTimeout(fallbackTimer)
      clearInterval(intervalTimer)
    }
  }, [])

  const handleVideoReady = () => {
    setIsVideoLoaded(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setIsVideoLoaded(true) // Still show the content with fallback image
  }

  return (
    <div className="min-h-screen cursor-auto relative flex flex-col items-start justify-end overflow-hidden font-serif mx-auto pb-20 pl-20">
      {/* Background Video or Image, change to !videoError when video is chosen */}
      {videoError ? ( 
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onCanPlayThrough={handleVideoReady}
          onPlaying={handleVideoReady}
          onError={handleVideoError}
        >
          <source src={bgVideo as string} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={landingbg}
          alt="Landing Background"
          fill
          className="object-cover"
          priority
        />
      )}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

    {/* Hover Images */}
    {/* {navItems.map((item, index) => (
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
    ))} */}


    <main className="relative z-10">
      <nav>
        <ul className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <li
              key={`nav-${index}`}
              className="text-center"
              // onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={item.link}
                className="text-left relative z-10 block sm:text-4xl lg:text-7xl text-4xl font-light leading-tight text-white/70 transition-all duration-300 hover:text-white/90 uppercase"
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

    {/* Loading indicator while video loads */}
    {/* {!isVideoLoaded && (
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        <p className="mt-4 font-serif text-sm uppercase tracking-wider text-white/70">Loading...</p>
      </div>
    )} */}

  </div>
  )
}