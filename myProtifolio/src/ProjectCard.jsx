import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export const ProjectCard = ({ title, description, tags, github, live, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for mouse coordinates (glow) and card rotations (3D tilt)
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Springs for smooth responsive movement (Professional, weighted feel)
  const springConfig = { stiffness: 100, damping: 22 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    x.set(mouseX);
    y.set(mouseY);

    // Calculate rotation limits (-6deg to 6deg) for a professional subtle feel
    const rotX = -((mouseY - height / 2) / (height / 2)) * 6;
    const rotY = ((mouseX - width / 2) / (width / 2)) * 6;

    rotateX.set(rotX);
    rotateY.set(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    // Put glow off-screen
    x.set(-500);
    y.set(-500);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatTransition = {
    y: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 3 + Math.random(),
      ease: 'easeInOut',
    }
  };

  const glowBg = useMotionTemplate`radial-gradient(circle 220px at ${x}px ${y}px, rgba(6, 182, 212, 0.25), rgba(139, 92, 246, 0.05), transparent)`;

  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        variants={cardVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ 
          scale: 1.05,
          z: 30,
        }}
        className="relative flex flex-col justify-between h-full p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-xl overflow-hidden transition-all duration-300 group cursor-pointer"
      >
        {/* Glow Border effect */}
        <div className="absolute -inset-px bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm pointer-events-none" />
        
        {/* Reactive Radial Glow following mouse pointer */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: glowBg }}
        />

        {/* Floating wrapper that centers when hovered */}
        <motion.div
          animate={isHovered ? { y: 0 } : { y: [-8, 8] }}
          transition={isHovered ? { type: 'spring', stiffness: 100, damping: 15 } : floatTransition}
          style={{ transformStyle: "preserve-3d" }}
          className="flex flex-col h-full z-10"
        >
          {/* Card Image Wrapper with 3D Pop Out */}
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="relative w-full h-44 mb-5 rounded-xl overflow-hidden bg-slate-900/40 border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:border-cyan-500/30"
          >
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-cyan-500/20 flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/15 transition-all duration-500" />
                <svg className="w-12 h-12 text-white/30 group-hover:text-cyan-400/50 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            )}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-sm border border-white/10 text-cyan-300 tracking-wide">
              Project
            </div>
          </div>

          {/* Title with 3D Pop Out */}
          <h3 
            style={{ transform: "translateZ(45px)" }}
            className="text-xl font-bold mb-2.5 tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300"
          >
            {title}
          </h3>
          
          {/* Description */}
          <p 
            style={{ transform: "translateZ(20px)" }}
            className="text-slate-300 text-sm mb-5 flex-grow leading-relaxed"
          >
            {description}
          </p>

          {/* Tags */}
          <div 
            style={{ transform: "translateZ(25px)" }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium group-hover:border-cyan-500/20 group-hover:text-cyan-300 transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>

          {/* Links with 3D Pop Out */}
          <div 
            style={{ transform: "translateZ(35px)" }}
            className="flex items-center gap-4 mt-auto"
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
