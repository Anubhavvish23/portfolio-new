"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="container">
      <Head>
        <title>Contact Me | Anubhav</title>
        <meta name="description" content="Contact information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`noise-overlay ${isLoaded ? 'visible' : ''}`}></div>
      <div className={`grid-overlay ${isLoaded ? 'visible' : ''}`}></div>

      <main className={`main ${isVisible ? 'visible' : ''}`}>
        <div className="contactHeader">
          <div className="header-background"></div>
          <div className="glitch-container">
            <h1 className="contactTitle main-title">CONTACT ME</h1>
            <h1 className="contactTitle glitch-title" data-text="CONTACT ME">CONTACT ME</h1>
            <h1 className="contactTitle glitch-title" data-text="CONTACT ME">CONTACT ME</h1>
          </div>
          
          <div className="icons-container">
            <div className="icon icon-email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 8l10 6 10-6" />
              </svg>
            </div>
            
            <div className="icon icon-phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            
            <div className="icon icon-chat">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            
            <div className="icon icon-location">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <div className="form-glow"></div>
          <div className="form-corner top-left"></div>
          <div className="form-corner top-right"></div>
          <div className="form-corner bottom-left"></div>
          <div className="form-corner bottom-right"></div>
          
          {submitSuccess ? (
            <div className="success-message">
              <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">Get In Touch</h2>
              
              <div className="formGroup">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Name</label>
                <div className="line"></div>
                <div className="focus-highlight"></div>
              </div>
              
              <div className="formGroup">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
                <div className="line"></div>
                <div className="focus-highlight"></div>
              </div>
              
              <div className="formGroup">
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder=" " 
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
                <div className="line"></div>
                <div className="focus-highlight"></div>
              </div>
              
              <button type="submit" className={`submitButton ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                <span className="button-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className="button-glow"></span>
                {isSubmitting && (
                  <span className="loading-spinner">
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke="currentColor" strokeDasharray="80" strokeDashoffset="60"></circle>
                    </svg>
                  </span>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="contactInfo">
          {/* Email Card */}
          <a href="mailto:anubhavsanjay01@gmail.com" className="contact-card">
            <div className="card-inner">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 8l10 6 10-6" />
                </svg>
              </div>
              <div className="text-content">
                <h3>Email</h3>
                <p>anubhavsanjay01@gmail.com</p>
              </div>
            </div>
            <div className="card-glow"></div>
          </a>

          {/* Phone Card */}
          <a href="tel:+919880502538" className="contact-card">
            <div className="card-inner">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="text-content">
                <h3>Phone</h3>
                <p>+91 9880502538</p>
              </div>
            </div>
            <div className="card-glow"></div>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/anubhav-s-14a380229" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="card-inner">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="text-content">
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>
            </div>
            <div className="card-glow"></div>
          </a>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        
        @keyframes glitchText {
          0% { text-shadow: -2px 3px #ff00c1, 2px -3px #00fff9; }
          50% { text-shadow: 2px -3px #ff00c1, -2px 3px #00fff9; }
          100% { text-shadow: -2px 3px #ff00c1, 2px -3px #00fff9; }
        }
        
        @keyframes shineEffect {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(7deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-7deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes letterPop {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.3); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes borderGlow {
          0% { box-shadow: 0 0 10px rgba(0, 255, 0, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 255, 0, 0.7); }
          100% { box-shadow: 0 0 10px rgba(0, 255, 0, 0.3); }
        }
        
        @keyframes formGlow {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes cornerFlash {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes successPop {
          0% { transform: scale(0.7); opacity: 0; }
          40% { transform: scale(1.1); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes gridOverlay {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        @keyframes iconPulse {
          0% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 0.9; }
        }

        .container {
          padding: 0;
          color: #fff;
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease;
          z-index: 1;
          mix-blend-mode: overlay;
        }
        
        .noise-overlay.visible {
          opacity: 0.08;
        }
        
        .grid-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(0, 255, 0, 0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 0, 0.07) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.8s ease;
          z-index: 1;
          animation: gridOverlay 120s linear infinite;
        }
        
        .grid-overlay.visible {
          opacity: 0.15;
        }
        
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
          position: relative;
          z-index: 2;
        }
        
        .main.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .backButton {
          align-self: flex-start;
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          padding: 0.6rem 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          background: rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        
        .back-arrow {
          margin-right: 8px;
          font-size: 1.3rem;
          transition: transform 0.3s ease;
        }
        
        .backButton:hover {
          color: #00ff00;
          border-color: #00ff00;
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.4);
          transform: translateX(-5px);
        }
        
        .backButton:hover .back-arrow {
          transform: translateX(-5px);
        }
        
        .contactHeader {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-bottom: 6rem;
          height: 250px;
        }
        
        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%);
          transform: skewY(-3deg);
        }
        
        .glitch-container {
          position: relative;
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
        
        .contactTitle {
          font-size: 6rem;
          font-weight: 900;
          text-align: center;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          line-height: 1;
          margin: 0;
        }
        
        .main-title {
          color: white;
          position: relative;
          z-index: 3;
          text-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
        }
        
        .glitch-title {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #00ff00;
          z-index: 2;
        }
        
        .glitch-title:nth-child(2) {
          color: transparent;
          text-shadow: 2px 0 #ff00c1;
          animation: glitch 3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        
        .glitch-title:nth-child(3) {
          color: transparent;
          text-shadow: -2px 0 #00fff9;
          animation: glitch 2s infinite;
          animation-delay: 0.3s;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }
        
        .icons-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0.7;
          pointer-events: none;
        }
        
        .icon {
          position: absolute;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: float 8s ease-in-out infinite;
          z-index: 2;
          box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
        }
        
        .icon svg {
          width: 60%;
          height: 60%;
          opacity: 0.8;
        }
        
        .icon-email {
          width: 50px;
          height: 50px;
          top: -10%;
          left: 20%;
          border: 1px solid rgba(29, 155, 240, 0.4);
          padding: 10px;
          animation-delay: 0s;
          color: #1d9bf0;
          animation-duration: 7s;
        }
        
        .icon-phone {
          width: 60px;
          height: 60px;
          bottom: -20%;
          left: 50%;
          transform: translateX(-50%);
          border: 1px solid rgba(0, 255, 0, 0.4);
          padding: 12px;
          animation-delay: 1s;
          color: #00ff00;
          animation-name: float, pulse;
          animation-duration: 8s, 4s;
        }
        
        .icon-chat {
          width: 45px;
          height: 45px;
          bottom: 10%;
          left: 15%;
          border: 1px solid rgba(0, 204, 0, 0.4);
          padding: 10px;
          animation-delay: 2s;
          color: #00cc00;
          animation-duration: 6s;
        }
        
        .icon-location {
          width: 55px;
          height: 55px;
          top: 20%;
          right: 15%;
          border: 1px solid rgba(255, 102, 0, 0.4);
          padding: 12px;
          animation-delay: 1.5s;
          color: #ff6600;
          animation-duration: 9s;
        }
        
        .contactForm {
          width: 100%;
          max-width: 700px;
          margin-bottom: 5rem;
          padding: 3rem;
          border-radius: 12px;
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(0, 255, 0, 0.2);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.2) inset;
          backdrop-filter: blur(10px);
          animation: slideInUp 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
          position: relative;
          overflow: hidden;
        }
        
        .form-glow {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: radial-gradient(circle, rgba(0, 255, 0, 0.2) 0%, rgba(0, 255, 0, 0) 70%);
          pointer-events: none;
          z-index: 0;
          animation: formGlow 5s ease-in-out infinite;
        }
        
        .form-corner {
          position: absolute;
          width: 10px;
          height: 10px;
          pointer-events: none;
          z-index: 1;
        }
        
        .top-left {
          top: 0;
          left: 0;
          border-top: 2px solid #00ff00;
          border-left: 2px solid #00ff00;
          animation: cornerFlash 2s ease-in-out infinite;
        }
        
        .top-right {
          top: 0;
          right: 0;
          border-top: 2px solid #00ff00;
          border-right: 2px solid #00ff00;
          animation: cornerFlash 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .bottom-left {
          bottom: 0;
          left: 0;
          border-bottom: 2px solid #00ff00;
          border-left: 2px solid #00ff00;
          animation: cornerFlash 2s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .bottom-right {
          bottom: 0;
          right: 0;
          border-bottom: 2px solid #00ff00;
          border-right: 2px solid #00ff00;
          animation: cornerFlash 2s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .contactForm::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(0, 255, 0, 0.8), transparent);
        }
        
        .form-title {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #00ff00;
          text-shadow: 0 0 15px rgba(0, 255, 0, 0.4);
        }
        
        .formGroup {
          margin-bottom: 2.5rem;
          position: relative;
        }
        
        .formGroup input, .formGroup textarea {
          width: 100%;
          padding: 1.2rem 0.5rem;
          border: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
          color: #fff;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          z-index: 1;
          position: relative;
          outline: none;
          border-radius: 5px 5px 0 0;
        }
        
        .formGroup label {
          position: absolute;
          top: 1.2rem;
          left: 0.5rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
          transition: all 0.3s ease;
          pointer-events: none;
          letter-spacing: 1px;
        }
        
        .formGroup input:focus ~ label,
        .formGroup input:not(:placeholder-shown) ~ label,
        .formGroup textarea:focus ~ label,
        .formGroup textarea:not(:placeholder-shown) ~ label {
          top: -0.8rem;
          left: 0;
          font-size: 0.9rem;
          color: #00ff00;
          font-weight: 600;
        }
        
        .formGroup .line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #00ff00;
          transition: width 0.3s ease;
        }
        
        .formGroup input:focus ~ .line,
        .formGroup textarea:focus ~ .line {
          width: 100%;
        }
        
        .formGroup .focus-highlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
          border-radius: 5px 5px 0 0;
        }
        
        .formGroup input:focus ~ .focus-highlight,.formGroup textarea:focus ~ .focus-highlight {
          opacity: 1;
        }
        
        .submitButton {
          width: 100%;
          padding: 1.2rem;
          font-size: 1.1rem;
          border: 2px solid rgba(0, 255, 0, 0.3);
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          border-radius: 5px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          margin-top: 1rem;
        }
        
        .submitButton:hover {
          background: rgba(0, 255, 0, 0.1);
          border-color: #00ff00;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        
        .submitButton:active {
          transform: translateY(0);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
        
        .button-glow {
          position: absolute;
          width: 80px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent);
          top: 0;
          left: -100%;
          animation: shineEffect 3s infinite;
          transform: skewX(-20deg);
        }
        
        .submitButton:hover .button-glow {
          animation-duration: 1.5s;
        }
        
        .submitButton.submitting {
          pointer-events: none;
          opacity: 0.8;
        }
        
        .loading-spinner {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          display: inline-block;
        }
        
        .loading-spinner svg {
          animation: spin 1s linear infinite;
        }
        
        .success-message {
          text-align: center;
          padding: 2rem 1rem;
          animation: successPop 0.5s ease-out forwards;
        }
        
        .success-icon {
          width: 60px;
          height: 60px;
          color: #00ff00;
          margin-bottom: 1rem;
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
          animation: iconPulse 2s infinite;
        }
        
        .success-message h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #00ff00;
        }
        
        .success-message p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .contactInfo {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 0.6s;
        }
        
        .contact-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 255, 0, 0.15);
          border-radius: 10px;
          padding: 2rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }
        
        .contact-card:hover {
          transform: translateY(-10px);
          border-color: #00ff00;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        .contact-card:hover .icon-wrapper {
          animation: wiggle 0.5s ease-in-out;
          color: #00ff00;
          border-color: #00ff00;
        }
        
        .contact-card:hover .card-glow {
          opacity: 0.8;
        }
        
        .card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 1;
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(0, 255, 0, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .icon-wrapper svg {
          width: 35px;
          height: 35px;
        }
        
        .text-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .text-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          line-height: 1.5;
        }
        
        @media (max-width: 1000px) {
          .contactTitle {
            font-size: 4rem;
          }
          
          .contactHeader {
            height: 200px;
            margin-bottom: 4rem;
          }
        }
        
        @media (max-width: 768px) {
          .contactForm {
            padding: 2rem;
          }
          
          .contactInfo {
            grid-template-columns: 1fr;
          }
          
          .contactTitle {
            font-size: 3rem;
          }
          
          .contactHeader {
            height: 150px;
            margin-bottom: 3rem;
          }
          
          .main {
            padding: 1rem;
          }
          
          .contact-card {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .contactTitle {
            font-size: 2rem;
            letter-spacing: 0.1em;
          }
          
          .icon-wrapper {
            width: 60px;
            height: 60px;
          }
          
          .icon-wrapper svg {
            width: 30px;
            height: 30px;
          }
          
          .contactForm {
            padding: 1.5rem;
          }
          
          .form-title {
            font-size: 1.8rem;
          }
        }
      `}</style>

     

      <style jsx>{`
        .navigation {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 50px;
          border: 1px solid rgba(0, 255, 0, 0.2);
          z-index: 100;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 255, 0, 0.2) inset;
        }
        
        .navLink {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 20px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .navLink:hover {
          color: #00ff00;
          background: rgba(0, 255, 0, 0.1);
        }
        
        .navLink.active {
          color: #00ff00;
          background: rgba(0, 255, 0, 0.15);
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
        }
        
        .navLabel {
          position: relative;
        }
        
        .navLabel::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #00ff00;
          transition: width 0.3s ease;
        }
        
        .navLink:hover .navLabel::after {
          width: 100%;
        }
        
        .navLink.active .navLabel::after {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .navigation {
            bottom: 20px;
            padding: 8px 15px;
          }
          
          .navLink {
            padding: 8px 12px;
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .navigation {
            width: 90%;
            justify-content: space-around;
          }
          
          .navLink {
            padding: 6px 8px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}