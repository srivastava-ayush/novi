'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1]
export const EASE_OUT = [0.0, 0, 0.2, 1]
export const EASE_IN = [0.4, 0, 1, 1]

export function Spotlight({ 
  children, 
  className = '', 
  color = 'primary' 
}: { 
  children: React.ReactNode
  className?: string
  color?: 'primary' | 'accent' | 'warm'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const colors = {
    primary: 'rgba(168,85,247,0.1)',
    accent: 'rgba(59,130,246,0.1)',
    warm: 'rgba(251,146,60,0.1)',
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${colors[color]}, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {children}
    </div>
  )
}

export function useCountUp(targetValue: number, duration = 2000) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const startValue = 0

    const updateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * targetValue))

      if (progress < 1) {
        requestAnimationFrame(updateValue)
      }
    }

    requestAnimationFrame(updateValue)
  }, [isInView, targetValue, duration])

  return { ref, value }
}

export function Magnetic({ 
  children, 
  strength = 20, 
  className = '' 
}: { 
  children: React.ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x / strength}px, ${y / strength}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      {children}
    </div>
  )
}