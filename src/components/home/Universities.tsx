// 'use client'

// import { useRef, useState, useEffect } from 'react'
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// const universities = [
//   { name: "Stanford", color: "from-red-500 to-red-600", emoji: "🌲" },
//   { name: "MIT", color: "from-red-600 to-red-700", emoji: "⚡" },
//   { name: "Harvard", color: "from-rose-800 to-rose-900", emoji: "📚" },
//   { name: "Oxford", color: "from-blue-700 to-blue-800", emoji: "🎓" },
//   { name: "Cambridge", color: "from-blue-600 to-blue-700", emoji: "🏛️" },
//   { name: "NUS", color: "from-orange-500 to-orange-600", emoji: "🌏" },
//   { name: "ETH Zurich", color: "from-cyan-600 to-cyan-700", emoji: "🔬" },
//   { name: "Imperial", color: "from-blue-500 to-blue-600", emoji: "🧪" },
// ]

// export default function Universities() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   })
  
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])
//   const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

//   const [currentIndex, setCurrentIndex] = useState(0)
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % universities.length)
//     }, 3500)
//     return () => clearInterval(interval)
//   }, [])

//   const getVisibleUniversities = () => {
//     const items = []
//     for (let i = -1; i <= 1; i++) {
//       const index = (currentIndex + i + universities.length) % universities.length
//       items.push({ ...universities[index], index, isCenter: i === 0 })
//     }
//     return items
//   }

//   const visibleUniversities = getVisibleUniversities()

//   return (
//     <section 
//       ref={sectionRef} 
//       id="universities" 
//       className="relative min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-b from-background via-surface to-background"
//     >
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
//       </div>

//       <motion.div 
//         style={{ opacity, scale }}
//         className="max-w-7xl mx-auto relative z-10"
//       >
//         <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ 
//               duration: 0.8, 
//               type: "spring",
//               stiffness: 100,
//               damping: 15
//             }}
//             className="relative"
//           >
//             <motion.span 
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
//             >
//               <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//               Discover Your Future
//             </motion.span>

//             <motion.h2 
//               className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
//             >
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="block text-foreground/80"
//               >
//                 Don't just find
//               </motion.span>
//               <motion.span
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="block text-foreground/80"
//               >
//                 a university.
//               </motion.span>
//               <motion.span 
//                 initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
//                 whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ 
//                   delay: 0.6, 
//                   duration: 0.7, 
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block"
//               >
//                 Find your university.
//               </motion.span>
//             </motion.h2>

//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.8, duration: 0.6 }}
//               className="text-lg sm:text-xl text-foreground/50 leading-relaxed max-w-lg"
//             >
//               Explore universities, courses and countries based on what matters to you.
//             </motion.p>

//             <motion.div 
//               initial={{ width: 0 }}
//               whileInView={{ width: '80px' }}
//               viewport={{ once: true }}
//               transition={{ delay: 1, duration: 0.8 }}
//               className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-8"
//             />

//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 1.2, duration: 0.5 }}
//               className="flex items-center gap-4 mt-8"
//             >
//               <div className="flex items-center gap-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <span className="text-sm text-foreground/60">Trusted by 10,000+ students</span>
//             </motion.div>
//           </motion.div>
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ 
//               duration: 0.8, 
//               type: "spring",
//               stiffness: 100,
//               damping: 15,
//               delay: 0.2
//             }}
//             className="relative h-[500px] flex items-center justify-center"
//           >
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-[400px] h-[400px] rounded-full border border-emerald-500/10 animate-spin-slow" />
//               <div className="absolute w-[350px] h-[350px] rounded-full border border-cyan-500/10 animate-spin-slower" />
//               <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/10 animate-spin-slowest" />
//             </div>

//             <div className="relative w-full max-w-md h-[400px] perspective-1000">
//               <AnimatePresence mode="popLayout">
//                 {universities.map((uni, idx) => {
//                   const offset = (idx - currentIndex + universities.length) % universities.length;
//                   const position = offset === 0 ? 0 : (offset === 1 ? 1 : (offset === universities.length - 1 ? -1 : (offset > universities.length / 2 ? -1 : 1)));
                  
//                   const isActive = position === 0;
//                   const translateX = position * 120;
//                   const translateZ = isActive ? 0 : -100;
//                   const rotateY = position * -35;
//                   const scale = isActive ? 1 : 0.75;
//                   const cardOpacity = isActive ? 1 : 0.3;
//                   const blur = isActive ? 0 : 6;

//                   return (
//                     <motion.div
//                       key={`${uni.name}-${currentIndex}-${idx}`}
//                       className="absolute inset-0 flex items-center justify-center"
//                       initial={{ opacity: 0, x: position * 200, scale: 0.5 }}
//                       animate={{ 
//                         opacity: cardOpacity,
//                         x: translateX, 
//                         scale, 
//                         rotateY, 
//                         z: translateZ,
//                         filter: `blur(${blur}px)`
//                       }}
//                       exit={{ opacity: 0, x: position * -200, scale: 0.5 }}
//                       transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
//                       style={{ zIndex: isActive ? 10 : 1, transformStyle: 'preserve-3d' }}
//                       onMouseEnter={() => isActive && setHoveredIndex(currentIndex)}
//                       onMouseLeave={() => setHoveredIndex(null)}
//                     >
//                       <motion.div 
//                         whileHover={isActive ? { scale: 1.05, rotate: 2 } : {}}
//                         className={`relative w-56 h-72 rounded-3xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ${
//                           isActive 
//                             ? `bg-gradient-to-br ${uni.color} shadow-2xl ring-4 ring-emerald-400/30` 
//                             : 'bg-foreground/5 border border-foreground/10'
//                         }`}
//                       >
//                         {isActive && <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50" />}
                        
//                         <motion.span 
//                           animate={{ y: [0, -10, 0] }}
//                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                           className="text-6xl relative z-10 mb-4 drop-shadow-2xl"
//                         >
//                           {uni.emoji}
//                         </motion.span>
                        
//                         <span className={`relative z-10 font-bold text-xl tracking-wide ${isActive ? 'text-white' : 'text-foreground/60'}`}>
//                           {uni.name}
//                         </span>

//                         {isActive && hoveredIndex === currentIndex && (
//                           <motion.div 
//                             initial={{ x: '-150%' }}
//                             animate={{ x: '150%' }}
//                             transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
//                             className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                             style={{ rotate: '20deg' }}
//                           />
//                         )}
//                         {isActive && (
//                           <motion.div 
//                             initial={{ opacity: 0, y: 10 }} 
//                             animate={{ opacity: 1, y: 0 }} 
//                             transition={{ delay: 0.4 }}
//                             className="absolute bottom-5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-xs text-white font-bold"
//                           >
//                             Match: {90 + idx}%
//                           </motion.div>
//                         )}
//                       </motion.div>
//                     </motion.div>
//                   )
//                 })}
//               </AnimatePresence>

//               <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
//                 {universities.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       index === currentIndex 
//                         ? 'w-6 bg-emerald-400' 
//                         : 'bg-foreground/20 hover:bg-foreground/40'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="absolute inset-0 pointer-events-none">
//               {[
//                 { x: 100, y: -50 },
//                 { x: -150, y: 100 },
//                 { x: 200, y: 150 },
//                 { x: -100, y: -200 },
//                 { x: 50, y: 250 },
//                 { x: -200, y: -100 },
//                 { x: 150, y: -150 },
//                 { x: -50, y: 200 },
//                 { x: 250, y: 50 },
//                 { x: -250, y: 150 },
//                 { x: 80, y: -250 },
//                 { x: -80, y: 50 },
//               ].map((pos, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute w-1 h-1 rounded-full bg-emerald-400/30"
//                   initial={{
//                     x: pos.x,
//                     y: pos.y,
//                     scale: 0
//                   }}
//                   animate={{
//                     x: pos.x + 20,
//                     y: pos.y - 20,
//                     scale: [0, 1, 0],
//                   }}
//                   transition={{
//                     duration: 3 + (i % 3),
//                     repeat: Infinity,
//                     delay: i * 0.2,
//                   }}
//                 />
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 1.5, duration: 0.5 }}
//               className="absolute -top-8 -right-8 glass-card px-4 py-2 rounded-full text-xs font-semibold text-emerald-400 border border-emerald-500/30"
//             >
//               ✦ Explore Now
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }
























'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const universities = [
  { name: "Stanford", color: "from-red-500 to-red-600", emoji: "🌲", image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Stanford_logo.png", match: 97, category: "STEM", glow: "#ef4444" },
  { name: "MIT", color: "from-red-600 to-red-700", emoji: "⚡", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/MIT_logo_2003-2023.svg", match: 95, category: "STEM", glow: "#dc2626" },
  { name: "Harvard", color: "from-rose-800 to-rose-900", emoji: "📚", image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg", match: 91, category: "Humanities", glow: "#be123c" },
  { name: "Oxford", color: "from-blue-700 to-blue-800", emoji: "🎓", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/University_of_Oxford.svg", match: 89, category: "Humanities", glow: "#1d4ed8" },
  { name: "Cambridge", color: "from-blue-600 to-blue-700", emoji: "🏛️", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg", match: 88, category: "STEM", glow: "#2563eb" },
  { name: "NUS", color: "from-orange-500 to-orange-600", emoji: "🌏", image: "https://upload.wikimedia.org/wikipedia/de/f/f9/National_University_of_Singapore_Logo.svg", match: 84, category: "Business", glow: "#f97316" },
  { name: "Imperial", color: "from-cyan-600 to-cyan-700", emoji: "🔬", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Imperial_College_London.svg", match: 92, category: "STEM", glow: "#0891b2" },
  { name: "NYU", color: "from-indigo-500 to-indigo-600", emoji: "🏙️", image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Nyu_stacked_black.svg", match: 81, category: "Business", glow: "#6366f1" },
]

const categories = ["All", "STEM", "Business", "Humanities"]

export default function Universities() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % universities.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const filteredUniversities = activeCategory === "All" 
    ? universities 
    : universities.filter(u => u.category === activeCategory)

  return (
    <section id="universities" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background via-surface to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Search className="w-4 h-4" /> University Finder
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground/90">
              Don't just find
              <br />
              a university.
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Find your match.
              </span>
            </h2>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg">
              Explore universities, courses and countries based on what matters to you. Explore live insights and match rates.
            </p>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-background/50 border border-foreground/10 hover:border-emerald-500/40 text-foreground/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors group">
              Explore Careers
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`${activeIndex}-${activeCategory}`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="col-span-2 row-span-2 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden bg-background/70 backdrop-blur-2xl border border-foreground/10 shadow-2xl"
                >
                  <div 
                    className="absolute inset-0 opacity-60 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${universities[activeIndex].glow}20, transparent 70%)` }}
                  />
                  <div 
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(to right, transparent, ${universities[activeIndex].glow}, transparent)` }}
                  />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-foreground/60 text-xs font-bold uppercase tracking-widest">Top Match</span>
                    <span className="bg-white/5 border border-foreground/10 px-3 py-1 rounded-full text-xs font-bold text-foreground/60">{universities[activeIndex].category}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center my-6 relative z-10">
                    
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-28 h-28 rounded-2xl flex items-center justify-center p-2 mb-5 shadow-xl bg-white/5 border border-foreground/10"
                    >
                      <img 
                        src={universities[activeIndex].image} 
                        alt={`${universities[activeIndex].name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground">{universities[activeIndex].name}</h3>
                    
                    <span 
                      className="mt-3 px-4 py-1.5 rounded-full text-sm font-bold border border-foreground/10 bg-white/5"
                      style={{ color: universities[activeIndex].glow }}
                    >
                      {universities[activeIndex].match}% Match
                    </span>
                  </div>

                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden relative z-10">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${universities[activeIndex].match}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(to right, ${universities[activeIndex].glow}, transparent)` }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              {filteredUniversities.map((uni, idx) => {
                if (uni.name === universities[activeIndex].name) return null

                return (
                  <motion.button
                    key={uni.name}
                    onClick={() => setActiveIndex(universities.findIndex(u => u.name === uni.name))}
                    whileHover={{ scale: 1.05, y: -5, borderColor: uni.glow }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-center bg-surface border border-white/5 hover:bg-background/60 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center p-1 bg-white/5 border border-foreground/10 rounded-xl">
                      <img 
                        src={uni.image} 
                        alt={`${uni.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-foreground/80">{uni.name}</span>
                    <span className="text-[10px] font-bold" style={{ color: uni.glow }}>{uni.match}%</span>
                  </motion.button>
                )
              })}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}