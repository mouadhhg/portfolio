import { motion } from 'framer-motion';
import imgA from '../assets/A.png';
import imgB from '../assets/B.png';
import imgC from '../assets/C.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Core Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We blend creativity with precision to craft digital solutions that drive results. 
            From concept to code, we bring your vision to life.
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col gap-20">
          
          {/* SECTION 1: Web Development */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img src={imgA} alt="Web Development" className="w-full max-w-sm drop-shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                Crafting Digital <span className="text-blue-600">Excellence</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At SHARP EDGE STUDIO, we don't just build websites; we create high-performance digital experiences. 
                We specialize in turning complex ideas into clean, efficient, and beautiful web solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700 font-medium"><span className="mr-3 text-blue-600">✓</span> Custom Web Development</li>
                <li className="flex items-center text-gray-700 font-medium"><span className="mr-3 text-blue-600">✓</span> Modern UI/UX Design</li>
              </ul>
            </motion.div>
          </div>

          {/* SECTION 2: 3D Modeling */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                Immersive <span className="text-blue-600">3D Worlds</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bring your ideas to life with our cutting-edge 3D modeling and rendering services. 
                From product visualization to complex 3D environments, we push the boundaries of 
                visual storytelling to captivate your audience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700 font-medium"><span className="mr-3 text-blue-600">✓</span> 3D Modeling & Rendering</li>
                <li className="flex items-center text-gray-700 font-medium"><span className="mr-3 text-blue-600">✓</span> Interactive 3D Scenes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center order-1 md:order-2"
            >
              <img src={imgB} alt="3D Modeling" className="w-full max-w-sm drop-shadow-2xl" />
            </motion.div>
          </div>

          {/* SECTION 3: Video Editing */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img src={imgC} alt="Video Editing" className="w-full max-w-sm drop-shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                Cinematic <span className="text-blue-600">Video Editing</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Transform your raw footage into cinematic masterpieces. Our post-production services focus on 
                storytelling, pacing, and motion graphics to ensure your message resonates with impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700 font-medium"><span className="mr-3 text-blue-600">✓</span> Professional Video Editing</li>
                <li className="flex items-center text-gray-700 font-medium"><span className="mr-3 text-blue-600">✓</span> Motion Graphics & VFX</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}