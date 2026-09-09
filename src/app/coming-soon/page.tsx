"use client"; 

import { useState } from 'react';
import './style.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState('Student');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow-left"></div>
      <div className="bg-glow bg-glow-right"></div>

      <div className="poster-header">
        <div className="logo-wrapper">
          <span className="logo-icon">N</span>
          <span className="poster-logo-text">NOVI</span>
        </div>
        <div className="coming-soon-banner">
          <span className="cs-text">COMING SOON</span>
        </div>
      </div>

      <header className="container hero-section">
        <div className="left-content">
          <div className="badge">
            <span className="dot"></span> LIMITED FOUNDING MEMBER ACCESS
          </div>
          <h1>Your future won&apos;t wait.<br /><span className="highlight">Neither should you.</span></h1>
          <p className="subtitle">
            Confused about careers? Overwhelmed by universities? Novi is the AI mentor that 
            turns confusion into a personalized roadmap to your dream college.
          </p>
          <button onClick={openModal} className="cta-btn">Join the Early Access List</button>
          <p className="cta-subtext">🔥 Only few founding spots available. Don&apos;t miss out.</p>
        </div>

        <div className="right-content">
          <img src="/3dboyconfused.png" alt="Confused Students" className="hero-img problem-img" />
        </div>
      </header>

      <section className="features-section" id="features">
        <h2 className="section-title">Everything you need to succeed</h2>
        <p className="section-intro">Novi isn&apos;t just an app; it&apos;s your personalized co-pilot for the high school journey.</p>
        
        <div className="modules-grid">
          <div className="module-card">
            <div className="module-icon">🧬</div>
            <h3>Career DNA Profiling</h3>
            <p>Unlock your unique strengths and discover careers that perfectly align with your personality.</p>
          </div>
          <div className="module-card">
            <div className="module-icon">🎓</div>
            <h3>University Explorer</h3>
            <p>Search through thousands of colleges and compare requirements tailored to your specific goals.</p>
          </div>
          <div className="module-card">
            <div className="module-icon">💬</div>
            <h3>24/7 AI Mentor</h3>
            <p>Have a personal AI companion ready to answer questions and keep you motivated 24/7.</p>
          </div>
          <div className="module-card">
            <div className="module-icon">🗺️</div>
            <h3>Dynamic Roadmaps</h3>
            <p>Get a step-by-step personalized roadmap that evolves with you, ensuring you&apos;re always on track.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-inner">
          <div className="benefits-text">
            <h2 className="section-title">Why join the waitlist today?</h2>
            <p className="section-intro">Be a founding member and shape the future of student mentorship.</p>
            
            <div className="benefit-list">
              <div className="benefit-item">
                <div className="benefit-icon">👑</div>
                <div>
                  <h4>Founding Member Perks</h4>
                  <p>Lifetime discounts, exclusive features, and early access to new tools.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🗣️</div>
                <div>
                  <h4>Shape the Product</h4>
                  <p>Get direct access to our team and influence what Novi builds next.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div>
                  <h4>Skip the Queue</h4>
                  <p>Be the first to unlock your AI mentor when doors officially open to the public.</p>
                </div>
              </div>
            </div>

            <button onClick={openModal} className="cta-btn">Reserve My Spot</button>
          </div>

          <div className="benefits-image">
            <img src="/3dboy.png" alt="Confident Students" className="benefits-hero-img" />
          </div>
        </div>
      </section>

      <footer className="footer-cta">
        <h2>Ready to build your future?</h2>
        <p>Join 500+ students and parents already on the list. The future doesn&apos;t wait.</p>
        <button onClick={openModal} className="cta-btn">Get Early Access</button>
        <p className="copyright">© 2026 Novi. The Operating System for Student Success.</p>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>Join the Novi Waitlist</h2>
            <p className="modal-sub">Be the first to know when we launch!</p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="radio-group">
                  <label className="radio-container">
                    <input type="radio" name="role" value="Student" checked={role === 'Student'} onChange={() => setRole('Student')} />
                    <span className="radio-label">Student</span>
                  </label>
                  <label className="radio-container">
                    <input type="radio" name="role" value="Parent" checked={role === 'Parent'} onChange={() => setRole('Parent')} />
                    <span className="radio-label">Parent</span>
                  </label>
                </div>

                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="e.g., Alex Johnson" required />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="you@example.com" required />
                </div>

                {role === 'Student' ? (
                  <div className="input-group">
                    <label htmlFor="student-grade">Current Grade</label>
                    <select id="student-grade">
                      <option value="">Select Grade</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 10">Grade 10</option>
                      <option value="Grade 11">Grade 11</option>
                      <option value="Grade 12">Grade 12</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <div className="input-group">
                      <label htmlFor="student-name">Student&apos;s Name</label>
                      <input type="text" id="student-name" placeholder="e.g., Sarah Johnson" />
                    </div>
                    <div className="input-group">
                      <label htmlFor="parent-grade">Student&apos;s Grade</label>
                      <select id="parent-grade">
                        <option value="">Select Grade</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                      </select>
                    </div>
                  </div>
                )}

                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            ) : (
              <p className="success-msg">Thank you! You&apos;re on the list. 🚀</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}