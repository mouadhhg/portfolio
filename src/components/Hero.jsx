'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDE_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=2000"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-slate-950 pt-20 pb-32 md:py-0">
      
      {/* 1. Slideshow Layer with Motion Zoom (Ken Burns Effect) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={SLIDE_IMAGES[currentIndex]} 
            alt="Hero Slide Background" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays: Dark Gradient & Subtle Vignette */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Content Layer */}
      <div className="relative z-20 px-6 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm font-semibold text-slate-200 mb-8 shadow-2xl"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Next-Gen Digital Solutions Agency</span>
          <svg className="w-4 h-4 text-blue-400 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]"
        >
          Welcome to <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
            SHARP CODE
          </span>
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal"
        >
          We craft premium digital experiences and high-end Web solutions tailored to elevate your business. Turning your visionary ideas into powerful digital reality.
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Work</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold transition-all duration-300 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>Get a Quote</span>
          </a>
        </motion.div>

        {/* Slide Indicators & Navigation Controls */}
        <div className="flex items-center gap-6 z-30">
          <button 
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous Slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {SLIDE_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'w-10 bg-blue-500' : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to Slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition duration-300 hover:scale-110 active:scale-95"
            aria-label="Next Slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* 3. Multi-Layer SVG Wave Divider (Seamless Section Junction) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-16 md:h-28 lg:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* الطبقة الشفافة العلوية (لمسة أزرق تتناسق مع الهوية) */}
          <path
            d="M0,35 C300,105 600,-10 1200,55 L1200,120 L0,120 Z"
            className="fill-blue-600/20"
          />
          {/* الطبقة الأمامية (تطابق لون خلفية قسم About تماماً bg-slate-50) */}
          <path
            d="M0,15 C200,90 450,-20 700,60 C900,110 1100,20 1200,40 L1200,120 L0,120 Z"
            className="fill-slate-50" 
          />
        </svg>
      </div>

    </section>
  );
}