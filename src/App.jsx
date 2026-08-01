import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // لا تنسَ هذا السطر

function App() {
  return (
    <main className="bg-white"> {/* قمنا بإضافة خلفية موحدة */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer /> {/* إضافة الفوتر */}
    </main>
  );
}

export default App;