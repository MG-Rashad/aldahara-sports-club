// components/FanClubSection.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
// --- CHANGE 1: Import the useLanguage hook ---
import { useLanguage } from '../contexts/LanguageContext';

// --- CHANGE 2: Remove 'isArabic' from the props ---
const FanClubSection = () => {
  // --- CHANGE 3: Get 'isArabic' from the global hook ---
  const { isArabic } = useLanguage();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const benefits = [
    { id: 1, title: isArabic ? 'خصومات حصرية' : 'Exclusive Discounts', icon: '🎟️' },
    { id: 2, title: isArabic ? 'وصول مبكر للمباريات' : 'Early Match Access', icon: '🏟️' },
    { id: 3, title: isArabic ? 'لقاءات مع اللاعبين' : 'Player Meet & Greets', icon: '🤝' },
    { id: 4, title: isArabic ? 'هدايا حصرية' : 'Exclusive Merchandise', icon: '🎁' },
  ];

  return (
    <section id="fanclub" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? ' المشجعين' : 'Fans'}
          </h2>
          <div className="w-24 h-1 mx-auto bg-red-600"></div>
          <p className={`mt-4 text-lg text-gray-700 max-w-3xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'انضم إلى مجتمعنا من المشجعين المخلصين وكن جزءاً من تاريخ نادي الظهرة ' : 'Join our community of loyal fans and be part of Aldahara SC history'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl font-bold text-black mb-6 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'مزايا العضوية' : 'Membership Benefits'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 text-center bg-gray-100 rounded-lg"
                >
                  <div className="mb-2 text-3xl">{benefit.icon}</div>
                  <p className={`font-medium text-black ${isArabic ? 'font-arabic' : ''}`}>{benefit.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 text-white bg-black rounded-lg">
              <h3 className={`text-2xl font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'انضم إلى مجتمعنا من المشجعين' : 'Join the Fans'}
              </h3>
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 mb-4 text-white bg-green-600 rounded-lg"
                >
                  <p className={`font-bold ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'شكراً لانضمامك! سنتواصل معك قريباً.' : 'Thank you for joining! We will contact you soon.'}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className={`block mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-4 py-3 font-bold text-white transition-colors duration-300 bg-red-600 rounded hover:bg-red-700"
                >
                  {isArabic ? 'سجل الآن' : 'Register Now'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-bold text-black mb-6 text-center ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? ' المشجعين' : 'Fans'}
          </h3>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: item * 0.05 }}
                className="relative w-full pb-[75%] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={`/fan-${item}.jpg`}
                  alt={`Fan ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FanClubSection;