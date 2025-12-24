'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiCursorClickLight } from "react-icons/pi";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="lg:col-start-5 lg:col-end-7 lg:row-start-4 lg:row-end-5 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500"
      whileHover={{ scale: 1.02 }}
    >
      <Link href="/projects">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-1">
          Projects
          <PiCursorClickLight size={20} className="text-red-400" />
        </h2>
        <p className="text-sm text-zinc-400">Click to view all my projects</p>
      </Link>
    </motion.section>
  );
}