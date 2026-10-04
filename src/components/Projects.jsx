import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowUpRight, FolderGit2 } from 'lucide-react';
import bijouterieImg from '../assets/bijouterie.png';

const projectList = [
  { 
    title: "Bijouterie 925", 
    category: "E-Commerce & Luxury",
    desc: "A modern, high-end e-commerce platform for luxury silver jewelry, featuring a sleek purchasing workflow and responsive interface.", 
    tags: ["React", "Tailwind CSS", "Vercel"],
    img: bijouterieImg,
    link: "https://bijouterie-925.vercel.app",
    featured: true
  },
  { 
    title: "Task Manager Pro", 
    category: "Web Application",
    desc: "A robust Kanban-style productivity board engineered for modern team collaboration, drag-and-drop tasks, and live analytics.", 
    tags: ["React", "Framer Motion", "Tailwind"],
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    link: "#",
    featured: false
  },
  { 
    title: "Weather Dashboard", 
    category: "Real-time API Data",
    desc: "Interactive weather tracking platform delivering live forecasts, interactive geolocation mapping, and OpenWeather integration.", 
    tags: ["React", "REST API", "Tailwind"],
    img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    link: "#",
    featured: false
  },
];

// كارت احترافي مع تأثير ميلان 3D عند تحريك الماوس
function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl hover:border-blue-500/40 transition-all duration-500 flex flex-col justify-between"
    >
      <div>
        {/* الصورة وتغليف التفاعل */}
        <div className="relative h-56 overflow-hidden bg-slate-900">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-90" 
          />
          
          {/* Glowing Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* شارة التصنيف فوق الصورة */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-md">
              <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
              {project.category}
            </span>
          </div>

          {/* زر المعاينة السريعة يظهر عند الماوس */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-10 w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-blue-700"
            aria-label="Visit project"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* محتوى الكارت */}
        <div className="p-7">
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 flex items-center justify-between">
            {project.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {project.desc}
          </p>

          {/* قائمة تقنيات المشروع Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* الرابط السفلي */}
      <div className="px-7 pb-7 pt-2 border-t border-slate-100/80 flex items-center justify-between">
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-all"
        >
          <span>Live Preview</span>
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {project.featured && (
          <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
            <Sparkles className="w-3 h-3" /> Featured
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-50 relative overflow-hidden">
      
      {/* خلفية جمالية مكملة للأقسام السابقة */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100/70 rounded-full border border-blue-200/60"
          >
            <Sparkles className="w-3.5 h-3.5" /> Portfolio Highlights
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight"
          >
            Selected <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital Works</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            A curated showcase of high-performance web applications, digital solutions, and scalable software built with modern craftsmanship.
          </motion.p>
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}