'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TimerCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <motion.div
      className="col-span-full lg:col-start-3 lg:col-end-5 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500 flex flex-col items-center justify-center"
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-xs uppercase tracking-wide text-zinc-500 mb-4">Current Time</p>
      <div className="flex gap-2 text-5xl font-bold text-white">
        <span>{hours}</span>
        <span className="animate-pulse">:</span>
        <span>{minutes}</span>
        <span className="animate-pulse">:</span>
        <span>{seconds}</span>
      </div>
    </motion.div>
  );
}