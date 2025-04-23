"use client";
import React from 'react';

const Aboutus = () => {
  return (
    <div className="aboutus-container w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
      >
        {/* Dynamic background with noise texture */}
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" seed="5" stitchTiles="stitch" result="noise"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" result="coloredNoise"/>
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="noisyImage"/>
          </filter>
          
          <linearGradient id="gradientBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#001800">
              <animate attributeName="stopColor" values="#001800; #002500; #001800" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#003300">
              <animate attributeName="stopColor" values="#003300; #004000; #003300" dur="10s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <clipPath id="textClip">
            <text x="50%" y="180" fontFamily="Arial, sans-serif" fontSize="80" fontWeight="900" textAnchor="middle">ABOUT ME</text>
          </clipPath>
          
          <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#00ff00" strokeWidth="1"/>
          </pattern>
          
          <filter id="displacementFilter">
            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="3" result="turbulence" seed="2">
              <animate attributeName="baseFrequency" values="0.01;0.02;0.01" dur="10s" repeatCount="indefinite"/>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
        
        {/* Base background with animated gradient */}
        <rect width="800" height="400" fill="url(#gradientBg)"/>
        
        {/* Animated grid pattern */}
        <g transform="translate(0,0)">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="-20 -20" dur="8s" repeatCount="indefinite"/>
          <path d="M0 0 L800 0 L800 400 L0 400 Z" fill="none" stroke="#00ff00" strokeWidth="0.5" strokeOpacity="0.1"/>
          {/* Grid lines x-axis */}
          {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750].map((x, i) => (
            <path key={`x-${i}`} d={`M${x} 0 L${x} 400`} stroke="#00ff00" strokeWidth="0.5" strokeOpacity="0.1"/>
          ))}
          
          {/* Grid lines y-axis */}
          {[50, 100, 150, 200, 250, 300, 350].map((y, i) => (
            <path key={`y-${i}`} d={`M0 ${y} L800 ${y}`} stroke="#00ff00" strokeWidth="0.5" strokeOpacity="0.1"/>
          ))}
        </g>
        
        {/* Responsive text with RGB channels effect - centered with textAnchor */}
        <g className="main-text">
          {/* Red channel with offset */}
          <text x="50%" y="180" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="900" fill="#ff0000" fillOpacity="0.5" style={{mixBlendMode: 'screen'}} textAnchor="middle">
            ABOUT ME
            <animate attributeName="x" values="49.5%;50.5%;49.5%" dur="2s" repeatCount="indefinite"/>
          </text>
          
          {/* Green channel - static */}
          <text x="50%" y="180" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="900" fill="#00ff00" fillOpacity="0.8" style={{mixBlendMode: 'screen'}} textAnchor="middle">
            ABOUT ME
          </text>
          
          {/* Blue channel with offset */}
          <text x="50%" y="180" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="900" fill="#0000ff" fillOpacity="0.5" style={{mixBlendMode: 'screen'}} textAnchor="middle">
            ABOUT ME
            <animate attributeName="x" values="50.5%;49.5%;50.5%" dur="2s" repeatCount="indefinite"/>
          </text>
          
          {/* Glitch effect */}
          <g>
            <animate attributeName="opacity" values="0;0;1;0" dur="3s" begin="1s" repeatCount="indefinite"/>
            <text x="50%" y="180" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="900" fill="#ffffff" textAnchor="middle">
              ABOUT ME
            </text>
          </g>
        </g>
        
        {/* Masked text with pattern */}
        <g clipPath="url(#textClip)" opacity="0.3">
          <rect x="0" y="0" width="800" height="400" fill="url(#diagonalLines)">
            <animate attributeName="y" values="0;-20;0" dur="3s" repeatCount="indefinite"/>
          </rect>
        </g>
        
        {/* Dynamic data visualization lines - centered with adjustments for mobile */}
        <g transform="translate(400, 220)" textAnchor="middle">
          <g transform="translate(-250, 0)">
            <path d="M0 0 Q 50 -30, 100 0 T 200 0 T 300 0 T 400 0 T 500 0" stroke="#00ff00" strokeWidth="2" fill="none">
              <animate 
                attributeName="d" 
                values="M0 0 Q 50 -30, 100 0 T 200 0 T 300 0 T 400 0 T 500 0;
                      M0 0 Q 50 30, 100 0 T 200 0 T 300 0 T 400 0 T 500 0;
                      M0 0 Q 50 -30, 100 0 T 200 0 T 300 0 T 400 0 T 500 0" 
                dur="4s" 
                repeatCount="indefinite"
              />
            </path>
            <path d="M0 10 Q 50 -20, 100 10 T 200 10 T 300 10 T 400 10 T 500 10" stroke="#00ff00" strokeWidth="1.5" fill="none" strokeOpacity="0.7">
              <animate 
                attributeName="d" 
                values="M0 10 Q 50 -20, 100 10 T 200 10 T 300 10 T 400 10 T 500 10;
                      M0 10 Q 50 40, 100 10 T 200 10 T 300 10 T 400 10 T 500 10;
                      M0 10 Q 50 -20, 100 10 T 200 10 T 300 10 T 400 10 T 500 10" 
                dur="3s" 
                repeatCount="indefinite"
              />
            </path>
            <path d="M0 20 Q 50 -10, 100 20 T 200 20 T 300 20 T 400 20 T 500 20" stroke="#00ff00" strokeWidth="1" fill="none" strokeOpacity="0.4">
              <animate 
                attributeName="d" 
                values="M0 20 Q 50 -10, 100 20 T 200 20 T 300 20 T 400 20 T 500 20;
                      M0 20 Q 50 50, 100 20 T 200 20 T 300 20 T 400 20 T 500 20;
                      M0 20 Q 50 -10, 100 20 T 200 20 T 300 20 T 400 20 T 500 20" 
                dur="5s" 
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
        
        {/* Intro text - centered with textAnchor */}
        <text x="50%" y="260" fontFamily="monospace" fontSize="16" fill="#ffffff" textAnchor="middle">
          <tspan id="typingText">Hello, this is Anubhav, a Full Stack Dev</tspan>
          <animate attributeName="textLength" from="0" to="280" dur="3s" begin="0.5s" fill="freeze"/>
        </text>
        
        {/* Tagline - centered with textAnchor */}
        <text x="50%" y="290" fontFamily="monospace" fontSize="16" fill="#ffffff" textAnchor="middle">
          Let's do some cool things :)
          <animate attributeName="opacity" values="1;0.7;1" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="y" values="290;292;290" dur="0.2s" begin="2s;4s;6s" repeatCount="3"/>
        </text>
        
        {/* "whoami" - Better positioned for responsive layout */}
        <g transform="translate(400, 340)" textAnchor="middle">
          <text fontFamily="cursive" fontSize="40" fill="#ffffff" filter="url(#displacementFilter)">
            whoami
          </text>
          
          {/* Particle effect around whoami */}
          <g>
            <circle cx="0" cy="0" r="2" fill="#00ff00">
              <animate attributeName="cx" values="0;50;0" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="0;-20;0" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="0" r="1" fill="#00ff00">
              <animate attributeName="cx" values="50;100;50" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="0;-10;0" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="0" r="1.5" fill="#00ff00">
              <animate attributeName="cx" values="100;150;100" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="0;-30;0" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="0" r="1" fill="#00ff00">
              <animate attributeName="cx" values="0;30;0" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="0;20;0" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;0.6;0" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="0" r="2" fill="#00ff00">
              <animate attributeName="cx" values="50;80;50" dur="4.5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="0;15;0" dur="4.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;0.9;0" dur="4.5s" repeatCount="indefinite"/>
            </circle>
          </g>
        </g>
        
        {/* Interactive cursor follower */}
        <circle cx="400" cy="200" r="5" fill="#00ff00" fillOpacity="0.6">
          <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="400;450;400;350;400" dur="15s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="200;150;250;220;200" dur="15s" repeatCount="indefinite"/>
        </circle>
        
        {/* Particles */}
        <g>
          <circle cx="100" cy="100" r="1" fill="#00ff00" opacity="0.3">
            <animate attributeName="cy" values="100;90;100" dur="7s" repeatCount="indefinite"/>
          </circle>
          <circle cx="200" cy="50" r="1" fill="#00ff00" opacity="0.3">
            <animate attributeName="cy" values="50;40;50" dur="9s" repeatCount="indefinite"/>
          </circle>
          <circle cx="300" cy="150" r="1" fill="#00ff00" opacity="0.3">
            <animate attributeName="cy" values="150;160;150" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="500" cy="200" r="1" fill="#00ff00" opacity="0.3">
            <animate attributeName="cy" values="200;190;200" dur="6s" repeatCount="indefinite"/>
          </circle>
          <circle cx="650" cy="100" r="1" fill="#00ff00" opacity="0.3">
            <animate attributeName="cy" values="100;110;100" dur="10s" repeatCount="indefinite"/>
          </circle>
          <circle cx="750" cy="300" r="1" fill="#00ff00" opacity="0.3">
            <animate attributeName="cy" values="300;290;300" dur="8s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
      
      {/* CSS for responsive design */}
      <style jsx>{`
        @media (max-width: 768px) {
          :global(.main-text text) {
            font-size: 40px;
          }
          :global(#textClip text) {
            font-size: 40px;
          }
        }
        
        @media (max-width: 480px) {
          :global(.main-text text) {
            font-size: 30px;
          }
          :global(#textClip text) {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Aboutus;