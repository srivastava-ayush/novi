'use client'

import { useState, useEffect } from 'react'

export default function LandingCurtain() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className="landing-curtain fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-black to-blue-900 flex items-center justify-center" aria-hidden="true">
      <div className="landing-curtain-logo flex flex-col items-center gap-4 animate-pulse">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 animate-bounce-in">
          <span className="text-white font-bold text-2xl" style={{ fontFamily: "var(--font-display)" }}>N</span>
        </div>
        <span className="text-white/80 text-sm font-medium tracking-widest uppercase animate-pulse">Novi</span>
      </div>
    </div>
  )
}