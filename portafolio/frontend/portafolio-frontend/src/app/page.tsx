"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 space-y-6">
        <motion.img
          src="/images/profile-placeholder.jpg"
          alt="Raúl Argott"
          className="w-32 h-32 rounded-full border border-slate-300 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Raúl Argott
        </motion.h1>

        <p className="text-lg text-slate-600 dark:text-slate-400">
          Tech Lead • Lead Developer • .NET & Azure Enthusiast
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link href="/profile/hr">
            <Button size="lg" className="font-medium">
              Profile for HR & Recruiters
            </Button>
          </Link>
          <Link href="/profile/tech">
            <Button size="lg" variant="outline">
              Profile for Engineers & CTOs
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8">
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
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          I’m a tech lead and software architect focused on designing and building cloud-native systems with
          <span className="font-semibold"> .NET</span>,{" "}
          <span className="font-semibold">Azure</span>, and modern DevOps practices.  
          I’m passionate about helping teams deliver cleaner, faster, and more reliable code through good architecture, CI/CD, and strong communication.
        </p>
      </section>

      {/* FEATURED PROJECTS / DEMOS */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Demos & Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Real-time Visitor Counter</h3>
              <p className="text-sm text-slate-500 mb-4">SignalR + Redis example showing live users online.</p>
              <Link href="/demos/visitors">
                <Button size="sm" variant="secondary">View Demo</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Observability Dashboard</h3>
              <p className="text-sm text-slate-500 mb-4">Live architecture diagram & metrics (OpenTelemetry + Grafana).</p>
              <Link href="/observability">
                <Button size="sm" variant="secondary">View Metrics</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Pub/Sub Events Stream</h3>
              <p className="text-sm text-slate-500 mb-4">NATS + Redis event messaging visualized in real time.</p>
              <Link href="/demos/pubsub">
                <Button size="sm" variant="secondary">View Demo</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

     <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800">
  <p>
    © {new Date().getFullYear()} Raúl Argott — Built with Next.js, .NET & Azure
  </p>
  <div className="mt-2 flex flex-wrap justify-center gap-3 text-slate-600 dark:text-slate-400">
    <a href="mailto:raulargott@hotmail.com" className="hover:text-blue-600">raulargott@hotmail.com</a>
    <span>•</span>
    <a href="mailto:raulargott@gmail.com" className="hover:text-blue-600">raulargott@gmail.com</a>
    <span>•</span>
    <a href="https://khasmlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
      khasmlabs.com
    </a>
    <span>•</span>
    <span>🌍 Currently working remotely @ Khasm Labs</span>
  </div>
</footer>

    </main>
  );
}
