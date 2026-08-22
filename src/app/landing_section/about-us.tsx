"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about-us" className="relative py-16 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-gradient-to-br from-primary/[0.08] via-background to-accent/[0.05]">
          
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12">
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative w-full max-w-md mx-auto animate-float-slow">
                <Image
                  src="/3dboy.png" 
                  alt="Novi AI Mentor"
                  width={500}
                  height={600}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="relative z-10 order-1 lg:order-2">
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your future is too important <br className="hidden sm:block" />
                to figure out alone.
              </h2>

              <h3 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 gradient-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Meet Novi today.
              </h3>

              <div className="flex flex-wrap items-center gap-6">
                <button className="btn-primary group">
                  Start your journey 
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>

                <div className="flex flex-col sm:flex-row gap-3 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[10px]">✓</span>
                    It&apos;s free to get started
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[10px]">✓</span>
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[10px]">✓</span>
                    Takes less than 5 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <footer className="mt-20 pt-12 border-t border-black/5 dark:border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                  N
                </div>
                <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Novi
                </span>
              </div>
              
              <p className="text-sm text-foreground/50 leading-relaxed mb-6 max-w-xs">
                The AI mentor and operating system for students from Grade 9 to their dream university.
              </p>

              <div className="flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-primary/30 hover:text-primary transition-colors">
                 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-primary/30 hover:text-primary transition-colors">
                  
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-primary/30 hover:text-primary transition-colors">
                  
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-primary/30 hover:text-primary transition-colors">
                  
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link href="/career-explorer" className="hover:text-primary transition-colors">Career Explorer</Link></li>
                <li><Link href="/university-explorer" className="hover:text-primary transition-colors">University Explorer</Link></li>
                <li><Link href="/ai-roadmap" className="hover:text-primary transition-colors">AI Roadmap</Link></li>
                <li><Link href="/career-passport" className="hover:text-primary transition-colors">Career Passport</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">For Parents</h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li><Link href="/parent-dashboard" className="hover:text-primary transition-colors">Parent Dashboard</Link></li>
                <li><Link href="/how-we-help" className="hover:text-primary transition-colors">How We Help</Link></li>
                <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
                <li><Link href="/guides" className="hover:text-primary transition-colors">Guides</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Stay updated with Novi</h4>
              <form className="flex items-center rounded-full border border-black/10 dark:border-white/10 bg-background/50 focus-within:border-primary/50 transition-colors overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-foreground/30"
                />
                <button 
                  type="submit" 
                  className="w-10 h-10 flex items-center justify-center text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  →
                </button>
              </form>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-black/5 dark:border-white/5 text-center text-sm text-foreground/40">
            © 2024 Novi. All rights reserved.
          </div>
        </footer>

      </div>
    </section>
  );
}






