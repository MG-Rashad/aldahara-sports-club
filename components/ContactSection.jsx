// components/ContactSection.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
// --- CHANGE 1: Import the useLanguage hook ---
import { useLanguage } from '../contexts/LanguageContext';

// --- CHANGE 2: Remove 'isArabic' from the props ---
const ContactSection = () => {
  // --- CHANGE 3: Get 'isArabic' from the global hook ---
  const { isArabic } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: isArabic ? 'العنوان' : 'Address',
      details: isArabic ? 'شارع الجماهيرية، طرابلس، ليبيا' : 'Al Jamahiriya Street, Tripoli, Libya'
    },
    {
      icon: '📞',
      title: isArabic ? 'الهاتف' : 'Phone',
      details: '+218 21 123 4567'
    },
    {
      icon: '✉️',
      title: isArabic ? 'البريد الإلكتروني' : 'Email',
      details: 'info@aldaharasc.ly'
    },
    {
      icon: '🕐',
      title: isArabic ? 'ساعات العمل' : 'Working Hours',
      details: isArabic ? 'الأحد - الخميس: 9:00 ص - 5:00 م' : 'Sun - Thu: 9:00 AM - 5:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'اتصل بنا' : 'Contact Us'}
          </h2>
          <div className="w-24 h-1 mx-auto bg-red-600"></div>
          <p className={`mt-4 text-lg text-gray-700 max-w-3xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'نحن هنا للإجابة على استفساراتك ومساعدتك' : 'We are here to answer your questions and assist you'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 bg-gray-100 rounded-lg">
              <h3 className={`text-2xl font-bold text-black mb-6 ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h3>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 mb-4 text-white bg-green-600 rounded-lg"
                >
                  <p className={`font-bold ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'شكراً لتواصلك معنا! سنتواصل معك قريباً.' : 'Thank you for contacting us! We will contact you soon.'}
                  </p>
                </motion.div>
              ) : null}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className={`block mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className={`block mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'الموضوع' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className={`block mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-4 py-3 font-bold text-white transition-colors duration-300 bg-red-600 rounded hover:bg-red-700"
                >
                  {isArabic ? 'إرسال الرسالة' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full p-8 text-white bg-black rounded-lg">
              <h3 className={`text-2xl font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className={`font-bold mb-1 ${isArabic ? 'font-arabic' : ''}`}>{info.title}</h4>
                      <p className={`${isArabic ? 'font-arabic' : ''}`}>{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;