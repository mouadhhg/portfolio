import { motion } from 'framer-motion';
import imgA from '../assets/A.png';
import imgB from '../assets/B.png';
import imgC from '../assets/C.png';

// حركة طفو سلسة للصور
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* عناصر خلفية جمالية (Ambient Background Light) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100/60 rounded-full border border-blue-200/50"
          >
            What We Do
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Our Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We blend creativity with precision to craft digital solutions that drive results. 
            From concept to code, we bring your vision to life.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-28">
          
          {/* SERVICE 1: Web Development */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group flex justify-center"
            >
              {/* Glowing aura behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-35 transition duration-500" />
              
              <motion.div variants={floatingAnimation} initial="initial" animate="animate">
                <img 
                  src={imgA} 
                  alt="Web Development" 
                  className="relative z-10 w-full max-w-md drop-shadow-2xl transition duration-300 transform group-hover:scale-105" 
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">01. Web Engineering</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Crafting Digital <span className="text-blue-600">Excellence</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                At SHARP CODE, we don't just build websites; we create high-performance digital experiences. 
                We specialize in turning complex ideas into clean, efficient, and beautiful web solutions.
              </p>
              
              <ul className="space-y-3.5 pt-2">
                {[
                  "Custom Web Development & Web Apps",
                  "Modern Responsive UI/UX Design",
                  "High Performance & SEO Optimized"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* SERVICE 2: 3D Modeling */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 space-y-6"
            >
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">02. 3D & Spatial</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Immersive <span className="text-blue-600">3D Worlds</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Bring your ideas to life with our cutting-edge 3D modeling and rendering services. 
                From product visualization to complex 3D environments, we push the boundaries of 
                visual storytelling to captivate your audience.
              </p>
              
              <ul className="space-y-3.5 pt-2">
                {[
                  "High-End 3D Modeling & Rendering",
                  "Interactive WebGL & 3D Scenes",
                  "Product Visualization & Animations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative group flex justify-center"
            >
              {/* Glowing aura behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-35 transition duration-500" />
              
              <motion.div variants={floatingAnimation} initial="initial" animate="animate">
                <img 
                  src={imgB} 
                  alt="3D Modeling" 
                  className="relative z-10 w-full max-w-md drop-shadow-2xl transition duration-300 transform group-hover:scale-105" 
                />
              </motion.div>
            </motion.div>
          </div>

          {/* SERVICE 3: Video Editing */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group flex justify-center"
            >
              {/* Glowing aura behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-35 transition duration-500" />
              
              <motion.div variants={floatingAnimation} initial="initial" animate="animate">
                <img 
                  src={imgC} 
                  alt="Video Editing" 
                  className="relative z-10 w-full max-w-md drop-shadow-2xl transition duration-300 transform group-hover:scale-105" 
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">03. Media Production</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Cinematic <span className="text-blue-600">Video Editing</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Transform your raw footage into cinematic masterpieces. Our post-production services focus on 
                storytelling, pacing, and motion graphics to ensure your message resonates with impact.
              </p>
              
              <ul className="space-y-3.5 pt-2">
                {[
                  "Professional Cinematic Editing",
                  "Motion Graphics & Dynamic VFX",
                  "Sound Design & Color Grading"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}