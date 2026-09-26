import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meaogooy", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-gray-600 text-lg">Have a project in mind? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-600">
                Ready to elevate your digital presence? Send us a message and let's discuss how we can bring your vision to life.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-900 font-medium">📧 dev@sharpcode.ma</p>
              <p className="text-gray-900 font-medium">📍 Morocco</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Name" required className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" type="email" placeholder="Email" required className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input name="subject" type="text" placeholder="Subject" required className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" placeholder="Your Message" rows="4" required className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p className={`text-center font-medium ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}