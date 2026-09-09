'use client'
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const steps = [
  { 
    grade: "09", 
    label: "Grade 9", 
    title: "Discover Yourself", 
    short: "Know yourself before choosing your path.", 
    desc: "Novi helps you understand your interests, strengths, personality and the areas where you naturally enjoy learning.", 
    items: ["Interest assessment", "Strength analysis", "Personality mapping", "Goal setting"], 
    icon: "✦",
    color: "from-emerald-400 to-teal-400",
    borderColor: "border-emerald-500/50",
    glowColor: "rgba(16,185,129,0.3)"
  },
  { 
    grade: "10", 
    label: "Grade 10", 
    title: "Explore Possibilities", 
    short: "Turn curiosity into possibilities.", 
    desc: "Explore careers, subjects, universities and real-world experiences based on what actually interests you.", 
    items: ["Career exploration", "Subject selection", "University discovery", "Experience matching"], 
    icon: "⌕",
    color: "from-blue-400 to-cyan-400",
    borderColor: "border-blue-500/50",
    glowColor: "rgba(59,130,246,0.3)"
  },
  { 
    grade: "11", 
    label: "Grade 11", 
    title: "Build Your Profile", 
    short: "Start turning interests into proof.", 
    desc: "Novi helps you transform your interests into projects, competitions, research, leadership and meaningful experiences.", 
    items: ["Project planning", "Competition preparation", "Research opportunities", "Leadership roles"], 
    icon: "↗",
    color: "from-purple-400 to-pink-400",
    borderColor: "border-purple-500/50",
    glowColor: "rgba(168,85,247,0.3)"
  },
  { 
    grade: "12", 
    label: "Grade 12", 
    title: "Apply With Confidence", 
    short: "Bring everything together.", 
    desc: "Build your university strategy, improve your applications and stay organized throughout the application journey.", 
    items: ["University strategy", "Application building", "Essay refinement", "Deadline tracking"], 
    icon: "◎",
    color: "from-orange-400 to-red-400",
    borderColor: "border-orange-500/50",
    glowColor: "rgba(251,146,60,0.3)"
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-16 px-6 overflow-hidden"> 
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], type: "spring", stiffness: 100, damping: 15 }}
          className="max-w-3xl mb-12" 
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.18em] mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            The 4-Year Journey
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 80, damping: 12 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="block">
              Four years.
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="block">
              One clear path.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block"
            >
              Your future.
            </motion.span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl text-foreground/50 leading-relaxed max-w-2xl"
          >
            From Grade 9 to 12, Novi guides you through every step—from discovering who you are, to applying with absolute confidence.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 lg:items-stretch">
          {steps.map((step, index) => {
            const isActive = active === index
            
            return (
              <motion.button
                key={step.grade}
                type="button"
                onClick={() => setActive(index)}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`group relative overflow-hidden text-left rounded-3xl border transition-all duration-500 
                  flex flex-col 
                  w-full lg:w-auto
                  ${isActive 
                    ? `lg:flex-[3] bg-background/90 ${step.borderColor} shadow-2xl` 
                    : `lg:flex-1 bg-background/40 border-white/10 hover:border-white/20 opacity-70 lg:opacity-100 lg:hover:opacity-100`
                  }`
                }
              >
                {isActive && (
                  <div 
                    className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: step.glowColor }}
                  />
                )}
                <div className={`flex items-center gap-4 p-5 pb-0 relative z-10`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shrink-0 transition-all duration-500 ${
                    isActive ? `bg-gradient-to-r ${step.color} text-white` : 'bg-background border border-white/10 text-emerald-400'
                  }`}>
                    {step.grade}
                  </div>
                  <div className="min-w-0">
                    <span className={`text-[10px] uppercase tracking-[0.16em] font-bold ${isActive ? 'text-foreground/50' : 'text-foreground/30'}`}>
                      {step.label}
                    </span>
                    <h3 className={`text-xl font-bold truncate ${isActive ? 'text-foreground' : 'text-foreground/80 group-hover:text-emerald-400'} transition-colors`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 relative z-10">
                  <p className={`text-sm leading-relaxed ${isActive ? 'text-foreground/70' : 'text-foreground/45'}`}>
                    {step.short}
                  </p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className={`mt-4 text-sm leading-relaxed text-foreground/60`}>
                          {step.desc}
                        </p>
                        
                        <div className="mt-5 grid grid-cols-2 gap-2">
                          {step.items.map((item, i) => (
                            <div key={i} className={`flex items-center gap-2 text-xs font-medium ${isActive ? 'text-foreground/80' : 'text-foreground/60'}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-emerald-400/40'}`} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className={`mt-5 text-xs font-semibold flex items-center gap-1 transition-all duration-300 ${isActive ? 'text-emerald-400' : 'text-foreground/30 group-hover:text-emerald-400'}`}>
                    {isActive ? (
                      <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Exploring this stage
                      </motion.span>
                    ) : ("View stage")}
                    <motion.span className={`transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`} animate={{ x: isActive ? 3 : 0 }}>→</motion.span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          className="relative mt-10 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-500 group overflow-hidden" 
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" style={{ transition: "transform 1s ease" }} />
          
          <div className="flex gap-5 items-start relative z-10">
            <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              ✦
            </motion.div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-emerald-400">Novi remembers the context.</h3>
              <p className="text-sm sm:text-base text-foreground/40 leading-relaxed">
                Your goals, interests, decisions and progress build on each other—so you don&apos;t have to start from zero every time.
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

































// 'use client'
// import { useState, useRef, useEffect } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'

// const steps = [
//   { 
//     grade: "09", 
//     label: "Grade 9", 
//     title: "Discover Yourself", 
//     short: "Know yourself before choosing your path.", 
//     color: "from-emerald-400 to-teal-400",
//     borderColor: "border-emerald-500/50",
//     glowColor: "rgba(16,185,129,0.3)"
//   },
//   { 
//     grade: "10", 
//     label: "Grade 10", 
//     title: "Explore Possibilities", 
//     short: "Turn curiosity into possibilities.", 
//     color: "from-blue-400 to-cyan-400",
//     borderColor: "border-blue-500/50",
//     glowColor: "rgba(59,130,246,0.3)"
//   },
//   { 
//     grade: "11", 
//     label: "Grade 11", 
//     title: "Build Your Profile", 
//     short: "Start turning interests into proof.", 
//     color: "from-purple-400 to-pink-400",
//     borderColor: "border-purple-500/50",
//     glowColor: "rgba(168,85,247,0.3)"
//   },
//   { 
//     grade: "12", 
//     label: "Grade 12", 
//     title: "Apply With Confidence", 
//     short: "Bring everything together.", 
//     color: "from-orange-400 to-red-400",
//     borderColor: "border-orange-500/50",
//     glowColor: "rgba(251,146,60,0.3)"
//   },
// ]

// export default function HowItWorks() {
//   const [active, setActive] = useState(0)
//   const [hasStarted, setHasStarted] = useState(false)
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])
//   const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setHasStarted(true)
//         } else {
//           setHasStarted(false)
//         }
//       },
//       { threshold: 0.2 }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section ref={sectionRef} id="how-it-works" className="relative py-16 px-6 overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
//       </div>

//       <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto relative z-10">
        
//         <motion.div 
//           initial={{ opacity: 0, y: 80, scale: 0.9 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], type: "spring", stiffness: 100, damping: 15 }}
//           className="max-w-3xl mb-12" 
//         >
//           <motion.span 
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.18em] mb-5"
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//             The 4-Year Journey
//           </motion.span>

//           <motion.h2 
//             initial={{ opacity: 0, y: 40, scale: 0.8 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 80, damping: 12 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
//           >
//             <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="block">
//               Four years.
//             </motion.span>
//             <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="block">
//               One clear path.
//             </motion.span>
//             <motion.span 
//               initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
//               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 100 }}
//               className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block"
//             >
//               Your future.
//             </motion.span>
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//             className="text-lg sm:text-xl text-foreground/50 leading-relaxed max-w-2xl"
//           >
//             From Grade 9 to 12, Novi guides you through every step—from discovering who you are, to applying with absolute confidence.
//           </motion.p>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-4 lg:items-stretch">
//           {steps.map((step, index) => {
//             const isActive = active === index
            
//             return (
//               <motion.button
//                 key={step.grade}
//                 type="button"
//                 onClick={() => setActive(index)}
//                 initial={{ opacity: 0, x: 250 }}
//                 animate={hasStarted ? { opacity: 1, x: 0 } : { opacity: 0, x: 250 }}
//                 transition={{ delay: 0.5 + (index * 0.25), duration: 0.8, type: "spring", stiffness: 70, damping: 15 }}
//                 className={`group relative overflow-hidden text-left rounded-3xl border transition-all duration-500 
//                   flex flex-col 
//                   w-full lg:w-auto
//                   ${isActive 
//                     ? `lg:flex-[1.5] bg-background/90 ${step.borderColor} shadow-2xl` 
//                     : `lg:flex-1 bg-background/40 border-white/10 hover:border-white/20 opacity-70 lg:opacity-100 lg:hover:opacity-100`
//                   }`
//                 }
//               >
//                 {isActive && (
//                   <div 
//                     className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
//                     style={{ backgroundColor: step.glowColor }}
//                   />
//                 )}
//                 <div className={`flex items-center gap-4 p-5 pb-0 relative z-10`}>
//                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shrink-0 transition-all duration-500 ${
//                     isActive ? `bg-gradient-to-r ${step.color} text-white` : 'bg-background border border-white/10 text-emerald-400'
//                   }`}>
//                     {step.grade}
//                   </div>
//                   <div className="min-w-0">
//                     <span className={`text-[10px] uppercase tracking-[0.16em] font-bold ${isActive ? 'text-foreground/50' : 'text-foreground/30'}`}>
//                       {step.label}
//                     </span>
//                     <h3 className={`text-xl font-bold truncate ${isActive ? 'text-foreground' : 'text-foreground/80 group-hover:text-emerald-400'} transition-colors`}>
//                       {step.title}
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="p-5 relative z-10">
//                   <p className={`text-sm leading-relaxed ${isActive ? 'text-foreground/70' : 'text-foreground/45'}`}>
//                     {step.short}
//                   </p>
//                   <div className={`mt-5 text-xs font-semibold flex items-center gap-1 transition-all duration-300 ${isActive ? 'text-emerald-400' : 'text-foreground/30 group-hover:text-emerald-400'}`}>
//                     {isActive ? (
//                       <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                         Exploring this stage
//                       </motion.span>
//                     ) : ("View stage")}
//                     <motion.span className={`transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`} animate={{ x: isActive ? 3 : 0 }}>→</motion.span>
//                   </div>
//                 </div>
//               </motion.button>
//             )
//           })}
//         </div>
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
//           className="relative mt-10 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-500 group overflow-hidden" 
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" style={{ transition: "transform 1s ease" }} />
          
//           <div className="flex gap-5 items-start relative z-10">
//             <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
//               ✦
//             </motion.div>
//             <div>
//               <h3 className="font-bold text-lg mb-1 text-emerald-400">Novi remembers the context.</h3>
//               <p className="text-sm sm:text-base text-foreground/40 leading-relaxed">
//                 Your goals, interests, decisions and progress build on each other—so you don't have to start from zero every time.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//       </motion.div>
//     </section>
//   )
// }