"use client";
import React, { useEffect, useState, useRef } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('skills');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const parallaxRef = useRef(null);
  
  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Matrix rain effect
  useEffect(() => {
    setIsLoaded(true);
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Setting canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Characters for matrix rain
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');
    
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    
    // Array to track where each column stops (y position)
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height;
    }
    
    let frameCount = 0;
    
    const draw = () => {
      frameCount++;
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Every 200 frames, create a wave effect
      if (frameCount % 200 === 0) {
        for (let i = 0; i < drops.length; i++) {
          if (Math.random() > 0.7) {
            drops[i] = 0;
          }
        }
      }
      
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Varying brightness for some characters
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#8f8';
          ctx.font = `${fontSize + 2}px monospace`;
        } else {
          ctx.fillStyle = '#0f0';
          ctx.font = `${fontSize}px monospace`;
        }
        
        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Sending the drop back to the top randomly after it crosses the screen
        // Adding randomness to the reset to make the drops scattered
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Incrementing Y coordinate
        drops[i] += Math.random() * 0.5 + 0.5;
      }
    };
    
    const interval = setInterval(draw, 35);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Sample data - customize with your own information
  const certifications = [
    { id: 1, name: "Cloud COmputing", issuer: "Infosys", year: 2023 },
    { id: 2, name: "Full Stack Web Development", issuer: "Udemy", year: 2023 },
    { id: 3, name: "React.js Advanced Concepts", issuer: "Simplilearn", year: 2023 },
    { id: 4, name: "Full Stack in Django", issuer: "Infosys", year: 2022 },
    { id: 5, name: "Advanced AIML concepts ", issuer: "Simplilearn", year: 2024 },
    { id: 6, name: "Advance Java", issuer: "Simplilearn", year: 2024 },
    { id: 7, name: "Python Pytorch", issuer: "Simplilearn", year: 2024 },
    { id: 8, name: "Power BI", issuer: "Simplilearn", year: 2024 },
    { id: 9, name: "DSA", issuer: "Simplilearn", year: 2025 },

  ];

  const skills = [
    { id: 1, name: "JavaScript", level: 70 },
    { id: 2, name: "React", level: 70 },
    { id: 3, name: "Node.js", level: 70 },
    { id: 4, name: "PostgreSQL", level: 75 },
    { id: 5, name: "AWS", level: 65 },
    { id: 6, name: "Python", level: 70 },
    { id: 7, name: "Django", level: 70 },
    { id: 8, name: "IOT", level: 80 },
    { id: 9, name: "Machine Learning", level: 65 },
    { id: 10, name: "Data Visualization", level: 70 },
  ];

  const projects = [
    { 
      id: 1, 
      title: "E-commerce Platform", 
      description: "Built a full-stack e-commerce solution with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "Express", "Postgresql", ]
    },
    { 
      id: 2, 
      title: "Task Management App", 
      description: "Created a Kanban-style project management app with drag-and-drop functionality.",
      technologies: ["React", , "Firebase", "Material UI"]
    },
    { 
      id: 3, 
      title: "AI Powered ChatBot", 
      description: "Developed a AI powered chatbot using LLama 3 with Language translations and Voice Output.",
      technologies: [ "FastAPi", "React", "Hugging Face"]
    },
    { 
      id: 4, 
      title: "Spotify Replica", 
      description: "Developed a replica of Spotify.",
      technologies: [ "FastAPi", "React", ]
    },
    { 
      id: 5, 
      title: "Pacman game ", 
      description: "Developed a game using python .",
      technologies: [ "Python"]
    },
    { 
      id: 6, 
      title: "Excel sheet analyzer", 
      description: "Developed a Excell data analyzer by integrating AI to it  .",
      technologies: [ "LLM Models , React"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Matrix rain background */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40" />
      
      {/* Parallax grid effect */}
      <div 
        ref={parallaxRef} 
        className="fixed inset-0 z-1 overflow-hidden pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 255, 0, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          transition: "transform 0.1s ease-out"
        }}
      />
      
      {/* Glowing orbs effect */}
      <div className="fixed inset-0 z-1 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: 'radial-gradient(circle, rgba(0,255,85,0.3) 0%, rgba(0,255,85,0) 70%)',
              transform: `translate(-50%, -50%) translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out, 
                          glow ${Math.random() * 5 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 z-1 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-green-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `floatParticle ${Math.random() * 20 + 10}s infinite linear, 
                          blinkParticle ${Math.random() * 5 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header with Typewriter Effect */}
        <header className="pt-8 pb-4 px-6 text-center relative">
          <div className="inline-block relative">
            <div className={`relative ${isLoaded ? 'animate-title-glitch' : ''}`} 
                 style={{transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`}}>
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 tracking-widest" 
                style={{ textShadow: '0 0 15px rgba(74, 222, 128, 0.5)' }}>
                Timeline
              </h1>
             
              <div className="absolute inset-0 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 tracking-widest opacity-0 animate-glitch-2" 
                   style={{left: '-2px', top: '-2px'}}>
                Timeline
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-green-400 to-transparent absolute -bottom-2 animate-pulse"></div>
          </div>
          <p className="text-xl text-green-300 mt-6 max-w-2xl mx-auto">
            <span className="typewriter"></span>
            <span className="block mt-2 animate-bounce-slow"> :)</span>
          </p>
          
          {/* Decorative terminal cursor */}
          <div className="h-6 w-3 bg-green-400 inline-block ml-1 mt-2 animate-blink opacity-0"></div>
        </header>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 my-8 perspective">
          {['skills', 'certifications', 'projects'].map((section, index) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 uppercase tracking-wider transition-all duration-500 relative overflow-hidden group transform rotate-hover`}
              style={{ 
                animation: `navAppear 0.5s ease-out ${0.2 + index * 0.1}s forwards`,
                opacity: 0,
                transform: 'translateY(20px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                activeSection === section 
                  ? 'text-black font-bold' 
                  : 'text-green-300 group-hover:text-green-100'
              }`}>
                {section}
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-green-400 scale-100' 
                  : 'bg-green-800/30 scale-0 group-hover:scale-100'
              }`} style={{ 
                transformOrigin: 'bottom', 
                borderRadius: '4px',
                boxShadow: activeSection === section ? '0 0 15px rgba(74, 222, 128, 0.5)' : 'none'
              }}></span>
              
              {/* Edge light effect */}
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto p-6 pb-20 min-h-screen/2">
          {/* Skills Section */}
          <section className={`transition-all duration-700 ${activeSection === 'skills' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 absolute pointer-events-none'}`}>
            <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center">
              <span className="inline-block w-8 h-8 mr-3 border-t-2 border-l-2 border-green-400 animate-spin-slow"></span>
              Technical Skills
              <span className="ml-3 text-sm font-normal text-green-300/70 animate-pulse">&lt;/&gt;</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.id} 
                  className="bg-black/40 backdrop-blur-sm border border-green-500/30 p-6 rounded-lg hover:border-green-400 transition-all duration-300 group transform-gpu"
                  style={{ 
                    animation: `skillAppear 0.5s ease-out ${0.2 + index * 0.1}s forwards`,
                    opacity: 0,
                    transform: 'translateY(20px)'
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg) scale3d(1.02, 1.02, 1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                  }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg text-green-300 group-hover:text-green-200 transition-colors">{skill.name}</span>
                    <span className="text-green-400 group-hover:scale-110 transition-transform animate-number">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full rounded-full relative"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, rgba(34,197,94,1) 0%, rgba(16,185,129,1) 100%)',
                        boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)',
                        animation: `growWidth 1.5s cubic-bezier(0.26, 0.86, 0.44, 0.98) ${0.3 + index * 0.2}s forwards`
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                        <div className="h-full w-[200%] animate-shimmer" style={{
                          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                        }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400/50 transform translate-x-px -translate-y-px"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400/50 transform -translate-x-px translate-y-px"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className={`transition-all duration-700 ${activeSection === 'certifications' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 absolute pointer-events-none'}`}>
            <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center">
              <span className="inline-block w-8 h-8 mr-3 border-t-2 border-l-2 border-green-400 animate-spin-slow"></span>
              Certifications
              <span className="ml-3 text-sm font-normal text-green-300/70 animate-pulse">[secure]</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="bg-black/40 backdrop-blur-sm border border-green-500/30 p-6 rounded-lg relative group overflow-hidden transform-gpu"
                  style={{ 
                    animation: `certAppear 0.5s ease-out ${0.3 + index * 0.15}s forwards`,
                    opacity: 0,
                    transform: 'translateX(-20px)'
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg) scale3d(1.02, 1.02, 1.02)`;
                    
                    // Move the glow effect to follow cursor
                    const glowElem = e.currentTarget.querySelector('.glow-effect');
                    if (glowElem) {
                      glowElem.style.background = `radial-gradient(circle at ${x * 100 + 50}% ${y * 100 + 50}%, rgba(74, 222, 128, 0.4) 0%, rgba(0, 0, 0, 0) 70%)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                  }}
                >
                  {/* Background glow effect that follows cursor */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-effect"></div>
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 opacity-5" 
                         style={{
                           backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                         }}>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-green-300 group-hover:text-green-200 transition-colors flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      {cert.name}
                    </h3>
                    <div className="flex justify-between mt-3">
                      <span className="text-green-200/70">{cert.issuer}</span>
                      <span className="bg-green-900/50 text-green-400 px-3 py-1 rounded-md text-sm font-medium animate-badge">{cert.year}</span>
                    </div>
                  </div>
                  
                  {/* Digital circuit pattern in corners */}
                  <svg className="absolute top-0 right-0 w-12 h-12 text-green-500/30" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20,12V8H4V12H8V16H4V20H20V16H16V12H20M16,16H12V12H16V16Z" />
                  </svg>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className={`transition-all duration-700 ${activeSection === 'projects' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 absolute pointer-events-none'}`}>
            <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center">
              <span className="inline-block w-8 h-8 mr-3 border-t-2 border-l-2 border-green-400 animate-spin-slow"></span>
              Projects
              <span className="ml-3 text-sm font-normal text-green-300/70 animate-pulse">{'{code}'}</span>
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="bg-black/40 backdrop-blur-sm border border-green-500/30 p-8 rounded-lg relative overflow-hidden group transform-gpu"
                  style={{ 
                    animation: `projectAppear 0.6s cubic-bezier(0.21, 0.67, 0.58, 1) ${0.3 + index * 0.2}s forwards`,
                    opacity: 0,
                    transform: 'translateY(30px)'
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * 2}deg) rotateY(${x * 2}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                  }}
                >
                  {/* Background scanning line effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-green-400/50 animate-scan-down"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                      <h3 className="text-2xl font-bold text-green-300 group-hover:text-green-200 transition-colors transform group-hover:translate-x-1 duration-300">
                        <span className="typing-cursor">{project.title}</span>
                      </h3>
                    </div>
                    
                    <p className="text-green-100/80 mb-5 pl-6 border-l border-green-500/30 group-hover:border-green-500/50 transition-colors transform group-hover:translate-x-1 duration-500">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-green-900/30 text-green-300 px-4 py-1 rounded-full text-sm transition-all duration-300 hover:bg-green-900/60 group-hover:animate-float-tag"
                          style={{
                            animationDelay: `${i * 0.1}s`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Binary code background effect */}
                  <div className="absolute bottom-0 right-0 text-xs text-green-500/10 font-mono leading-none">
                    10110010<br/>01001101<br/>11010010<br/>01100110
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translate3d(0, 0, 0);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }
        
        .typing-cursor::after {
          content: '|';
          animation: cursor 1s infinite step-end;
        }
        
        .typewriter {
          overflow: hidden;
          display: inline-block;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end) 1s forwards;
          width: 0;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes growWidth {
          from { width: 0; }
          to { width: var(--final-width); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, -60%); }
        }
        
        @keyframes glow {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          60% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(50%); }
        }
        
        @keyframes navAppear {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes skillAppear {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes certAppear {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes projectAppear {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes animate-title-glitch {
          0% { 
            opacity: 0;
            transform: scale(0.8);
          }
          70% {
            transform: scale(1.05);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-title-glitch {
          animation: animate-title-glitch 1.2s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
        }
        
        @keyframes glitch-1 {
          0% { opacity: 0; }
          7% { opacity:1; }
          0; }
          10% { opacity: 1; }
          15% { opacity: 0; }
          20% { opacity: 1; }
          25% { opacity: 0; }
          30% { opacity: 1; }
          35% { opacity: 0; }
          40% { opacity: 1; }
          45% { opacity: 0; }
          50% { opacity: 1; }
          55% { opacity: 0; }
          60% { opacity: 1; }
          65% { opacity: 0; }
          70% { opacity: 1; }
          75% { opacity: 0; }
          80% { opacity: 1; }
          85% { opacity: 0; }
          90% { opacity: 1; }
          95% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes glitch-2 {
          0% { opacity: 0; }
          5% { opacity: 1; }
          10% { opacity: 0; }
          15% { opacity: 1; }
          20% { opacity: 0; }
          25% { opacity: 1; }
          30% { opacity: 0; }
          35% { opacity: 1; }
          40% { opacity: 0; }
          45% { opacity: 1; }
          50% { opacity: 0; }
          55% { opacity: 1; }
          60% { opacity: 0; }
          65% { opacity: 1; }
          70% { opacity: 0; }
          75% { opacity: 1; }
          80% { opacity: 0; }
          85% { opacity: 1; }
          90% { opacity: 0; }
          95% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .animate-glitch-1 {
          animation: glitch-1 1.5s infinite;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 1.5s infinite;
        }
        
        @keyframes floatParticle {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100vh); }
        }
        
        @keyframes blinkParticle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes scan-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes float-tag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes rotate-hover {
          0% { transform: rotateY(0); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes number {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes badge {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;