"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left side - Logo / Name */}
        <Link href="/" className="font-semibold text-lg text-slate-900 dark:text-slate-100">
          Raúl Argott
        </Link>

        {/* Center - Navigation links */}
        <div className="hidden md:flex gap-6 text-slate-600 dark:text-slate-300">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/profile/hr" className="hover:text-blue-600 transition-colors">HR Profile</Link>
          <Link href="/profile/tech" className="hover:text-blue-600 transition-colors">Tech Profile</Link>
          <Link href="/demos" className="hover:text-blue-600 transition-colors">Demos</Link>
          <Link href="/observability" className="hover:text-blue-600 transition-colors">Observability</Link>
        </div>

        {/* Right side - Icons */}
        <div className="flex gap-4 text-slate-500 dark:text-slate-400">
          <a href="mailto:raulargott@hotmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5 hover:text-blue-500" />
          </a>
          <a href="https://linkedin.com/in/raulargott" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-500" />
          </a>
          <a href="https://github.com/raulargott" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-blue-500" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
