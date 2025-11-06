// components/Footer.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { isArabic } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    // ... (your footerLinks data is fine, no changes needed)
  ];

  return (
    <footer className="py-12 text-white bg-black">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* FIX: Add text-center for mobile, and text-left for larger screens */}
        <div className="grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-2 lg:grid-cols-4">
          {/* Club Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* FIX: Center the logo and title on mobile */}
            <div className={`flex items-center justify-center mb-4 space-x-3 md:justify-start ${isArabic ? 'space-x-reverse' : ''}`}>
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Club Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className={`text-xl font-bold ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'نادي الظهرة' : 'Aldahara SC'}
              </h3>
            </div>
            <p className={`text-gray-400 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'نادي الظهرة الرياضي، رمز الفخر والإنجاز في الرياضة الليبية' : 'Aldahara Sports Club, a symbol of pride and achievement in Libyan sports'}
            </p>
            {/* FIX: Center social icons on mobile */}
            <div className={`flex justify-center md:justify-start space-x-4 ${isArabic ? 'space-x-reverse' : ''}`}>
              {/* ... Social Icons ... */}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className={`text-lg font-bold mb-4 ${isArabic ? 'font-arabic' : ''}`}>{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      <a className={`text-gray-400 hover:text-white transition-colors duration-300 ${isArabic ? 'font-arabic' : ''}`}>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className={`text-gray-400 ${isArabic ? 'font-arabic' : ''}`}>
            &copy; {currentYear} {isArabic ? 'نادي الظهرة الرياضي. جميع الحقوق محفوظة.' : 'Aldahara Sports Club. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;