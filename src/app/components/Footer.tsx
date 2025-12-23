'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer className="col-span-full lg:col-start-7 lg:col-end-9 lg:row-start-6 lg:row-end-7 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500 flex items-center justify-center text-center text-sm text-gray-400"
    whileHover={{ scale: 1.02 }}>
      <p>© {new Date().getFullYear()} Christos Tsalidis. <br /> Built with Next.js + Tailwind.</p>
    </motion.footer>
  );
}