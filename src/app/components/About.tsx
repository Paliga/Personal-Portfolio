'use client';
import { motion } from 'framer-motion';
const tools = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'];

export default function About() {
  return (
    <motion.div className="col-span-full md:col-span-2 lg:col-span-1 lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-6 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500 h-full flex flex-col gap-4"
    whileHover={{ scale: 1.02 }}
    >
      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-500">About me</p>
        <h3 className="text-lg font-semibold text-white mt-2 leading-snug">
          Hi, I&apos;m Christos, a software developer from Greece.
        </h3>
      </div>

      <div>
        <p className="text-sm text-zinc-400">My primary tools of choice include:</p>
        <ul className="mt-3 space-y-2 text-sm text-zinc-200">
          {tools.map((tool) => (
            <li key={tool} className="border-l-2 border-red-500/60 pl-3">{tool}</li>
          ))}
        </ul>
      </div>

      <div className="text-sm text-zinc-300 leading-relaxed">
        <p>
          Beyond coding, I&apos;m passionate about travelling and getting new experiences.
        </p>
        <p className="mt-2">
          An unusual hobby of mine is collecting old retail video games, they&apos;re interesting pieces of history.
        </p>
      </div>
    </motion.div>
  );
}