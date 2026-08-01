import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=2000"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Slideshow Layer */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={img} alt="Background" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 p-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Welcome to <span className="text-blue-500">SHARP EDGE STUDIO</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          We craft premium digital experiences and high-end solutions tailored to elevate your business. 
          Turning your vision into reality with modern technology.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
            Explore Services
          </a>
          <a href="#contact" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}