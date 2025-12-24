'use client';
import { motion } from 'framer-motion';
import { SlFire } from "react-icons/sl";

export default function Currently() {
  return (
    <motion.section
      id="currently"
      className="lg:col-start-3 lg:col-end-5 lg:row-start-5 lg:row-end-7 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 shadow-2xl hover:border-red-500/50 transition-all duration-500"
      whileHover={{ scale: 1.02 }}
    >
      <div className="container">
        <h2 className="text-lg font-bold text-red-500 mb-2 flex items-center gap-2">
          Currently
          <SlFire size={20} className="text-red-400" />
        </h2>
        <p className='text-xs text-zinc-300'>Almost fulfilled military services</p>
      </div>
    </motion.section>
  );
}