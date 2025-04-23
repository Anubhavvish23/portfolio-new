"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SkillsShowcase() {
  const [activeSkill, setActiveSkill] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)


  const skills = [
    { id: "01", title: "FULL STACK", subtitle: "DEVELOPER", prefix: "I'M A" },
    { id: "02", title: "APP", subtitle: "DEVELOPER", prefix: "I'M AN" },
    { id: "03", title: "AI AND ML", subtitle: "DEVELOPER", prefix: "I'M AN" },
    { id: "04", title: "EMBEDDED", subtitle: "SYSTEMS", prefix: "I WORK WITH" },
    { id: "05", title: "DRONE", subtitle: "TECH", prefix: "I WORK WITH" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [skills.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", handleMouseMove)
    }



    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center py-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(rgba(0, 20, 0, 0.9), rgba(0, 20, 0, 0.8)), url('/grayscale-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Mouse Follow Effect */}
      <motion.div
        className="pointer-events-none fixed w-36 h-36 rounded-full bg-transparent border-2 border-[#00FF00]/30 z-50"
        animate={{
          x: mousePosition.x - 72,
          y: mousePosition.y - 72,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.1,
        }}
      />

      <motion.div
        className="pointer-events-none fixed w-6 h-6 rounded-full bg-[#00FF00]/80 blur-sm z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 5,
          stiffness: 250,
          mass: 0.05,
        }}
      />

      {/* Grid Background */}
      <GridBackground />

      {/* Animated Particles */}
      <AnimatedParticles />

      {/* Header Text */}
      <div className="w-full max-w-4xl mx-auto mb-16 px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-2"
          animate={{
            textShadow: ["0 0 10px rgba(0,255,0,0.3)", "0 0 20px rgba(0,255,0,0.6)", "0 0 10px rgba(0,255,0,0.3)"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
         Explore 
        </motion.h1>
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-[#00FF00] mb-2"
          animate={{
            textShadow: ["0 0 10px rgba(0,255,0,0.3)", "0 0 20px rgba(0,255,0,0.6)", "0 0 10px rgba(0,255,0,0.3)"],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          My Skills !
        </motion.h1>
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white"
          animate={{
            textShadow: ["0 0 10px rgba(0,255,0,0.3)", "0 0 20px rgba(0,255,0,0.6)", "0 0 10px rgba(0,255,0,0.3)"],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
       
        </motion.h1>
      </div>

      {/* Skills Tiles */}
      <div className="w-full max-w-4xl mx-auto relative">
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(0,255,0,0.2) 0%, rgba(0,0,0,0) 70%)",
              "radial-gradient(circle, rgba(0,255,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              "radial-gradient(circle, rgba(0,255,0,0.2) 0%, rgba(0,0,0,0) 70%)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {activeSkill === 0 && <FullStackTile skill={skills[0]} />}
            {activeSkill === 1 && <AppDeveloperTile skill={skills[1]} />}
            {activeSkill === 2 && <AiMlTile skill={skills[2]} />}
            {activeSkill === 3 && <EmbeddedSystemsTile skill={skills[3]} />}
            {activeSkill === 4 && <DroneTechTile skill={skills[4]} />}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2" role="navigation" aria-label="Skill navigation">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSkill(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                activeSkill === index ? "bg-[#00FF00] scale-125" : "bg-gray-600"
              }`}
              aria-label={`View skill ${index + 1}`}
            >
              {activeSkill === index && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-transparent border border-[#00FF00]"
                  animate={{ scale: [1, 2.5], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Explore Projects Button */}
      <motion.div
        className="mt-16 flex gap-4"
        whileHover={{ scale: 1.05 }}
      >
        <motion.a
          href="#projects"
          className="bg-[#00FF00] text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 relative overflow-hidden"
          whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 0, 0.8)" }}
        >
          <motion.span
            className="absolute inset-0 bg-[#00FF00]/20"
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <span className="relative z-10">✨ Explore Projects</span>
        </motion.a>

        <motion.a
          href="https://github.com/Anubhavvish23"
          className="bg-transparent border border-[#00FF00] text-[#00FF00] font-bold py-3 px-6 rounded-full flex items-center gap-2"
          whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 0, 0.4)" }}
        >
          <span>View on GitHub</span>
        </motion.a>
      </motion.div>

      {/* Circular Text Animation */}
      <div className="absolute top-20 left-20 w-32 h-32 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text>
            <textPath href="#circlePath" className="text-[#00FF00] text-xs">
              
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}

// GridBackground Component
function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    const drawGrid = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "#004400"
      ctx.lineWidth = 0.5

      const gridSize = 50

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

// AnimatedParticles Component
function AnimatedParticles() {
  return (
    <div className="fixed inset-0 -z-5">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#00FF00]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2 + Math.random() * 0.3,
            scale: 0.5 + Math.random() * 1.5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  )
}

// SkillTile Component
function SkillTile({ skill, children }: { skill: any; children: React.ReactNode }) {
  return (
    <div className="relative w-full p-6">
      <motion.div
        className="bg-black/40 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden border border-[#003300]"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 0, 0.3)" }}
      >
        {/* Glowing Border */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-[#00FF00]/30"
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            boxShadow: ["0 0 10px rgba(0, 255, 0, 0.2) inset", "0 0 20px rgba(0, 255, 0, 0.4) inset", "0 0 10px rgba(0, 255, 0, 0.2) inset"]
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
          {/* Left Side - Title */}
          <div className="flex flex-col justify-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              WHAT SKILLS
            </motion.h2>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              CAN I OFFER?
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-[#00FF00] mt-4"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {/* Right Side - Skill Info and Animation */}
          <div className="flex flex-col">
            {/* Skill Title */}
            <div className="mb-auto">
              <motion.p
                className="text-xl text-white"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {skill.prefix}
              </motion.p>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-[#00FF00]"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {skill.title}
              </motion.h3>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-[#00FF00] mb-6"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {skill.subtitle}
              </motion.h3>
            </div>

            {/* Animation Area */}
            <div className="flex-1 flex items-center justify-center">{children}</div>

            {/* Number */}
            <motion.div
              className="text-6xl md:text-8xl font-bold text-[#00FF00]/20 mt-auto self-end mix-blend-screen"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              {skill.id}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// FullStackTile Component
function FullStackTile({ skill }: { skill: any }) {
  return (
    <SkillTile skill={skill}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Backend Server */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <div className="w-20 h-28 bg-[#111] rounded-md border border-[#00FF00] flex flex-col gap-2 p-2">
            <motion.div
              className="h-2 bg-[#00FF00] rounded"
              animate={{ width: ["60%", "40%", "60%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="h-2 bg-[#00FF00] rounded"
              animate={{ width: ["40%", "55%", "40%"] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="h-2 bg-[#00FF00] rounded"
              animate={{ width: ["50%", "35%", "50%"] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>

        {/* Data Packets */}
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <motion.div
            className="w-5 h-2.5 bg-[#00FF00] rounded"
            animate={{
              x: [0, 100, 0],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="w-4 h-2.5 bg-[#00FF00] rounded"
            animate={{
              x: [0, 100, 0],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          />
          <motion.div
            className="w-4.5 h-2.5 bg-[#00FF00] rounded"
            animate={{
              x: [100, 0, 100],
              opacity: [0.7, 0.4, 0.7],
            }}
            transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          />
        </div>

        {/* Frontend Browser */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <div className="w-28 h-32 bg-[#111] rounded-md border border-[#00FF00] overflow-hidden">
            <div className="h-6 bg-[#222] border-b border-[#00FF00] flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00]" />
            </div>
            <div className="p-2 flex flex-col gap-2">
              <motion.div
                className="h-2.5 bg-[#00FF00] rounded"
                animate={{ width: ["80%", "60%", "80%"] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="h-2.5 bg-[#00FF00] rounded"
                animate={{ width: ["40%", "70%", "40%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="h-2.5 bg-[#00FF00] rounded"
                animate={{ width: ["60%", "50%", "60%"] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SkillTile>
  )
}

// AppDeveloperTile Component
function AppDeveloperTile({ skill }: { skill: any }) {
  return (
    <SkillTile skill={skill}>
      <motion.div
        className="relative w-32 h-56 bg-[#111] rounded-2xl border-2 border-[#00FF00] overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        {/* Phone Screen */}
        <div className="w-28 h-44 bg-black m-2 rounded-lg relative">
          {/* App Icons */}
          <div className="absolute top-5 left-0 right-0 flex justify-around">
            <motion.div
              className="w-5 h-5 bg-[#00FF00] rounded"
              animate={{
                opacity: [0.9, 0.5, 0.9],
                y: [0, 2, 0],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-5 h-5 bg-[#00FF00] rounded"
              animate={{
                opacity: [0.7, 0.3, 0.7],
                y: [0, 1, 0],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
            <motion.div
              className="w-5 h-5 bg-[#00FF00] rounded"
              animate={{
                opacity: [0.8, 0.4, 0.8],
                y: [0, 1.5, 0],
              }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
            />
          </div>

          {/* Content Areas */}
          <div className="absolute top-16 left-0 right-0 px-3 flex flex-col gap-3">
            <motion.div
              className="h-2.5 bg-[#00FF00] rounded"
              animate={{
                width: ["80%", "70%", "80%"],
                opacity: [0.9, 0.7, 0.9],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="h-3 bg-[#00FF00] rounded"
              animate={{
                width: ["80%", "60%", "80%"],
                opacity: [0.7, 0.5, 0.7],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
            />
            <motion.div
              className="h-3 bg-[#00FF00] rounded"
              animate={{
                width: ["60%", "75%", "60%"],
                opacity: [0.8, 0.6, 0.8],
              }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
            <motion.div
              className="h-3 bg-[#00FF00] rounded"
              animate={{
                width: ["70%", "55%", "70%"],
                opacity: [0.9, 0.7, 0.9],
              }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 0.7 }}
            />
          </div>

          {/* Nav Bar */}
          <div className="absolute bottom-5 left-0 right-0 px-3 flex justify-between">
            <motion.div
              className="w-6 h-2.5 bg-[#00FF00] rounded-full"
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-6 h-2.5 bg-[#00FF00] rounded-full"
              animate={{ x: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-6 h-2.5 bg-[#00FF00] rounded-full"
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>

        {/* Home Button */}
        <motion.div
          className="w-5 h-5 rounded-full border border-[#00FF00] mx-auto mt-1"
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>
    </SkillTile>
  )
}

// AiMlTile Component
function AiMlTile({ skill }: { skill: any }) {
  return (
    <SkillTile skill={skill}>
      <motion.div
        className="relative w-full h-48"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        {/* Neural Network */}
        <div className="relative w-full h-full">
          {/* Input Layer */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-around">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`input-${i}`}
                className="w-6 h-6 rounded-full bg-[#111] border-2 border-[#00FF00] flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 0.4, 0.8],
                  boxShadow: ["0 0 0 rgba(0, 255, 0, 0)", "0 0 10px rgba(0, 255, 0, 0.5)", "0 0 0 rgba(0, 255, 0, 0)"],
                }}
                transition={{ duration: 2 + i * 0.2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              />
            ))}
          </div>

          {/* Hidden Layer */}
          <div className="absolute left-1/2 top-0 bottom-0 flex flex-col justify-around">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`hidden-${i}`}
                className="w-6 h-6 rounded-full bg-[#111] border-2 border-[#00FF00] flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 0.4, 0.8],
                  boxShadow: ["0 0 0 rgba(0, 255, 0, 0)", "0 0 10px rgba(0, 255, 0, 0.5)", "0 0 0 rgba(0, 255, 0, 0)"],
                }}
                transition={{ duration: 2 + i * 0.2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              />
            ))}
          </div>

          {/* Output Layer */}
          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around">
            {[0, 1].map((i) => (
              <motion.div
                key={`output-${i}`}
                className="w-6 h-6 rounded-full bg-[#111] border-2 border-[#00FF00] flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 0.4, 0.8],
                  boxShadow: ["0 0 0 rgba(0, 255, 0, 0)", "0 0 10px rgba(0, 255, 0, 0.5)", "0 0 0 rgba(0, 255, 0, 0)"],
                }}
                transition={{ duration: 2 + i * 0.2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </SkillTile>
  )
}

// EmbeddedSystemsTile Component
function EmbeddedSystemsTile({ skill }: { skill: any }) {
  return (
    <SkillTile skill={skill}>
      <motion.div
        className="relative w-full max-w-xs h-48"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        {/* Microcontroller */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-12 bg-[#111] rounded-md border border-[#00FF00]"
          animate={{
            y: [0, -5, 0, 5, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          {/* Pins */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#111] rounded-full border border-[#00FF00]" />
        </motion.div>

        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
          {[1, 2, 3].map((i) => (
            <motion.line
              key={i}
              x1="10%"
              y1={`${i * 20}%`}
              x2="90%"
              y2={`${i * 20}%`}
              stroke="#00FF00"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.7, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          ))}
        </svg>
      </motion.div>
    </SkillTile>
  )
}

// DroneTechTile Component
function DroneTechTile({ skill }: { skill: any }) {
  return (
    <SkillTile skill={skill}>
      <motion.div
        className="relative w-full max-w-xs h-48"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        {/* Drone Body */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-[#111] rounded-md border border-[#00FF00]"
          animate={{
            y: [0, -5, 0, 5, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          {/* Drone Camera */}
          <motion.div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#111] rounded-full border border-[#00FF00]"
            animate={{
              boxShadow: ["0 0 0 rgba(0, 255, 0, 0)", "0 0 10px rgba(0, 255, 0, 0.5)", "0 0 0 rgba(0, 255, 0, 0)"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#00FF00] rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>

        {/* Drone Arms and Propellers */}
        {[
          { x: -40, y: -40 },
          { x: 40, y: -40 },
          { x: -40, y: 40 },
          { x: 40, y: 40 },
        ].map((pos, i) => (
          <React.Fragment key={i}>
            {/* Arm */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-16 h-1 bg-[#111] border border-[#00FF00]"
              style={{
                transformOrigin: "center",
                transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateX(${Math.abs(pos.x)}px)`,
              }}
              animate={{
                y: [0, pos.y < 0 ? -2 : 2, 0, pos.y < 0 ? 2 : -2, 0],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            {/* Propeller */}
            <motion.div
              className="absolute w-8 h-8"
              style={{
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transformOrigin: "center",
              }}
              animate={{
                y: [0, pos.y < 0 ? -5 : 5, 0, pos.y < 0 ? 5 : -5, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                rotate: { duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#00FF00] -translate-y-1/2" />
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#00FF00] -translate-x-1/2" />
              <motion.div
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#111] border border-[#00FF00] -translate-x-1/2 -translate-y-1/2"
                animate={{
                  boxShadow: ["0 0 0 rgba(0, 255, 0, 0)", "0 0 5px rgba(0, 255, 0, 0.5)", "0 0 0 rgba(0, 255, 0, 0)"],
                }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </React.Fragment>
        ))}

        {/* Radar Waves */}
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
          {[1, 2, 3].map((i) => (
            <motion.circle
              key={i}
              cx="50%"
              cy="50%"
              r={10 * i}
              fill="none"
              stroke="#00FF00"
              strokeWidth="1"
              initial={{ r: 0, opacity: 1 }}
              animate={{ r: [0, 60], opacity: [1, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.8,
                ease: "linear",
              }}
            />
          ))}
        </svg>

        {/* Flight Path */}
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
          <motion.path
            d="M 10 90 Q 50 10 90 90"
            fill="none"
            stroke="#00FF00"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.7, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </svg>
      </motion.div>
    </SkillTile>
  )
}
