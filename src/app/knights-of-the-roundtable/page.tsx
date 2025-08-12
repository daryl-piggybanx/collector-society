"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import Header from "~/components/header"

export default function KnightsOfTheRoundtablePage() {
  return (
    <div className="min-h-screen cursor-auto relative flex flex-col items-center justify-center overflow-hidden font-serif mx-auto">
        <Header />
        <h1 className="text-4xl font-bold">Knights of the Roundtable</h1>
    </div>
  )
} 