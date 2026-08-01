import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    { title: "E-commerce App", desc: "Built with React, Node.js, and Stripe.", img: "https://picsum.photos/seed/1/400/250" },
    { title: "Task Manager", desc: "A robust Kanban board for team productivity.", img: "https://picsum.photos/seed/2/400/250" },
    { title: "Weather Dashboard", desc: "Real-time weather tracking using OpenWeather API.", img: "https://picsum.photos/seed/3/400/250" },
  ];

  // إعدادات الأنيميشن المتتابع
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // تأخير 0.2 ثانية بين كل بطاقة
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Selected Works</h2>
          <p className="text-gray-600 text-lg">A glimpse into our recent digital journeys and creations.</p>
        </div>

        {/* شبكة المشاريع مع الأنيميشن */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projectList.map((p, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{p.desc}</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
                  View Project <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}