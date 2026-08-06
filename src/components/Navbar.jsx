import { useState } from 'react';
import logo from '../assets/X.png';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="flex items-center hover:scale-105 transition-transform">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm uppercase tracking-widest hover:text-blue-600 transition-colors duration-300">
                {link.name}
              </a>
            </li>
          ))}
          
          {/* Social Icons */}
          <li className="flex space-x-5 pl-4 border-l border-gray-200">
            <a href="https://www.instagram.com/sharp_edge_studio.dev?igsh=MTR4cGM1dmp1dXllMA==" className="text-gray-600 hover:text-pink-400 transition-colors"><FaInstagram size={18} /></a>
            <a href="https://www.tiktok.com/@sharpedgestudio?_r=1&_d=em96i73j02j4bi&sec_uid=MS4wLjABAAAA4Nc6Zp7aC-_E0YNNdGA_zrnwcr0AkXT061SqF1F6kKMSkkAiOBpjiLuRITAgMpNj&share_author_id=7667998371017786376&sharer_language=en&source=h5_m&u_code=f4khik3845lff3&timestamp=1785442492&user_id=7667998371017786376&sec_user_id=MS4wLjABAAAA4Nc6Zp7aC-_E0YNNdGA_zrnwcr0AkXT061SqF1F6kKMSkkAiOBpjiLuRITAgMpNj&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7668225254511347474&share_link_id=e5e3006c-18b4-4e25-aaf0-8781ddfc307c&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&share_enter_from=settings_page&item_author_type=1&enable_checksum=1" className="text-gray-600 hover:text-black transition-colors"><FaTiktok size={18} /></a>
            <a href="https://wa.me/21290231048" className="text-gray-600 hover:text-green-600 transition-colors"><FaWhatsapp size={18} /></a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 p-2">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu - تم دمج الأيقونات هنا أيضاً */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="p-6 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={toggleMenu} className="text-gray-700 uppercase tracking-widest text-sm font-semibold">
              {link.name}
            </a>
          ))}
          {/* Mobile Social Icons */}
          <div className="flex space-x-6 pt-4 border-t w-full justify-center">
             <a href="https://www.instagram.com/sharp_edge_studio.dev?igsh=MTR4cGM1dmp1dXllMA==" className="text-gray-300 hover:text-pink-600"><FaInstagram size={22} /></a>
              <a href="https://www.tiktok.com/@sharpedgestudio?_r=1&_d=em96i73j02j4bi&sec_uid=MS4wLjABAAAA4Nc6Zp7aC-_E0YNNdGA_zrnwcr0AkXT061SqF1F6kKMSkkAiOBpjiLuRITAgMpNj&share_author_id=7667998371017786376&sharer_language=en&source=h5_m&u_code=f4khik3845lff3&timestamp=1785442492&user_id=7667998371017786376&sec_user_id=MS4wLjABAAAA4Nc6Zp7aC-_E0YNNdGA_zrnwcr0AkXT061SqF1F6kKMSkkAiOBpjiLuRITAgMpNj&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7668225254511347474&share_link_id=e5e3006c-18b4-4e25-aaf0-8781ddfc307c&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&share_enter_from=settings_page&item_author_type=1&enable_checksum=1" className="text-gray-500 hover:text-black"><FaTiktok size={22} /></a>
             <a href="https://wa.me/212690231048" className="text-gray-300 hover:text-green-600"><FaWhatsapp size={22} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
}