"use client";
import React, { useEffect, useState } from 'react';

const AchievementsPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Sample achievements data
    const achievements = [
        {
            year: "2022",
            title: "Hackathon ",
            description: "Won a Hackathon in Nitte menakshi college."
        },
        {
            year: "2022",
            title: "Govt project participation",
            description: "Participated in govt project to reduce the ripening of tomatos using engineering solutions."
        },
        {
            year: "2022",
            title: "Won in Line following competition",
            description: "Partipated and Won in Liner Following Competition."
        },
        {
            year: "2023",
            title: "Participated in Delhi Mahakumbh tech Summit",
            description: "Participated in Delhi Mahakumbh tech Summit and had a chance to meet our PM."
        },
        {
            year: "2023",
            title: "Developed my own AI LLM Model",
            description: "Designed and Developed my own AI Model using LLama."
        },
        {
            year: "2023",
            title: "Startup",
            description: "Started my own startup on Droned and Robotics."
        }
    ];

    useEffect(() => {
        // Create particles background with improved variety
        const createParticles = () => {
            const particlesContainer = document.getElementById('particles-container');
            if (!particlesContainer) return;
            
            for (let i = 0; i < 80; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random position
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Random size with more variation
                const size = Math.random() * 8 + 1;
                
                // Random opacity
                const opacity = Math.random() * 0.6 + 0.1;
                
                // Random color (green, blue or purple variations)
                const colors = ['#00ff2a', '#00ffff', '#9d00ff'];
                const colorIndex = Math.floor(Math.random() * colors.length);
                
                // Apply styles
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.opacity = opacity;
                particle.style.backgroundColor = colors[colorIndex];
                
                // Random animation duration and delay
                const animDuration = Math.random() * 20 + 10;
                const animDelay = Math.random() * 5;
                particle.style.animation = `float ${animDuration}s ${animDelay}s infinite ease-in-out`;
                
                particlesContainer.appendChild(particle);
            }
        };

        // Enhanced scroll effect with smoother transitions
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;
            
            // Calculate scroll percentage with easing
            const scrollPercentage = Math.min(
                100,
                (scrollPosition / (documentHeight - windowHeight)) * 100
            );
            
            // Update timeline progress with smoother animation
            const timeline = document.getElementById('timeline-progress');
            if (timeline) {
                timeline.style.height = `${scrollPercentage}%`;
            }
            
            // Improved achievement visibility detection
            const achievementElements = document.querySelectorAll('.achievement-item');
            achievementElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < windowHeight * 0.75 && rect.bottom > 0;
                
                if (isVisible) {
                    setActiveIndex(index);
                    el.classList.add('visible');
                    
                    // Add staggered animation for child elements
                    const content = el.querySelector('.achievement-content');
                    const year = el.querySelector('.year');
                    const title = el.querySelector('h3');
                    const desc = el.querySelector('p');
                    
                    if (content && !content.classList.contains('animated')) {
                        content.classList.add('animated');
                        if (year) year.style.animationDelay = '0.2s';
                        if (title) title.style.animationDelay = '0.4s';
                        if (desc) desc.style.animationDelay = '0.6s';
                    }
                }
            });
        };

        createParticles();
        window.addEventListener('scroll', handleScroll);
        
        // Trigger initial check
        setTimeout(handleScroll, 100);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="achievements-page">
            <div id="particles-container" className="particles-container"></div>
            
            <div className="timeline-section-title">
                <h2>My Achievements</h2>
                <p>Scroll to explore my journey</p>
            </div>
            
            <div className="timeline-container">
                <div className="timeline">
                    <div className="timeline-track"></div>
                    <div className="timeline-progress" id="timeline-progress">
                        <div className="glow"></div>
                    </div>
                </div>
                
                <div className="achievements-container">
                    {achievements.map((achievement, index) => (
                        <div 
                            key={index}
                            className={`achievement-item ${index % 2 === 0 ? 'left' : 'right'} ${index <= activeIndex ? 'visible' : ''}`}
                        >
                            <div className="achievement-content">
                                <div className="year">{achievement.year}</div>
                                <h3>{achievement.title}</h3>
                                <p>{achievement.description}</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="footer">
                <h2 className="gradient-text">Looking forward to the next milestone</h2>
                <p>Contact me to discuss collaboration opportunities</p>
                <div className="orbital-animation">
                    <div className="orbit">
                        <div className="planet green"></div>
                    </div>
                    <div className="orbit middle">
                        <div className="planet red"></div>
                    </div>
                    <div className="orbit inner">
                        <div className="planet blue"></div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .achievements-page {
                    font-family: 'Inter', sans-serif;
                    color: #ffffff;
                    background-color: #000000;
                    min-height: 100vh;
                    padding: 0;
                    margin: 0;
                    overflow-x: hidden;
                    position: relative;
                }
                
                /* Enhanced particles background */
                .particles-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    pointer-events: none;
                }
                
                .particle {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(1px);
                    box-shadow: 0 0 10px currentColor;
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(45px, 30px) scale(1.1);
                    }
                    50% {
                        transform: translate(20px, 50px) scale(0.9);
                    }
                    75% {
                        transform: translate(-30px, 20px) scale(1.2);
                    }
                }
                
                /* Timeline Section with improved styling */
                .timeline-section-title {
                    text-align: center;
                    padding: 4rem 0 2rem;
                    position: relative;
                    z-index: 2;
                    animation: fadeIn 1s ease-out;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .timeline-section-title h2 {
                    font-size: 3rem;
                    margin-bottom: 0.5rem;
                    color: #ffffff;
                    background: linear-gradient(to right, #00ff2a, #00ffff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    letter-spacing: 1px;
                }
                
                .timeline-section-title p {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 1.2rem;
                }
                
                .timeline-container {
                    position: relative;
                    min-height: 180vh;
                    padding: 4rem 0;
                    z-index: 2;
                }
                
                /* Improved timeline styling */
                .timeline {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    transform: translateX(-50%);
                }
                
                .timeline-track {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                }
                
                .timeline-progress {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 0%;
                    background: linear-gradient(to bottom, #00ff2a, #00ffff);
                    border-radius: 4px;
                    transition: height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
                    z-index: 2;
                    box-shadow: 0 0 20px rgba(0, 255, 42, 0.8);
                }
                
                /* Enhanced glow effect */
                .glow {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 40px;
                    background: radial-gradient(circle at center, rgba(0, 255, 42, 0.9), rgba(0, 255, 42, 0));
                    border-radius: 50%;
                    transform: translateY(-50%);
                    filter: blur(10px);
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0% { opacity: 0.5; transform: translateY(-50%) scale(1); }
                    50% { opacity: 1; transform: translateY(-50%) scale(1.8); }
                    100% { opacity: 0.5; transform: translateY(-50%) scale(1); }
                }
                
                /* Improved timeline dots */
                .timeline-dot {
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    background-color: #000;
                    border: 4px solid #00ff2a;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 3;
                    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                    box-shadow: 0 0 20px rgba(0, 255, 42, 0.8);
                }
                
                .achievement-item.visible .timeline-dot {
                    transform: translate(-50%, -50%) scale(1.2);
                }
                
                .achievements-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                }
                
                /* Enhanced achievement item animations */
                .achievement-item {
                    position: relative;
                    margin: 150px 0;
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1), 
                                transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
                    filter: blur(5px);
                }
                
                .achievement-item.visible {
                    opacity: 1;
                    transform: translateY(0);
                    filter: blur(0);
                }
                
                .achievement-item.left {
                    padding-right: calc(50% + 40px);
                }
                
                .achievement-item.right {
                    padding-left: calc(50% + 40px);
                    text-align: left;
                }
                
                /* Improved content card with glass morphism */
                .achievement-content {
                    background: rgba(0, 0, 0, 0.6);
                    border: 1px solid rgba(0, 255, 42, 0.3);
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
                    position: relative;
                    transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
                    backdrop-filter: blur(10px);
                    overflow: hidden;
                }
                
                .achievement-content:before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at center, rgba(0, 255, 42, 0.1), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                }
                
                .achievement-content:hover {
                    transform: translateY(-10px) scale(1.03);
                    border-color: #00ff2a;
                    box-shadow: 0 15px 30px rgba(0, 255, 42, 0.3);
                }
                
                .achievement-content:hover:before {
                    opacity: 1;
                }
                
                /* Stylish year badge */
                .year {
                    display: inline-block;
                    padding: 0.4rem 1.2rem;
                    background: linear-gradient(135deg, #00ff2a, #00ffff);
                    color: black;
                    border-radius: 20px;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    box-shadow: 0 5px 15px rgba(0, 255, 42, 0.3);
                    animation: fadeSlideUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) both;
                    animation-play-state: paused;
                }
                
                .achievement-item.visible .year {
                    animation-play-state: running;
                }
                
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .achievement-item.left .timeline-dot {
                    left: calc(50% + 2px);
                }
                
                .achievement-item.right .timeline-dot {
                    left: calc(50% - 2px);
                }
                
                /* Animated content elements */
                .achievement-content h3 {
                    margin: 0.5rem 0;
                    color: #ffffff;
                    font-size: 1.5rem;
                    animation: fadeSlideUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) both;
                    animation-play-state: paused;
                }
                
                .achievement-content p {
                    color: rgba(255, 255, 255, 0.8);
                    margin: 0.5rem 0 0;
                    line-height: 1.6;
                    animation: fadeSlideUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) both;
                    animation-play-state: paused;
                }
                
                .achievement-item.visible h3,
                .achievement-item.visible p {
                    animation-play-state: running;
                }
                
                /* Enhanced footer with orbital animation */
                .footer {
                    padding: 6rem 2rem 4rem;
                    text-align: center;
                    position: relative;
                    z-index: 2;
                    overflow: hidden;
                }
                
                .gradient-text {
                    background: linear-gradient(to right, #00ff2a, #00ffff, #9d00ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                
                .orbital-animation {
                    position: relative;
                    width: 250px;
                    height: 250px;
                    margin: 4rem auto 0;
                    transform: perspective(1000px) rotateX(60deg);
                    transition: transform 1s ease;
                }
                
                .orbital-animation:hover {
                    transform: perspective(1000px) rotateX(40deg) scale(1.1);
                }
                
                /* Improved orbits with 3D effect */
                .orbit {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 200px;
                    height: 200px;
                    margin-top: -100px;
                    margin-left: -100px;
                    border: 2px solid rgba(0, 255, 42, 0.3);
                    border-radius: 50%;
                    animation: rotate3D 25s linear infinite;
                    box-shadow: 0 0 30px rgba(0, 255, 42, 0.1);
                }
                
                .orbit.middle {
                    width: 140px;
                    height: 140px;
                    margin-top: -70px;
                    margin-left: -70px;
                    animation: rotate3D 18s linear infinite reverse;
                    border-color: rgba(255, 0, 51, 0.3);
                    box-shadow: 0 0 30px rgba(255, 0, 51, 0.1);
                }
                
                .orbit.inner {
                    width: 80px;
                    height: 80px;
                    margin-top: -40px;
                    margin-left: -40px;
                    animation: rotate3D 12s linear infinite;
                    border-color: rgba(0, 119, 255, 0.3);
                    box-shadow: 0 0 30px rgba(0, 119, 255, 0.1);
                }
                
                @keyframes rotate3D {
                    0% { transform: rotateZ(0deg) rotateY(10deg); }
                    100% { transform: rotateZ(360deg) rotateY(10deg); }
                }
                
                /* Enhanced planets with trail effect */
                .planet {
                    position: absolute;
                    top: -8px;
                    left: 50%;
                    width: 16px;
                    height: 16px;
                    margin-left: -8px;
                    border-radius: 50%;
                }
                
                .planet:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    filter: blur(8px);
                    opacity: 0.7;
                    background: inherit;
                }
                
                .planet.green {
                    background-color: #00ff2a;
                    box-shadow: 0 0 20px rgba(0, 255, 42, 1);
                }
                
                .planet.red {
                    background-color: #ff0055;
                    box-shadow: 0 0 20px rgba(255, 0, 85, 1);
                }
                
                .planet.blue {
                    background-color: #00aaff;
                    box-shadow: 0 0 20px rgba(0, 170, 255, 1);
                }
                
                /* Media Queries */
                @media (max-width: 768px) {
                    .timeline-section-title h2 {
                        font-size: 2.2rem;
                    }
                    
                    .achievement-item.left, .achievement-item.right {
                        padding: 0 15px 0 calc(30px + 2rem);
                        text-align: left;
                    }
                    
                    .timeline {
                        left: 30px;
                        transform: none;
                    }
                    
                    .timeline-dot {
                        left: 30px;
                    }
                    
                    .achievement-content {
                        padding: 1.5rem;
                    }
                }
                
                /* Animation for child elements */
                .animated .year,
                .animated h3,
                .animated p {
                    animation-play-state: running !important;
                }
            `}</style>
        </div>
    );
};

export default AchievementsPage;