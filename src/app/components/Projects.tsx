'use client';
import { motion } from 'framer-motion';
import { getRepos, type Repo } from '../lib/github';

export default function Projects() {
  return (
    <motion.section id="projects" className="lg:col-start-5 lg:col-end-7 lg:row-start-4 lg:row-end-5 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500"
    whileHover={{ scale: 1.02 }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
      </div>
    </motion.section>
  );
}