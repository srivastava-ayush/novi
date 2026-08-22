"use client";

import Image from "next/image";
import Link from "next/link";

export default function Universities() {
  return (
    <>
      <section id="universities" className="relative py-24 px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Don&apos;t just find a university. <br />
              <span className="gradient-text">Find your university.</span>
            </h2>
            <p className="text-lg text-foreground/60">
              Explore universities, courses and countries based on what matters to you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="glass-card rounded-2xl p-2 flex items-center">
              <svg className="w-5 h-5 text-foreground/40 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search universities, courses or countries..." 
                className="flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-foreground/30 text-foreground"
              />
              <button className="btn-primary px-6 py-3 !rounded-xl text-sm">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["Country", "Course", "Subject", "Ranking", "Fees", "University Type", "Scholarships", "Entry Requirements"].map((filter) => (
              <button 
                key={filter} 
                className="px-5 py-2.5 rounded-full border border-black/5 dark:border-white/10 bg-surface text-sm font-medium text-foreground/70 hover:border-primary/40 hover:text-primary transition-all"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="glass-card novi-gradient-border rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-16">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  N
                </div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">Novi&apos;s Recommendations</p>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Based on your interests, academics, goals and Career DNA
              </h3>
              <p className="text-foreground/60 mb-10 max-w-2xl">
                Here are universities worth exploring.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Stanford University", course: "Computer Science", score: "78%", desc: "Strong match for your technology and entrepreneurship goals." },
                  { name: "MIT", course: "Engineering", score: "72%", desc: "Excellent for building deep technical skills and research." },
                  { name: "NUS", course: "Business & Tech", score: "69%", desc: "Great global exposure with a focus on innovation." }
                ].map((uni) => (
                  <div key={uni.name} className="novi-interactive-card bg-surface-elevated rounded-2xl p-6 border border-black/5 dark:border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-bold text-foreground">{uni.name}</h4>
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{uni.score}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground/50 mb-2">{uni.course}</p>
                    <p className="text-sm text-foreground/60 mb-4">{uni.desc}</p>
                    <Link href="#" className="text-sm font-semibold text-primary hover:text-primary-light flex items-center gap-1">
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Your readiness score</h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-foreground mb-2">Stanford University</h4>
                  <p className="text-foreground/50 mb-4">Computer Science</p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center text-2xl font-bold">72%</div>
                    <div className="text-sm text-foreground/60">
                      <p className="font-semibold text-foreground mb-1">Your current readiness</p>
                      <p>Keep building your profile!</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="font-semibold text-foreground mb-3">You&apos;re strong in</p>
                  <ul className="space-y-2">
                    {["Academic performance", "Mathematics", "Coding"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-4 h-4 rounded-full bg-accent/20 text-accent flex items-center justify-center text-[10px]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-3">Build more depth in</p>
                  <ul className="space-y-2">
                    {["Research", "Leadership", "Extracurricular profile"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-4 h-4 rounded-full bg-accent-warm/20 text-accent-warm flex items-center justify-center text-[10px]">⚠</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/[0.08] to-accent/[0.05] rounded-2xl p-8 border border-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">N</div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">Novi&apos;s Next 3 Recommendations</p>
                </div>

                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 bg-surface-elevated p-4 rounded-xl shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-sm text-foreground/80">Complete an AI research project.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-surface-elevated p-4 rounded-xl shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</span>
                    <span className="text-sm text-foreground/80">Participate in a national coding competition.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-surface-elevated p-4 rounded-xl shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">3</span>
                    <span className="text-sm text-foreground/80">Build and publish a technology project.</span>
                  </li>
                </ol>

                <button className="btn-primary w-full">
                  Build My Roadmap →
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="relative py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted by students, loved by parents,<br className="hidden sm:block" /> preferred by schools.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 rounded-3xl">
              <div className="text-primary text-5xl font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Novi helped me discover career options I never knew existed. Now I have a clear plan and I&apos;m loving the journey!
              </p>
              <div className="font-semibold text-foreground">- Aara, Grade 10</div>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <div className="text-primary text-5xl font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-foreground/70 leading-relaxed mb-6">
                The AI roadmap is a game changer. It keeps my child focused and motivated every week.
              </p>
              <div className="font-semibold text-foreground">- Priya, Parent</div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <div className="text-primary text-5xl font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our students are more goal-oriented and confident. Novi is like having a mentor for every student.
              </p>
              <div className="font-semibold text-foreground">- Career Counsellor</div>
            </div>

          </div>

          <div className="glass-card flex flex-col lg:flex-row items-center justify-between gap-12 p-8 rounded-3xl">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="text-4xl font-bold text-foreground">4.9/5</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-foreground/50 text-sm">Average Rating<br />From 10,000+ reviews</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <span className="text-lg font-bold text-foreground/70 tracking-widest">DPS</span>
              <span className="text-lg font-bold text-foreground/70 tracking-widest">Oakridge</span>
              <span className="text-lg font-bold text-foreground/70 tracking-widest">PATHWAYS</span>
              <span className="text-lg font-bold text-foreground/70 tracking-widest">Inventure</span>
              <span className="text-lg font-bold text-foreground/70 tracking-widest">THE DOON SCHOOL</span>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}