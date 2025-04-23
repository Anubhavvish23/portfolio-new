"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Play, ExternalLink, Sparkles, Github } from 'lucide-react';

function App() {
  const mouseMoveRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const [lineStyles, setLineStyles] = useState<React.CSSProperties[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  // Generate random values only on the client side
  useEffect(() => {
    const styles = [...Array(10)].map((_, i) => ({
      '--delay': `${i * 2}s`,
      '--duration': `${20 + Math.random() * 20}s`,
      '--start-x': `${Math.random() * 100}%`,
      '--start-y': `${Math.random() * 100}%`,
    } as React.CSSProperties));

    setLineStyles(styles);

    // Add load animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Simulate section changes
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseMoveRef.current || !auraRef.current) return;

      setCursorPosition({ x: e.clientX, y: e.clientY });

      const lights = document.querySelectorAll('.light');
      lights.forEach((light) => {
        const rect = (light as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (light as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (light as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });

      // Update aura position
      const x = e.clientX;
      const y = e.clientY;
      auraRef.current.style.setProperty('--mouse-x', `${x}px`);
      auraRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle effect system
  const Particles = () => {
    return (
      <div className="particles-container fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-white/30"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>
    );
  };

  // Custom cursor
  const CustomCursor = () => (
    <div
      className="custom-cursor fixed pointer-events-none mix-blend-difference z-50"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    >
      <div className="cursor-dot w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="cursor-ring w-8 h-8 border border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );

  // Glitch text effect
  const GlitchText = ({ text, className }: { text: string; className?: string }) => (
    <div className={`glitch-wrapper relative inline-block ${className}`}>
      <div className="glitch" data-text={text}>{text}</div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes float-delayed {
          0% { transform: translateY(-20px); }
          50% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }

        @keyframes float-reverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 9s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }

        .moving-line {
          position: absolute;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(0, 255, 0, 0.5), transparent);
          top: 0;
          left: var(--start-x, 50%);
          transform-origin: top;
          animation: moveLine var(--duration, 20s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
          opacity: 0.5;
        }

        @keyframes moveLine {
          0% {
            transform: translateX(0) scaleY(0);
            opacity: 0;
          }
          10% {
            transform: translateX(0) scaleY(0.5);
            opacity: 0.5;
          }
          90% {
            transform: translateX(100px) scaleY(0.5);
            opacity: 0.5;
          }
          100% {
            transform: translateX(200px) scaleY(0);
            opacity: 0;
          }
        }

        .aura-container {
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%));
          pointer-events: none;
        }

        .aura {
          position: absolute;
          border-radius: 50%;
          opacity: 0.5;
          filter: blur(8px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .aura-outer {
          width: 80px;
          height: 80px;
          background-color: rgba(0, 255, 0, 0.1);
        }

        .aura-middle {
          width: 60px;
          height: 60px;
          background-color: rgba(0, 255, 0, 0.2);
        }

        .aura-inner {
          width: 40px;
          height: 40px;
          background-color: rgba(0, 255, 0, 0.3);
        }

        .bg-grid {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .path-animation {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: dash 5s linear infinite;
        }

        @keyframes dash {
          0% { stroke-dashoffset: 300; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -300; }
        }

        .parallax-card {
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }

        .parallax-card-content {
          transform: translateZ(50px);
        }

        .link-button {
          position: relative;
          overflow: hidden;
        }

        .link-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }

        .link-button:hover::after {
          left: 100%;
        }

        .glitch {
          position: relative;
          color: white;
          letter-spacing: 2px;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
        }

        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #00ff00;
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #ff00ff;
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
          0% {
            clip-path: inset(20% 0 30% 0);
          }
          20% {
            clip-path: inset(15% 0 55% 0);
          }
          40% {
            clip-path: inset(25% 0 45% 0);
          }
          60% {
            clip-path: inset(50% 0 10% 0);
          }
          80% {
            clip-path: inset(40% 0 35% 0);
          }
          100% {
            clip-path: inset(5% 0 70% 0);
          }
        }

        @keyframes glitch-anim-2 {
          0% {
            clip-path: inset(10% 0 60% 0);
          }
          20% {
            clip-path: inset(30% 0 35% 0);
          }
          40% {
            clip-path: inset(50% 0 20% 0);
          }
          60% {
            clip-path: inset(15% 0 65% 0);
          }
          80% {
            clip-path: inset(5% 0 40% 0);
          }
          100% {
            clip-path: inset(40% 0 15% 0);
          }
        }

        .custom-cursor {
          will-change: transform;
          transition: transform 0.1s ease;
        }

        .cursor-ring {
          transition: width 0.3s, height 0.3s, border-color 0.3s;
        }

        a:hover ~ .custom-cursor .cursor-ring,
        button:hover ~ .custom-cursor .cursor-ring {
          width: 3rem;
          height: 3rem;
          border-color: #00ff00;
        }

        .particle {
          will-change: transform, opacity;
          animation: float-particle linear infinite;
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Text animation */
        .text-reveal {
          overflow: hidden;
        }

        .text-reveal-content {
          transform: translateY(100%);
          opacity: 0;
          transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.7s ease;
        }

        .loaded .text-reveal-content {
          transform: translateY(0);
          opacity: 1;
        }

        /* Staggered animations for children */
        .stagger-children > * {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .loaded .stagger-children > *:nth-child(1) {
          transition-delay: 0.1s;
          opacity: 1;
          transform: translateY(0);
        }

        .loaded .stagger-children > *:nth-child(2) {
          transition-delay: 0.2s;
          opacity: 1;
          transform: translateY(0);
        }

        .loaded .stagger-children > *:nth-child(3) {
          transition-delay: 0.3s;
          opacity: 1;
          transform: translateY(0);
        }

        .loaded .stagger-children > *:nth-child(4) {
          transition-delay: 0.4s;
          opacity: 1;
          transform: translateY(0);
        }

        /* Perspective card animation */
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card-3d-inner {
          transform: translateZ(20px);
        }

        .card-3d:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05);
        }
      `}</style>

      <div ref={mouseMoveRef} className={`min-h-screen bg-black overflow-hidden relative ${isLoaded ? 'loaded' : ''}`}>
        {/* Moving lines background */}
        <div className="fixed inset-0">
          {lineStyles.map((style, i) => (
            <div
              key={i}
              className="moving-line"
              style={style}
            />
          ))}
        </div>

        {/* Particles */}
        <Particles />

        {/* Mouse following aura */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            ref={auraRef}
            className="aura-container"
          >
            <div className="aura aura-outer" />
            <div className="aura aura-middle" />
            <div className="aura aura-inner" />
          </div>
        </div>

        {/* Custom cursor */}
        <CustomCursor />

        {/* Animated background effects */}
        <div className="fixed inset-0 bg-grid opacity-20" />
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-black animate-pulse-slow" />
          <div className="absolute w-full h-full bg-noise opacity-5" />
        </div>

        {/* Green light effects */}
        <div className="light absolute top-0 left-0 w-[500px] h-[500px] bg-[#00ff00] opacity-40 rounded-full blur-[200px] pointer-events-none animate-float" />
        <div className="light absolute top-[50%] right-0 w-[500px] h-[500px] bg-[#00ff00] opacity-40 rounded-full blur-[200px] pointer-events-none animate-float-delayed" />
        <div className="light absolute bottom-0 left-[30%] w-[300px] h-[300px] bg-[#00ff00] opacity-30 rounded-full blur-[150px] pointer-events-none animate-float-reverse" />

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-16">
          <header className="flex justify-between items-center mb-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00] to-emerald-500 rounded-lg opacity-70"></div>
                <Play className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <GlitchText text="Anubhav Dev" className="text-lg font-bold" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8 stagger-children">
                <li>
                  <a href="#" className="text-white hover:text-[#00ff00] transition-colors"></a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#00ff00] transition-colors"></a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#00ff00] transition-colors"></a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#00ff00] transition-colors"></a>
                </li>
              </ul>
            </nav>

            {/* Contact button */}
            <button className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-[#00ff00] hover:text-black transition-colors hover:shadow-glow link-button flex items-center">
              <span>Contact</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <div className="flex items-start gap-8">
                {/* Rotating text */}
                <div className="rotating-text relative w-32 h-32">
                  <svg className="animate-spin-slow absolute" viewBox="0 0 100 100">
                    <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text className="text-[11px] uppercase">
                      <textPath href="#circle" className="fill-[#00ff00]">
                        Let&apos;s code with Anubhav• heheheheh
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Main text */}
                <div className="flex-1">
                  <div className={`text-reveal mb-2 ${activeSection === 0 ? 'loaded' : ''}`}>
                    <h1 className="text-6xl md:text-8xl font-bold text-white relative text-reveal-content">
                      BE WILD!
                      <span className="absolute -inset-2 bg-white/5 blur-lg rounded-lg -z-10" />
                    </h1>
                  </div>

                  <div className={`text-reveal mb-2 ${activeSection === 1 ? 'loaded' : ''}`}>
                    <h2 className="text-6xl md:text-8xl font-bold relative text-reveal-content">
                      <span className="text-[#00ff00]">CREATIVE!</span>
                      <span className="absolute -inset-2 bg-[#00ff00]/10 blur-lg rounded-lg -z-10" />
                    </h2>
                  </div>

                  <div className={`text-reveal ${activeSection === 2 ? 'loaded' : ''}`}>
                    <h2 className="text-6xl md:text-8xl font-bold text-white relative text-reveal-content">
                      AND COOL!
                      <span className="absolute -inset-2 bg-white/5 blur-lg rounded-lg -z-10" />
                    </h2>
                  </div>

                  <div className="mt-8 stagger-children">
                    <p className="text-gray-400 max-w-2xl">Create stunning digital experiences with cutting-edge animations and interactive designs that push the boundaries of web development.</p>

                    <div className="flex items-center space-x-4 mt-6">
                      <a
                        href="https://github.com/Anubhavvish23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-gradient-to-r from-[#00ff00] to-emerald-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#00ff00]/20 transition-all duration-300 flex items-center"
                      >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Explore Projects
                      </a>

                      <a
                        href="https://github.com/Anubhavvish23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white flex items-center hover:text-[#00ff00] transition-colors"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        <span>View on GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              {/* 3D perspective card */}
              <div className="card-3d bg-black border border-white/10 rounded-2xl p-6 backdrop-blur-md bg-white/5 h-96">
                <div className="card-3d-inner h-full">
                  {/* Logo with moving balls */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20">
                      <svg className="w-full h-full">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 255, 0, 0.3)" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>

                    <svg viewBox="0 0 100 100" className="w-64 h-64">
                      <circle cx="50" cy="50" r="40" stroke="rgba(0, 255, 0, 0.3)" strokeWidth="1" fill="none" />
                      <circle cx="50" cy="50" r="30" stroke="rgba(0, 255, 0, 0.4)" strokeWidth="1" fill="none" />
                      <circle cx="50" cy="50" r="20" stroke="rgba(0, 255, 0, 0.5)" strokeWidth="1" fill="none" />

                      <path d="M10,10 L90,10 L50,90 Z" fill="none" stroke="white" strokeWidth="2" className="path-animation" />

                      <circle className="moving-ball-1" r="3" fill="#ff0000">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M10,10 L90,10 L50,90 Z" />
                      </circle>
                      <circle className="moving-ball-2" r="3" fill="#00ff00">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M10,10 L90,10 L50,90 Z" begin="1s" />
                      </circle>
                      <circle className="moving-ball-3" r="3" fill="#0000ff">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M10,10 L90,10 L50,90 Z" begin="2s" />
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;