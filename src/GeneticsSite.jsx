import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const AtomIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <circle cx="50" cy="50" r="6" fill="currentColor" />
    <ellipse cx="50" cy="50" rx="32" ry="16" fill="none" stroke="currentColor" strokeWidth="2" />
    <ellipse
      cx="50"
      cy="50"
      rx="32"
      ry="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      transform="rotate(60 50 50)"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="32"
      ry="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      transform="rotate(-60 50 50)"
    />
  </svg>
);

const MoleculeIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    {/* Central atoms */}
    <circle cx="30" cy="30" r="7" fill="currentColor" />
    <circle cx="70" cy="30" r="7" fill="currentColor" />
    <circle cx="50" cy="70" r="7" fill="currentColor" />
    
    {/* Additional atoms */}
    <circle cx="20" cy="50" r="6" fill="currentColor" opacity="0.8" />
    <circle cx="80" cy="50" r="6" fill="currentColor" opacity="0.8" />
    <circle cx="50" cy="20" r="6" fill="currentColor" opacity="0.8" />
    <circle cx="15" cy="25" r="5" fill="currentColor" opacity="0.7" />
    <circle cx="85" cy="25" r="5" fill="currentColor" opacity="0.7" />
    <circle cx="50" cy="85" r="5" fill="currentColor" opacity="0.7" />
    
    {/* Primary bonds */}
    <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="2" />
    <line x1="70" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="2" />
    
    {/* Secondary bonds */}
    <line x1="30" y1="30" x2="20" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <line x1="70" y1="30" x2="80" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <line x1="50" y1="70" x2="20" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <line x1="50" y1="70" x2="80" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <line x1="30" y1="30" x2="50" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <line x1="70" y1="30" x2="50" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    
    {/* Tertiary bonds to smaller atoms */}
    <line x1="20" y1="50" x2="15" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="80" y1="50" x2="85" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="50" y1="70" x2="50" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    
    {/* Double bonds (represented as parallel lines) */}
    <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="30" y1="32" x2="70" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

const DnaIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    {/* First helix strand - starts left, crosses to right */}
    <path
      d="M30 10 Q 20 30, 50 50 Q 80 70, 70 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Second helix strand - starts right, crosses to left */}
    <path
      d="M70 10 Q 80 30, 50 50 Q 20 70, 30 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Base pairs (rungs) connecting the strands */}
    {[15, 25, 35, 45, 55, 65, 75, 85].map((y, i) => {
      // Calculate x positions that follow the crossing strands
      // Strands cross at y=50
      let x1, x2;
      const normalizedY = (y - 10) / 80; // 0 to 1 from top to bottom
      
      if (y <= 50) {
        // Top half - before crossing
        const t = (y - 10) / 40; // 0 to 1 for top half
        // First strand: from x=30 to x=50, with curve
        x1 = 30 + (50 - 30) * t + (20 - 30) * t * (1 - t) * 2;
        // Second strand: from x=70 to x=50, with curve
        x2 = 70 + (50 - 70) * t + (80 - 70) * t * (1 - t) * 2;
      } else {
        // Bottom half - after crossing
        const t = (y - 50) / 40; // 0 to 1 for bottom half
        // First strand: from x=50 to x=70, with curve
        x1 = 50 + (70 - 50) * t + (80 - 50) * t * (1 - t) * 2;
        // Second strand: from x=50 to x=30, with curve
        x2 = 50 + (30 - 50) * t + (20 - 50) * t * (1 - t) * 2;
      }
      
      // Ensure lines stay within visual bounds
      x1 = Math.max(25, Math.min(75, x1));
      x2 = Math.max(25, Math.min(75, x2));
      
      return (
        <line
          key={y}
          x1={x1}
          y1={y}
          x2={x2}
          y2={y}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      );
    })}
    {/* Additional helical curves for depth */}
    <path
      d="M32 15 Q 22 35, 50 50 Q 78 65, 68 85"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M68 15 Q 78 35, 50 50 Q 22 65, 32 85"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    {/* Central node point */}
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

const CellIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    {/* Cell membrane (outer boundary) */}
    <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="2.5" />
    
    {/* Nucleus */}
    <circle cx="50" cy="50" r="14" fill="currentColor" opacity="0.3" />
    <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
    {/* Nucleolus */}
    <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.6" />
    
    {/* Mitochondria (bean-shaped organelles) */}
    <ellipse cx="35" cy="35" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 35 35 Q 33 33, 31 35 Q 33 37, 35 35" fill="currentColor" opacity="0.5" />
    
    <ellipse cx="68" cy="38" rx="5" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 68 38 Q 66.5 36.5, 65 38 Q 66.5 39.5, 68 38" fill="currentColor" opacity="0.5" />
    
    <ellipse cx="42" cy="68" rx="5.5" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 42 68 Q 40 66, 38 68 Q 40 70, 42 68" fill="currentColor" opacity="0.5" />
    
    {/* Endoplasmic Reticulum (wavy lines) */}
    <path
      d="M 25 45 Q 28 42, 31 45 Q 34 48, 37 45 Q 40 42, 43 45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M 57 45 Q 60 48, 63 45 Q 66 42, 69 45 Q 72 48, 75 45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    
    {/* Golgi Apparatus (stacked curved structures) */}
    <path
      d="M 60 25 Q 65 23, 70 25 Q 65 27, 60 25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M 60 28 Q 65 26, 70 28 Q 65 30, 60 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M 60 31 Q 65 29, 70 31 Q 65 33, 60 31"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    
    {/* Ribosomes (small dots scattered around) */}
    <circle cx="28" cy="52" r="1.5" fill="currentColor" />
    <circle cx="32" cy="58" r="1.5" fill="currentColor" />
    <circle cx="72" cy="55" r="1.5" fill="currentColor" />
    <circle cx="65" cy="65" r="1.5" fill="currentColor" />
    <circle cx="30" cy="70" r="1.5" fill="currentColor" />
    <circle cx="70" cy="28" r="1.5" fill="currentColor" />
    
    {/* Lysosomes (small circular organelles) */}
    <circle cx="38" cy="28" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="38" cy="28" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    
    <circle cx="62" cy="68" r="2.5" fill="currentColor" opacity="0.4" />
    <circle cx="62" cy="68" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Vacuoles (larger structures) */}
    <ellipse cx="25" cy="60" rx="4" ry="6" fill="currentColor" opacity="0.2" />
    <ellipse cx="25" cy="60" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Centrosome (near nucleus) */}
    <circle cx="45" cy="45" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="47" cy="47" r="2" fill="currentColor" opacity="0.6" />
  </svg>
);

const SpleenIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    {/* Outer spleen shape */}
    <path
      d="M40 20 C 65 20, 75 45, 65 70 C 55 85, 35 80, 30 60 C 27 48, 30 25, 40 20 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    
    {/* Internal blood vessels (arteries and veins) */}
    <path
      d="M 45 25 Q 50 35, 55 45 Q 52 55, 48 65"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M 50 30 Q 45 40, 42 50 Q 45 60, 50 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.7"
    />
    
    {/* Branching vessels */}
    <line x1="48" y1="40" x2="52" y2="45" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="48" y1="40" x2="45" y2="45" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="50" y1="50" x2="53" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <line x1="50" y1="50" x2="47" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    
    {/* Splenic tissue patterns (reticular network) */}
    <path
      d="M 35 35 Q 38 38, 35 41 Q 32 38, 35 35"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
    />
    <path
      d="M 55 40 Q 58 43, 55 46 Q 52 43, 55 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
    />
    <path
      d="M 42 55 Q 45 58, 42 61 Q 39 58, 42 55"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
    />
    <path
      d="M 58 60 Q 61 63, 58 66 Q 55 63, 58 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
    />
    
    {/* Hilum (entry point for vessels) */}
    <ellipse cx="38" cy="45" rx="3" ry="5" fill="currentColor" opacity="0.5" />
    <line x1="35" y1="60" x2="28" y2="80" stroke="currentColor" strokeWidth="2" />
    
    {/* Red pulp areas (represented as textured regions) */}
    <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.1" />
    <circle cx="45" cy="60" r="6" fill="currentColor" opacity="0.1" />
    
    {/* White pulp nodules */}
    <circle cx="52" cy="35" r="3" fill="currentColor" opacity="0.3" />
    <circle cx="48" cy="55" r="2.5" fill="currentColor" opacity="0.3" />
    <circle cx="55" cy="65" r="2.5" fill="currentColor" opacity="0.3" />
  </svg>
);

const BrainIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    {/* Left hemisphere */}
    <path
      d="M40 20 C 25 20, 20 35, 22 45 C 15 55, 20 70, 32 72 C 35 80, 45 82, 50 78"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    {/* Right hemisphere */}
    <path
      d="M60 20 C 75 20, 80 35, 78 45 C 85 55, 80 70, 68 72 C 65 80, 55 82, 50 78"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    
    {/* Corpus callosum (connecting the hemispheres) */}
    <path
      d="M 50 22 C 43 25, 42 30, 45 35 C 42 38, 42 45, 46 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M 50 22 C 57 25, 58 30, 55 35 C 58 38, 58 45, 54 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    
    {/* Sulci and gyri (brain folds) - Left hemisphere */}
    <path
      d="M 30 30 Q 28 32, 30 34 Q 32 32, 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M 28 40 Q 26 42, 28 44 Q 30 42, 28 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M 32 50 Q 30 52, 32 54 Q 34 52, 32 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M 30 60 Q 28 62, 30 64 Q 32 62, 30 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    
    {/* Sulci and gyri - Right hemisphere */}
    <path
      d="M 70 30 Q 72 32, 70 34 Q 68 32, 70 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M 72 40 Q 74 42, 72 44 Q 70 42, 72 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M 68 50 Q 70 52, 68 54 Q 66 52, 68 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M 70 60 Q 72 62, 70 64 Q 68 62, 70 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.7"
    />
    
    {/* Frontal lobe detail */}
    <path
      d="M 45 25 Q 42 28, 45 31"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <path
      d="M 55 25 Q 58 28, 55 31"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.6"
    />
    
    {/* Temporal lobe detail */}
    <path
      d="M 35 55 Q 32 58, 35 61"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <path
      d="M 65 55 Q 68 58, 65 61"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.6"
    />
    
    {/* Brainstem */}
    <ellipse cx="50" cy="75" rx="4" ry="6" fill="currentColor" opacity="0.4" />
    <ellipse cx="50" cy="75" rx="4" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Cerebellum (at the back) */}
    <path
      d="M 40 70 Q 35 72, 38 74 Q 42 72, 40 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.6"
    />
    <path
      d="M 60 70 Q 65 72, 62 74 Q 58 72, 60 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.6"
    />
    
    {/* Neural pathways (internal connections) */}
    <path
      d="M 45 35 Q 47 45, 50 55"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
    />
    <path
      d="M 55 35 Q 53 45, 50 55"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
    />
  </svg>
);

const PersonIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    {/* WC Sign Style - Simple filled silhouette */}
    {/* Head */}
    <circle cx="50" cy="25" r="12" fill="currentColor" />
    
    {/* Torso (trapezoid shape) */}
    <path
      d="M 38 37 L 42 60 L 58 60 L 62 37 Z"
      fill="currentColor"
    />
    
    {/* Left arm */}
    <path
      d="M 38 42 L 20 50 L 18 65 L 25 68 L 30 55 Z"
      fill="currentColor"
    />
    
    {/* Right arm */}
    <path
      d="M 62 42 L 80 50 L 82 65 L 75 68 L 70 55 Z"
      fill="currentColor"
    />
    
    {/* Left leg */}
    <path
      d="M 42 60 L 38 85 L 35 90 L 40 92 L 45 85 Z"
      fill="currentColor"
    />
    
    {/* Right leg */}
    <path
      d="M 58 60 L 62 85 L 65 90 L 60 92 L 55 85 Z"
      fill="currentColor"
    />
  </svg>
);

const items = [
  {
    id: 1,
    label: "Atom",
    text: "Atoms form the basic structure of all biological molecules, including the six organic compounds that make up DNA. The arrangement and interaction of atoms create the building blocks that ultimately support biological complexity.",
    Icon: AtomIcon,
  },
  {
    id: 2,
    label: "Molecule",
    text: "Molecules such as nucleotides, amino acids, and lipids arise when atoms bond. These molecular structures determine gene expression, protein formation, and ultimately the functional processes that shape traits and behavior.",
    Icon: MoleculeIcon,
  },
  {
    id: 3,
    label: "DNA",
    text: "DNA is the core blueprint for development, encoding instructions for cellular structure and function. Although organisms share much of their DNA, expression varies across cell types. DNA also integrates environmental experiences through mechanisms like epigenetics.",
    Icon: DnaIcon,
  },
  {
    id: 4,
    label: "Cell",
    text: "Cells interpret DNA differently depending on type and context. Environmental signals can alter gene expression through DNA methylation, histone modification, and non-coding RNA. These epigenetic shifts influence development, stress responses, and later behavior.",
    Icon: CellIcon,
  },
  {
    id: 5,
    label: "Spleen",
    text: "The spleen shows how genetic variation supports environmental adaptation. Sea Nomad populations such as the Bajau evolved enlarged spleens enabling deeper and longer dives, likely through variants of genes like PDE10A that increase oxygen storage capacity.",
    Icon: SpleenIcon,
  },
  {
    id: 6,
    label: "Brain",
    text: "The brain is shaped by polygenic influences and environment-driven epigenetic changes. Stress, inflammation, and developmental conditions affect neural circuits, microglial activity, and mental health outcomes such as anxiety, depression, and cognitive reactivity.",
    Icon: BrainIcon,
  },
  {
    id: 7,
    label: "Person",
    text: "Human behavior emerges from complex interactions among thousands of genes and diverse life experiences. Heritability explains only part of personality variation; environmental conditions, stress, parenting, and development produce the majority of behavioral differences.",
    Icon: PersonIcon,
  },
];

const GeneticsSite = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const current = items[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Scroll wheel navigation
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % items.length);
      } else if (e.deltaY < 0) {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white flex overflow-hidden relative">
      {/* Left: main visualization */}
      <div className={`flex-1 flex items-center justify-center relative transition-all duration-300 ${sidebarVisible ? "" : "w-full"}`}>
        {/* subtle background DNA ring */}
        <motion.div
          className="absolute w-72 h-72 rounded-full border border-cyan-500/20"
          style={{ boxShadow: "0 0 80px rgba(34,211,238,0.2)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.button
          onClick={toggleSidebar}
          key={current.id}
          className="relative flex flex-col items-center justify-center px-8 py-6 rounded-3xl bg-slate-900/90 border border-cyan-500/40 shadow-2xl shadow-cyan-500/30 backdrop-blur cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              rotate: 360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <current.Icon className="w-32 h-32 text-cyan-300" />
          </motion.div>
          <span className="mt-4 text-2xl font-semibold tracking-wide">
            {current.label}
          </span>
          <span className="mt-1 text-xs text-cyan-300/80 uppercase tracking-[0.25em]">
            {sidebarVisible ? "Click to hide info" : "Click to show info"}
          </span>
        </motion.button>
      </div>

      {/* Right: text panel */}
      <motion.div
        initial={false}
        animate={{
          width: sidebarVisible ? "33.333333%" : "0%",
          opacity: sidebarVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="bg-slate-950/85 backdrop-blur-xl p-6 flex flex-col border-l border-slate-800 overflow-hidden"
      >
        {sidebarVisible && (
          <>
            <div className="mb-4 flex-shrink-0">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80">
                From atom to person
              </p>
              <h1 className="mt-1 text-2xl font-semibold">{current.label}</h1>
            </div>
            <motion.div
              key={current.id + "_text"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="text-base leading-relaxed text-slate-100/90 overflow-y-auto flex-1"
            >
              {current.text}
            </motion.div>
            <div className="mt-auto pt-4 text-xs text-slate-400/75 flex-shrink-0">
              Use arrow keys or scroll to navigate through the biological hierarchy:
              Atom → Molecule → DNA → Cell → Spleen → Brain → Person.
            </div>
          </>
        )}
      </motion.div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800 flex items-center justify-center">
        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative transition-all duration-300 ${
                index === activeIndex
                  ? "scale-110"
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              <item.Icon
                className={`w-10 h-10 transition-colors ${
                  index === activeIndex ? "text-cyan-300" : "text-slate-400"
                }`}
              />
              {index === activeIndex && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="absolute right-6 text-xs text-slate-400">
          {activeIndex + 1} / {items.length}
        </div>
      </div>
    </div>
  );
};

export default GeneticsSite;

