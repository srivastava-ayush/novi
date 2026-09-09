'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import BackgroundParticles from "@/components/3d/BackgroundParticles"
import { Magnetic } from "@/components/ui/Magnetic"


export default function Hero() {
  const [showChat, setShowChat] = useState(false)
  const [showTyping, setShowTyping] = useState(true)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 })
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 })
  
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10])
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10])
  
  useEffect(() => {
    const chatTimer = setTimeout(() => setShowChat(true), 1200)
    const typingTimer = setTimeout(() => setShowTyping(false), 2400)
    return () => {
      clearTimeout(chatTimer)
      clearTimeout(typingTimer)
    }
  }, [])
  
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      onMouseMove={(e) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        mouseX.set((clientX / innerWidth) * 2 - 1)
        mouseY.set((clientY / innerHeight) * 2 - 1)
      }}
    >
      <BackgroundParticles />
      
      {/* <div className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" /> */}
      

      <div className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 pt-20 lg:pt-28 pb-12 lg:pb-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start"
            >
              <div className="border-none outline-none inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-800 bg-green-900/20 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                <span className="text-xs font-semibold text-green-100 tracking-wide uppercase">
                  AI-Powered Mentorship
                </span>
              </div>
            </motion.div>
          
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block"
                >
                  Your AI mentor.
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block"
                >
                  Your journey.
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  className="block gradient-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
                >
                  Your future.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-foreground/60 max-w-xl leading-relaxed"
            >
              Novi is the AI-powered Operating System for Student Success
              that guides you from Grade 9 to your dream university—and
              beyond.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <Magnetic strength={12}>
                <Link href="#how-it-works" className="btn-primary group relative overflow-hidden w-full sm:w-auto justify-center">
                  <span className="relative z-10 flex items-center gap-2">
                    Meet Novi
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Magnetic>
              
              <Magnetic strength={16}>
                <Link href="#for-students" className="btn-secondary group w-full sm:w-auto justify-center">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <span>I&apos;m Parent</span>
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-[350px] sm:max-w-[480px] lg:max-w-[620px] mx-auto">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[70%] h-[70%] rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-3xl"
                />
              </div>
              <div className="absolute inset-[10%] rounded-full border border-purple-500/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-[20%] rounded-full border border-blue-500/20 animate-[spin_24s_linear_infinite_reverse]" />
              
              <motion.div
                style={{ 
                  rotateX: rotateX as MotionValue<number>,
                  rotateY: rotateY as MotionValue<number>,
                }}
                className="w-full h-full transition-transform duration-200"
              >
                <div className="animate-float w-full h-full relative">
                  
                  <motion.div 
                    animate={{ x: ['-150%', '150%'], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                    className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                  />
                  
                  <Image
                    src="/3dboy.png"
                    alt="Novi — AI Mentor"
                    width={600}
                    height={600}
                    priority
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
              {showChat && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -top-5 right-0 sm:-top-10 sm:right-0 z-40 hidden md:block max-w-[280px]"
                >
                  <div className="glass-card rounded-2xl p-4 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="flex items-start gap-3">
                      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg">
                        <span className="text-white text-lg">👋</span>
                        <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white dark:border-[#1a1a3e] animate-pulse" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-sm text-foreground">Hi! I&apos;m Novi</p>
                          <span className="text-[10px] text-green-500 font-medium">Online</span>
                        </div>
                        {showTyping ? (
                          <div className="flex items-center gap-1 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce" />
                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:150ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:300ms]" />
                          </div>
                        ) : (
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            I&apos;m here to help you discover your best future.
                          </p>
                        )}
                      </div>
                    </div>
                    {!showTyping && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        <button className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/20 hover:bg-purple-500/30 transition-all">
                          Explore careers
                        </button>
                        <button className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-blue-500/20 text-blue-300 border border-blue-500/20 hover:bg-blue-500/30 transition-all">
                          Find strengths
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[5%] -right-2 sm:right-0 z-30"
              >
                <div className="glass-card rounded-xl px-3 py-2 backdrop-blur-xl border border-white/10 shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-foreground">AI Active</span>
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 pointer-events-none">
                {[
                  { x: '10%', y: '20%', d: 2 }, 
                  { x: '85%', y: '15%', d: 3 }, 
                  { x: '15%', y: '70%', d: 4 },
                  { x: '90%', y: '60%', d: 2 }, 
                  { x: '50%', y: '10%', d: 3 }
                ].map((particle, i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
                    className="absolute w-1 h-1 rounded-full bg-purple-400"
                    style={{ left: particle.x, top: particle.y, animationDuration: `${particle.d}s` }}
                  />
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative w-full bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-purple-500/10 border-y border-purple-500/20 py-2 sm:py-3.5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        <div className="marquee relative z-10">
          <div className="marquee-track items-center">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center shrink-0">
                <span className="text-sm font-semibold text-purple-400 pr-4">✨ Personalized AI Mentor</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 animate-pulse shrink-0" />
                <span className="text-sm font-semibold text-blue-400 px-4">🚀 4-Year Journey</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 animate-pulse shrink-0" style={{ animationDelay: "0.3s" }} />
                <span className="text-sm font-semibold text-pink-400 px-4">🎯 Career + University Guidance</span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400/60 animate-pulse shrink-0" style={{ animationDelay: "0.6s" }} />
                <span className="text-sm font-semibold text-indigo-400 px-4">💡 Built around you</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60 animate-pulse shrink-0 mr-4" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}