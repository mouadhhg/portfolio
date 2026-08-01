import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* العمود الأول: العلامة التجارية */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SHARP EDGE <span className="text-blue-500">STUDIO</span></h2>
          <p className="text-gray-400 leading-relaxed">
            Crafting the future of digital experiences. We turn your visionary ideas into 
            high-impact digital solutions.
          </p>
        </div>

        {/* العمود الثاني: روابط سريعة */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><a href="#home" className="text-gray-400 hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition">About Us</a></li>
            <li><a href="#projects" className="text-gray-400 hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* العمود الثالث: التواصل */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Connect</h3>
          <ul className="space-y-4 text-gray-400">
            <li>Agadir, Morocco</li>
            <li>contact@zaafanedigital.com</li>
            <li className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/sharp_edge_studio.dev?igsh=MTR4cGM1dmp1dXllMA==" className="hover:text-blue-500 transition">Instagram</a>
              <a href="https://wa.me/21290231048" className="hover:text-blue-500 transition">WhatsApp</a>
              <a href="https://www.tiktok.com/@sharpedgestudio?_r=1&_d=em96i73j02j4bi&sec_uid=MS4wLjABAAAA4Nc6Zp7aC-_E0YNNdGA_zrnwcr0AkXT061SqF1F6kKMSkkAiOBpjiLuRITAgMpNj&share_author_id=7667998371017786376&sharer_language=en&source=h5_m&u_code=f4khik3845lff3&timestamp=1785442492&user_id=7667998371017786376&sec_user_id=MS4wLjABAAAA4Nc6Zp7aC-_E0YNNdGA_zrnwcr0AkXT061SqF1F6kKMSkkAiOBpjiLuRITAgMpNj&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7668225254511347474&share_link_id=e5e3006c-18b4-4e25-aaf0-8781ddfc307c&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&share_enter_from=settings_page&item_author_type=1&enable_checksum=1" className="hover:text-blue-500 transition">Tiktok</a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* حقوق النشر - أضفت له أنيميشن بسيط أيضاً */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
      >
        <p>© {new Date().getFullYear()} SHARP EDGE STUDIO. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}