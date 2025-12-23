'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TimerCard() {
  const [date, setDate] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  }).format(date);

  return (
    <motion.div
      className="col-span-full lg:col-start-3 lg:col-end-5 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500 flex flex-col items-center justify-center"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">Current Time</p>
      <span className="text-2xl font-semibold text-white tracking-wide">
        {formattedTime}
      </span>
    </motion.div>
  );
}