import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin,
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code, 
  Sparkles, 
  ChevronRight,
  Database,
  Terminal,
  Heart,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import profileImg from './assets/profile.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderStep, setLoaderStep] = useState(0);

  // Modal State for Certifications
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (img, title) => {
    setModalImg(img);
    setModalTitle(title);
    setModalOpen(true);
  };

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Cinematic loader steps
    const timer1 = setTimeout(() => setLoaderStep(1), 1000);
    const timer2 = setTimeout(() => setLoaderStep(2), 2000);
    const timer3 = setTimeout(() => setLoading(false), 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const resumeData = {
    name: "Mohan Venkat Dulapalli",
    phone: "+91 9030669229",
    email: "mohanvenkatdulapalli@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohanvenkatdulapalli?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    githubProfile: "https://github.com/mohanvenkat1",
    objective: "An enthusiastic and analytical B.Tech student (Computer Science and Engineering) with skills in Java, Python, and web development. Seeking internships/co-op opportunities to enhance technical expertise and expand professional networks.",
    education: [
      {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Vishnu Institute of Technology",
        location: "Bhimavaram, AP, India",
        duration: "Expected 2027",
        details: "CGPA: 8.910/10"
      },
      {
        degree: "Intermediate (MPC)",
        institution: "Sasi Junior College",
        location: "Tadepalligudem, AP, India",
        duration: "2021 – 2023",
        details: "Percentage: 95.8%"
      }
    ],
    experience: [
      {
        role: "Full Stack Development Intern (MERN)",
        company: "SmartBridge Educational Services Pvt. Ltd. | APSCHE",
        duration: "Oct 2025 – Mar 2026",
        responsibilities: [
          "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js.",
          "Built and integrated REST APIs and gained experience in frontend-backend integration and deployment."
        ]
      },
      {
        role: "AI-ML Virtual Intern",
        company: "EduSkills & AICTE | AWS Academy",
        duration: "Apr 2025 – Jun 2025",
        responsibilities: [
          "Completed a 10-week internship building and evaluating supervised and unsupervised models.",
          "Utilized AWS SageMaker, Lambda, and Jupyter Notebooks to develop and deploy cloud-based solutions."
        ]
      }
    ],
    projects: [
      {
        title: "NewsTech - AI News Platform",
        description: "A real-time tech news aggregation platform featuring secure user authentication, article saving, and custom categorization. Developed to deliver seamless global tech updates with responsive UI navigation.",
        tags: ["HTML", "CSS", "JavaScript", "APIs", "NewsAPI"],
        github: "https://github.com/mohanvenkat1/-NewsTech-401-GroupProject",
        live: "https://newstech-401-groupproject-8.onrender.com/index.html"
      },
      {
        title: "MERN Stack Portfolio",
        description: "A premium glassmorphic personal showcase website built with Framer Motion animations, custom dark theme, and interactive contact forms.",
        tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        github: "https://github.com/mohanvenkat1",
        live: "#"
      },
      {
        title: "AWS Cloud Model Deployer",
        description: "A lightweight cloud-native utility to automate AWS SageMaker and Lambda deployments of machine learning models for low-latency inferencing.",
        tags: ["AWS Lambda", "SageMaker", "Python", "Boto3"],
        github: "https://github.com/mohanvenkat1",
        live: "#"
      }
    ],
    skills: {
      languages: ["C", "Python", "Java"],
      web: ["HTML", "CSS", "JavaScript"],
      tools: ["Git/Github", "Google Colab", "VS Code", "Kaggle"],
      coursework: ["Data Structures", "Operating Systems (Windows, Unix/Linux)", "OOP", "DBMS"],
      databases: ["SQL", "MongoDB"],
      productivity: ["MS Excel", "MS Word", "MS PowerPoint", "Google Sheets", "Google Docs"]
    },
    certifications: [
      { name: "Salesforce Certified Agentforce Specialist", image: "cert-salesforce-agentforce.png" },
      { name: "AWS Academy Graduate – AI/ML", image: "cert-aws-internship.png" },
      { name: "Prompt Design in Vertex AI (Google)" },
      { name: "Kaggle – Data Visualization", image: "cert-kaggle-datavis.png" },
      { name: "GenAI Powered Data Analytics (Tata | Forage)", image: "cert-tata-forage.png" },
      { name: "Google Student Ambassador Program", image: "cert-google-ambassador.png" },
      { name: "NPTEL – The Joy of Computing Using Python" },
      { name: "Programming in C" },
      { name: "Programming in Java" },
      { name: "MongoDB Developer’s Toolkit (GeeksforGeeks)", image: "cert-mongodb-gfg.png" },
      { name: "IBM SkillsBuild – AI Literacy" },
      { name: "Mpower COPE - Mental Health Awareness", image: "cert-mpower.png" }
    ],
    activities: [
      {
        title: "SIH 2024",
        desc: "Team-based real-world problem solving."
      },
      {
        title: "GDG Hackathon",
        desc: "Top 10 among 70 teams."
      },
      {
        title: "Docathon 2024",
        desc: "Research and publication-focused hackathon.",
        image: "cert-docathon.png"
      },
      {
        title: "Student Co-Champ, Vishnu Student Success Center",
        desc: "Organized technical and cultural events.",
        image: "cert-cochamp.png"
      },
      {
        title: "ISTE Member (2025–2028)",
        desc: "Technical Mentor, guided 40+ teams in hackathon.",
        image: "cert-iste.png"
      },
      {
        title: "Google Student Ambassador",
        desc: "Promoted tech initiative.",
        image: "cert-google-ambassador.png"
      }
    ]
  };

  // Stagger variants for content reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { type: 'spring', stiffness: 90, damping: 18 }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-hidden font-sans select-none">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 origin-left z-50 shadow-md shadow-cyan-500/20"
        style={{ scaleX }}
      />

      {/* Cinematic Loader Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-[#030712] z-50 flex flex-col items-center justify-center text-center px-4 overflow-hidden"
            exit={{ 
              opacity: 0,
              scale: 1.05,
              filter: "blur(20px)",
              transition: { ease: [0.76, 0, 0.24, 1], duration: 0.9 } 
            }}
          >
            {/* Ambient background glows */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 90, 0]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.15, 0.1],
                rotate: [0, -90, 0]
              }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" 
            />
            
            {/* Pulsing Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />

            <div className="relative z-10 flex flex-col items-center gap-10">
              
              {/* Spinning Tech HUD SVG */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                  className="absolute w-full h-full text-cyan-500/20" 
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="30 15 5 15 10 5" fill="none" />
                </motion.svg>
                <motion.svg 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
                  className="absolute w-[80%] h-[80%] text-purple-500/30" 
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="20 40 10 10" fill="none" strokeLinecap="round" />
                </motion.svg>
                <motion.div 
                  animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 z-10 text-sm font-mono"
                >
                  M
                </motion.div>
              </div>

              {/* Progress and status reports */}
              <div className="h-28 flex flex-col items-center justify-center font-mono text-xs md:text-sm text-slate-400 tracking-wider">
                <AnimatePresence mode="wait">
                  {loaderStep === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-1"
                    >
                      <p className="text-cyan-400/90">&gt; INITIALIZING PROTOCOL...</p>
                      <p className="text-slate-500">Establishing secure handshake</p>
                    </motion.div>
                  )}
                  {loaderStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-1"
                    >
                      <p className="text-purple-400/90">&gt; CONNECTIONS ESTABLISHED</p>
                      <p className="text-slate-300 font-semibold tracking-[0.2em] uppercase">WELCOME</p>
                    </motion.div>
                  )}
                  {loaderStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      <div className="relative overflow-hidden py-1 px-4">
                        {/* Staggered Name Reveal */}
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent uppercase select-none">
                          {"Mohan Venkat".split("").map((char, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
                            >
                              {char}
                            </motion.span>
                          ))}
                        </h1>
                        {/* Laser/Sweep line overlay */}
                        <motion.div 
                          initial={{ left: "-100%" }}
                          animate={{ left: "100%" }}
                          transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                          className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-12"
                        />
                      </div>
                      <p className="text-xs md:text-sm tracking-[0.4em] text-slate-400 font-mono uppercase">
                        COMPUTER SCIENCE & ENGINEERING
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Glowing progress line at the bottom */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-56 h-[2px] bg-white/5 overflow-hidden rounded-full">
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="absolute w-24 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glow Orbs */}
      <div className="glow-orb glow-orb-primary" />
      <div className="glow-orb glow-orb-secondary" />
      <div className="glow-orb glow-orb-tertiary" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#030712]/75 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              M
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Mohan Venkat
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors duration-200">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors duration-200">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors duration-200">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors duration-200">Education</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href={resumeData.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/u/MOHAN_VENKAT_1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="LeetCode Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.39 1.39 0 0 0-.961.438L7.116 6.226a1.39 1.39 0 0 0-.44 1.012c0 .375.156.733.44 1.012l5.41 5.42a1.39 1.39 0 0 0 1.97 0L19.92 8.25a1.39 1.39 0 0 0 0-1.97L14.5 1.1a1.39 1.39 0 0 0-1.017-.438zM6.226 7.116a1.39 1.39 0 0 0-1.012.44L.438 12.966a1.39 1.39 0 0 0 0 1.97l5.42 5.41a1.39 1.39 0 0 0 1.97 0l5.42-5.41a1.39 1.39 0 0 0 0-1.97l-5.42-5.42a1.39 1.39 0 0 0-1.012-.441zm11.548 11.548a1.39 1.39 0 0 0-1.012.44l-5.42 5.41a1.39 1.39 0 0 0 0 1.97l5.42 5.42a1.39 1.39 0 0 0 1.97 0l5.42-5.42a1.39 1.39 0 0 0 0-1.97l-5.42-5.41a1.39 1.39 0 0 0-1.012-.441z"/></svg>
            </a>
            <a 
              href="https://www.codechef.com/users/mohan_venkat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="CodeChef Profile"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 18H18V12H6V18Z"/><path d="M12 2C8.5 2 6 4.5 6 8C6 9.5 7 11 8.5 12H15.5C17 11 18 9.5 18 8C18 4.5 15.5 2 12 2Z"/><path d="M3 22H21"/></svg>
            </a>
            <a 
              href={`mailto:${resumeData.email}`}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-sm font-semibold transition-all duration-300 hover:border-cyan-500/30"
            >
              Say Hello
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 relative z-10 space-y-32">
        
        {/* Hero Section */}
        <section id="about" className="pt-8 md:pt-16">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Intro Text reveal */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={!loading ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.2 }}
              className="md:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Available for Internships
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hey, I'm <br />
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  {resumeData.name}
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                {resumeData.objective}
              </p>

              {/* Contact Quick Links */}
              <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-300">
                <a href={`mailto:${resumeData.email}`} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  {resumeData.email}
                </a>
                <a href={`tel:${resumeData.phone}`} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  {resumeData.phone}
                </a>
                <a href="https://leetcode.com/u/MOHAN_VENKAT_1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.39 1.39 0 0 0-.961.438L7.116 6.226a1.39 1.39 0 0 0-.44 1.012c0 .375.156.733.44 1.012l5.41 5.42a1.39 1.39 0 0 0 1.97 0L19.92 8.25a1.39 1.39 0 0 0 0-1.97L14.5 1.1a1.39 1.39 0 0 0-1.017-.438zM6.226 7.116a1.39 1.39 0 0 0-1.012.44L.438 12.966a1.39 1.39 0 0 0 0 1.97l5.42 5.41a1.39 1.39 0 0 0 1.97 0l5.42-5.41a1.39 1.39 0 0 0 0-1.97l-5.42-5.42a1.39 1.39 0 0 0-1.012-.441zm11.548 11.548a1.39 1.39 0 0 0-1.012.44l-5.42 5.41a1.39 1.39 0 0 0 0 1.97l5.42 5.42a1.39 1.39 0 0 0 1.97 0l5.42-5.42a1.39 1.39 0 0 0 0-1.97l-5.42-5.41a1.39 1.39 0 0 0-1.012-.441z"/></svg>
                  LeetCode
                </a>
                <a href="https://www.codechef.com/users/mohan_venkat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 18H18V12H6V18Z"/><path d="M12 2C8.5 2 6 4.5 6 8C6 9.5 7 11 8.5 12H15.5C17 11 18 9.5 18 8C18 4.5 15.5 2 12 2Z"/><path d="M3 22H21"/></svg>
                  CodeChef
                </a>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
                  View My Projects
                </a>
                <a href={resumeData.githubProfile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 font-semibold transition-all duration-300">
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* Profile Photo Display */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
              animate={!loading ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.4 }}
              className="md:col-span-5 flex justify-center relative group"
            >
              {/* Outer halo glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-[32px] blur-xl opacity-20 group-hover:opacity-50 transition-all duration-500" />
              
              <motion.div 
                animate={{ y: [-12, 12] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3.5,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-[430px] rounded-[28px] border border-white/20 bg-white/5 backdrop-blur-md p-6 shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Internal Glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative flex flex-col items-center text-center space-y-4">
                  {/* Styled Profile Image Frame */}
                  <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl group/avatar transition-transform duration-500 group-hover/avatar:scale-[1.03]">
                    <img 
                      src={profileImg} 
                      alt={resumeData.name} 
                      className="w-full h-full object-cover object-top scale-105 group-hover/avatar:scale-100 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white tracking-wide">{resumeData.name}</h3>
                    <p className="text-xs text-cyan-300 font-semibold tracking-wider uppercase">B.Tech CSE Student</p>
                  </div>
                  
                  {/* Floating Mini badges for academic/stats */}
                  <div className="flex gap-2.5 flex-wrap justify-center text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium">CGPA: 8.910</span>
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium font-mono">Class of 2027</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  <span>VIT BHIMAVARAM</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[9px] text-cyan-400 font-semibold">Active</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Hover over a card to pause the floating animation and zoom in. Each card is rendered with smooth spring physics.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {resumeData.projects.map((project, idx) => (
              <ProjectCard 
                key={idx}
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                live={project.live}
              />
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Bridging academic concepts with industrial and cloud-native practices.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {resumeData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                      {exp.role}
                    </h3>
                    <p className="text-sm text-cyan-300/80 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>
                
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex gap-2 items-start leading-relaxed">
                      <ChevronRight className="w-4.5 h-4.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Skills & Tech Stack
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Comprehensive list of my academic coursework, programming skills, databases, and developer environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Programming Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-4"
            >
              <h3 className="font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.languages.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Web Technologies */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-4"
            >
              <h3 className="font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400" />
                Web Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.web.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-4"
            >
              <h3 className="font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-pink-400" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.databases.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Developer Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.15 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-4"
            >
              <h3 className="font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Developer Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Academic Coursework */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-4"
            >
              <h3 className="font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                Academic Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.coursework.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Productivity Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.25 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-4"
            >
              <h3 className="font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                Productivity Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.productivity.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Certifications & Hackathons */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Certifications */}
          <section id="certifications" className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Award className="w-6 h-6 text-yellow-400" />
              Certifications
            </h2>
            <div className="space-y-3">
              {resumeData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-200 group/cert ${cert.image ? 'cursor-pointer hover:border-cyan-500/20' : ''}`}
                  onClick={() => cert.image && openModal(cert.image, cert.name)}
                >
                  <Award className={`w-4 h-4 shrink-0 transition-colors duration-200 ${cert.image ? 'text-cyan-400 group-hover/cert:text-cyan-300' : 'text-slate-400'}`} />
                  <span className={`text-sm font-medium transition-colors duration-200 ${cert.image ? 'text-slate-200 group-hover/cert:text-cyan-300' : 'text-slate-300'}`}>
                    {cert.name}
                  </span>
                  {cert.image && (
                    <span className="ml-auto text-xs text-cyan-400/50 group-hover/cert:text-cyan-400 transition-colors duration-200 font-mono">
                      View Cert 👁️
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Extracurriculars & Hackathons */}
          <section id="activities" className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-purple-400" />
              Hackathons & Leadership
            </h2>
            <div className="space-y-4">
              {resumeData.activities.map((act, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-4 rounded-xl border border-white/5 bg-white/5 hover:border-purple-500/20 transition-all duration-300 group/act ${act.image ? 'cursor-pointer hover:border-purple-500/30' : ''}`}
                  onClick={() => act.image && openModal(act.image, act.title)}
                >
                  <h4 className={`text-sm font-bold mb-1.5 flex items-center gap-2 transition-colors duration-200 ${act.image ? 'text-slate-100 group-hover/act:text-purple-300' : 'text-white'}`}>
                    <Cpu className={`w-4 h-4 transition-colors duration-200 ${act.image ? 'text-purple-400 group-hover/act:text-purple-300' : 'text-slate-400'}`} />
                    {act.title}
                    {act.image && (
                      <span className="ml-auto text-[10px] font-normal text-purple-400/40 group-hover/act:text-purple-400 transition-colors duration-200 font-mono uppercase tracking-wider">
                        Verify 👁️
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">{act.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Education Section */}
        <section id="education" className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Education
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              My academic timeline and benchmarks.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {resumeData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md flex flex-col sm:flex-row justify-between gap-4"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium pl-7">{edu.institution} | <span className="text-slate-400">{edu.location}</span></p>
                  <p className="text-xs text-cyan-400 font-semibold pl-7">{edu.details}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5 h-fit w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#030712] py-8 mt-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Mohan Venkat Dulapalli</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <a href={`mailto:${resumeData.email}`} className="hover:text-white transition-colors duration-200">Email</a>
            <a href={resumeData.githubProfile} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">GitHub</a>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
          </div>
          <div className="flex items-center gap-1 text-xs">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & React
          </div>
        </div>
      </footer>

      {/* Certification Viewer Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-[#030712]/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative max-w-[95%] md:max-w-2xl max-h-[85vh] bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:text-cyan-400 transition-all duration-200 cursor-pointer text-xl font-bold"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <img 
              src={`/${modalImg}`} 
              alt={modalTitle} 
              className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10" 
            />
            <div className="mt-4 text-white text-base font-semibold text-center tracking-wide">
              {modalTitle}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
