import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  MessageSquare, 
  Clock 
} from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

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
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: 'Oops! Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to connect. Please check your internet connection.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-slate-50 relative overflow-hidden">
      
      {/* خلفية جمالية مكملة للأقسام السابقة */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight"
          >
            Let's Build Something <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Great Together</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have a new project, an idea, or just want to say hello? Drop us a message and our team will get back to you shortly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/80 shadow-lg space-y-8">
              
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for New Projects
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ready to transform your ideas into reality? Reach out via form or direct contact.
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-5">
                <a 
                  href="mailto:dev@sharpcode.ma"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200/60 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider block">Email Us</span>
                    <span className="text-slate-900 font-bold group-hover:text-blue-600 transition-colors">dev@sharpcode.ma</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider block">Location</span>
                    <span className="text-slate-900 font-bold">Morocco</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider block">Response Time</span>
                    <span className="text-slate-900 font-bold">Within 24 Hours</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wider">Your Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="John Doe" 
                    required 
                    className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 placeholder-slate-400 text-sm font-medium transition duration-200" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wider">Your Email</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 placeholder-slate-400 text-sm font-medium transition duration-200" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wider">Subject</label>
                <input 
                  name="subject" 
                  type="text" 
                  placeholder="Project Inquiry / General Question" 
                  required 
                  className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 placeholder-slate-400 text-sm font-medium transition duration-200" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wider">Your Message</label>
                <textarea 
                  name="message" 
                  placeholder="Tell us about your project goals, timeline, or idea..." 
                  rows="4" 
                  required 
                  className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 placeholder-slate-400 text-sm font-medium transition duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg shadow-blue-500/25 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Notifications */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                      status.type === 'success' 
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}