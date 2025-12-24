'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from "react-icons/fa";

const social = [
  { label: 'Email', href: 'mailto:tsalichris12@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/christos-tsalidis' },
  { label: 'GitHub', href: 'https://github.com/Paliga' },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-7 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500 flex items-start justify-center"
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-full space-y-4">
        <h3 className="text-lg font-semibold text-white leading-snug">
          Let&apos;s get in touch! <br />I&apos;m always open to new opportunities.
        </h3>

        <div className="space-y-2">
          <p className="text-lg font-semibold text-zinc-200">Socials</p>
          <ul className="mt-1 space-y-2 text-sm text-zinc-200">
            {social.map((item) => (
              <li key={item.href} className="border-l-2 border-red-500/60 pl-3">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 text-gray-400 mt-2 pt-4 border-t border-gray-800">
          <div className="p-2 text-red-400">
            <FaMapMarkerAlt size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-200">Thessaloniki, GR</span>
            <span className="text-xs text-gray-500">Central Macedonia</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}