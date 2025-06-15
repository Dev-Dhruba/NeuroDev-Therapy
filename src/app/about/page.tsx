"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Star, HelpCircle, Target } from "lucide-react";

export default function AboutPage() {
  const sections = [
    {
      title: "Our Mission",
      text: "At NeuroDev Therapy, we are dedicated to providing accessible, science-backed therapy tools for individuals with neurodevelopmental challenges.",
      icon: <Target className="w-6 h-6 text-green-500" />,
      bg: "from-green-100 to-green-50",
      border: "border-green-200",
      glow: "shadow-green-300/30",
    },
    {
      title: "Why We Exist",
      text: "We recognize the urgent need for early detection of autism and dyslexia. Our platform offers modular, gamified tools to empower early learning.",
      icon: <HelpCircle className="w-6 h-6 text-purple-500" />,
      bg: "from-purple-100 to-purple-50",
      border: "border-purple-200",
      glow: "shadow-purple-300/30",
    },
    {
      title: "What Makes Us Unique",
      text: "We blend AI, interactive games, and expert knowledge into an engaging platform that adapts to each child’s unique pace.",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      bg: "from-yellow-100 to-yellow-50",
      border: "border-yellow-200",
      glow: "shadow-yellow-300/30",
    },
    {
      title: "Future Roadmap",
      text: "We aim to scale globally with multilingual support, personalized therapy, and continuous research integration.",
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      bg: "from-blue-100 to-blue-50",
      border: "border-blue-200",
      glow: "shadow-blue-300/30",
    },
  ];

  return (
    <main className="relative min-h-screen py-20 px-6 sm:px-12 bg-gradient-to-b from-green-100 via-green-50 to-green-25 text-gray-800 overflow-x-hidden">
      {/* Subtle Green Overlay */}
      <div className="absolute inset-0 bg-green-200/10 pointer-events-none -z-10" />

      {/* Brain Logo with Subtle Border */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative inline-block rounded-xl shadow-md border-2 border-white/30 backdrop-blur-sm bg-gradient-to-br from-green-100/50 to-blue-100/50">
          <Image
            src="/aboutImages/logo.png"
            alt="NeuroDev Logo"
            width={72}
            height={72}
            className="rounded-xl"
          />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700">
          About NeuroDev Therapy
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 font-medium max-w-3xl mx-auto">
          Empowering individuals through innovative digital therapy, tailored to
          early intervention and holistic development.
        </p>
      </motion.div>

      {/* Plant Illustration with Blurred Border */}
      <motion.div
        className="flex justify-center mb-14"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative rounded-2xl shadow-xl border-4 border-white/30 backdrop-blur-sm bg-gradient-to-br from-green-100/50 to-blue-100/50">
          <Image
            src="/aboutImages/plant.png"
            alt="Growing Plant"
            width={420}
            height={340}
            className="rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {sections.map((item, idx) => (
          <motion.div
            key={item.title}
            className={`p-6 rounded-2xl shadow-xl bg-gradient-to-br ${item.bg} border ${item.border} hover:scale-[1.015] hover:shadow-lg ${item.glow} transition-all duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-white/80 rounded-full p-2 shadow">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <motion.div
        className="mt-20 text-center flex flex-col sm:flex-row items-center justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link href="/">
          <span className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg">
            Return to Home
          </span>
        </Link>
        <Link href="/detection">
          <span className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg">
            Take Detection Test
          </span>
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 pt-8 text-center text-sm text-gray-500">
        Building Brighter Minds Together
        <br />© 2025 NeuroDev Therapy. All rights reserved.
      </footer>
    </main>
  );
}
