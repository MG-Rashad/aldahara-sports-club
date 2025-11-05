// components/BasketballSection.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
// --- CHANGE 1: Import the useLanguage hook ---
import { useLanguage } from '../contexts/LanguageContext';

// --- CHANGE 2: Remove 'isArabic' from the props ---
const BasketballSection = () => {
  // --- CHANGE 3: Get 'isArabic' from the global hook ---
  const { isArabic } = useLanguage();

  const achievements = [
    { id: 1, title: isArabic ? 'بطل الدوري الليبي 2022' : 'Libyan League Champions 2025', icon: '🏆' },
    { id: 2, title: isArabic ? 'كأس ليبيا 2021' : 'Libyan Cup 2025', icon: '🏆' },
    { id: 3, title: isArabic ? 'أفضل فريق دفاعي 2023' : 'Best Defensive Team 2025', icon: '🛡️' },
  ];

  const players = [
    { id: 1, name: isArabic ? 'خالد سالم' : 'Khaled Salem', number: 7, position: isArabic ? 'مدافع' : 'Guard' },
    { id: 2, name: isArabic ? 'عمر فتحي' : 'Omar Fathi', number: 10, position: isArabic ? 'لاعب وسط' : 'Forward' },
    { id: 3, name: isArabic ? 'ياسر أحمد' : 'Yasser Ahmed', number: 15, position: isArabic ? 'لاعب وسط' : 'Forward' },
    { id: 4, name: isArabic ? 'حسن علي' : 'Hassan Ali', number: 33, position: isArabic ? 'لاعب وسط' : 'Center' },
  ];

  return (
    <section id="basketball" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'فريق كرة السلة' : 'Basketball Team'}
          </h2>
          <div className="w-24 h-1 mx-auto bg-red-600"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg h-96"
          >
            <Image
              src="/basketball-team.jpg"
              alt="Basketball Team"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <h3 className={`text-3xl font-bold text-white ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'فريق الأبطال' : 'Team of Champions'}
              </h3>
            </div>
          </motion.div>

          {/* Team Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl font-bold text-black mb-6 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'إنجازات الفريق' : 'Team Achievements'}
            </h3>
            <div className="mb-8 space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-4 space-x-4 bg-gray-100 rounded-lg"
                >
                  <div className="text-3xl">{achievement.icon}</div>
                  <p className={`font-medium text-black ${isArabic ? 'font-arabic' : ''}`}>{achievement.title}</p>
                </motion.div>
              ))}
            </div>

            <h3 className={`text-2xl font-bold text-black mb-6 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'لاعبو الفريق' : 'Key Players'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {players.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 text-white bg-red-600 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl font-bold">#{player.number}</div>
                    <div>
                      <h4 className={`font-bold ${isArabic ? 'font-arabic' : ''}`}>{player.name}</h4>
                      <p className={`text-sm ${isArabic ? 'font-arabic' : ''}`}>{player.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BasketballSection;