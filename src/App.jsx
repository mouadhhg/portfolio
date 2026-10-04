import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // استيراد زر الواتساب العائم

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white relative">
      {/* Navbar الشريط العلوي */}
      <Navbar />

      {/* Hero Section قسم الهيرو */}
      <Hero />

      {/* About Section قسم من نحن */}
      <About />

      {/* Projects Section قسم الأعمال والخدمات */}
      <Projects />

      {/* Contact Section قسم التواصل */}
      <Contact />

      {/* Footer الفوتر */}
      <Footer />

      {/* Fixed WhatsApp Button زر الواتساب العائم في أسفل اليمين */}
      <WhatsAppButton />
    </main>
  );
}

export default App;