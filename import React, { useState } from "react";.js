import React, { useState } from "react";

import { motion } from "framer-motion";

type Item = {
  id: number;
  label: string;
  text: string;
  image: string;
};

const items: Item[] = [
  {
    id: 1,
    label: "Atom",
    text: "Atoms form the basic units of matter, consisting of protons, neutrons, and electrons.",
    image: "/images/atom.jpeg",
  },
  {
    id: 2,
    label: "Molecule",
    text: "Molecules arise when atoms bond, creating the chemical building blocks of life.",
    image: "/images/molecule.png",
  },
  {
    id: 3,
    label: "DNA",
    text: "DNA is a polymer built from nucleotide molecules, encoding genetic information.",
    image: "/images/dna.jpeg",
  },
  {
    id: 4,
    label: "Cell",
    text: "Cells use DNA to produce proteins and carry out the essential functions of life.",
    image: "/images/cell.png",
  },
  {
    id: 5,
    label: "Spleen",
    text: "The spleen filters blood, supports immune function, and manages red blood cell turnover.",
    image: "/images/spleen.png", // add later or leave as placeholder
  },
  {
    id: 6,
    label: "Brain",
    text: "The brain integrates neural signals, genetics, and environment to regulate behavior.",
    image: "/images/brain.png", // add later or leave as placeholder
  },
  {
    id: 7,
    label: "Person",
    text: "A person represents the full biological and behavioral expression of all underlying systems.",
    image: "/images/person.png", // add later or leave as placeholder
  },
];

const GeneticsSite: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const current = items[active];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="w-full h-screen bg-black text-white flex overflow-hidden relative">
      {/* Left side: spinning image */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* faint background DNA spinner */}
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/DNA_Overview.png"
          alt="Background DNA"
          className="w-64 opacity-10 absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* main interactive card */}
        <motion.button
          key={current.id}
          className="relative flex flex-col items-center justify-center px-8 py-6 bg-gray-900/80 rounded-3xl border border-cyan-500/40 text-xl backdrop-blur shadow-2xl cursor-pointer"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={handleNext}
        >
          {/* spinning and floating image */}
          <motion.img
            src={current.image}
            alt={current.label}
            className="w-48 h-48 object-contain mb-4 rounded-xl"
            animate={{
              rotate: 360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <span className="text-2xl font-semibold">{current.label}</span>
          <span className="mt-2 text-xs text-cyan-300/80 tracking-[0.2em] uppercase">
            Click to go to next
          </span>
        </motion.button>
      </div>

      {/* Right sidebar: text */}
      <div className="w-1/3 bg-gray-900/70 backdrop-blur-xl p-6 flex flex-col border-l border-gray-700">
        <div className="mb-3">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400/80">
            From atom to person
          </p>
          <h1 className="text-2xl font-semibold mt-1">{current.label}</h1>
        </div>

        <motion.div
          key={current.id + "_text"}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-base leading-relaxed"
        >
          {current.text}
        </motion.div>

        <div className="mt-auto pt-4 text-xs text-gray-400/80">
          Click the image on the left to move along the hierarchy:
          Atom → Molecule → DNA → Cell → Spleen → Brain → Person.
        </div>
      </div>
    </div>
  );
};

export default GeneticsSite;
