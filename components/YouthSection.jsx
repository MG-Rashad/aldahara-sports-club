import { motion } from 'framer-motion';
import Image from 'next/image';

const YouthSection = ({ isArabic }) => {
  const programs = [
    {
      id: 1,
      title: isArabic ? 'أكاديمية الشباب' : 'Youth Academy',
      description: isArabic ? 'برنامج تدريبي شامل للاعبين تتراوح أعمارهم بين 6-18 سنة' : 'Comprehensive training program for players aged 6-18',
      image: '/youth-academy.jpg',
      age: isArabic ? '6-18 سنة' : '6-18 years'
    },
    {
      id: 2,
      title: isArabic ? 'مخيمات الصيف' : 'Summer Camps',
      description: isArabic ? 'مخيمات تدريبية مكثفة خلال عطلة الصيف' : 'Intensive training camps during summer break',
      image: '/summer-camp.jpg',
      age: isArabic ? '8-16 سنة' : '8-16 years'
    },
    {
      id: 3,
      title: isArabic ? 'برنامج المواهب' : 'Talent Program',
      description: isArabic ? 'اكتشاف وتطوير المواهب الشابة الواعدة' : 'Discovering and developing promising young talents',
      image: '/talent-program.jpg',
      age: isArabic ? '10-17 سنة' : '10-17 years'
    }
  ];

  return (
    <section id="youth" className="py-12 bg-gray-100 section-compact">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'برامج الشباب' : 'Youth Programs'}
          </h2>
          <div className="w-24 h-1 mx-auto bg-red-600"></div>
          <p className={`mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'نستثمر في الجيل القادم من النجوم من خلال برامج تدريبية متخصصة وتطوير شامل' : 'We invest in the next generation of stars through specialized training programs and comprehensive development'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-lg font-bold text-black ${isArabic ? 'font-arabic' : ''}`}>{program.title}</h3>
                  <span className="px-2 py-1 text-xs text-white bg-red-600 rounded-full">
                    {program.age}
                  </span>
                </div>
                <p className={`text-gray-600 text-sm ${isArabic ? 'font-arabic' : ''}`}>{program.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 font-bold text-white transition-colors duration-300 bg-black rounded hover:bg-gray-800"
                >
                  {isArabic ? 'سجل الآن' : 'Register Now'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="p-6 text-white bg-black rounded-lg md:p-8">
            <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div>
                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? 'انضم إلى أكاديميتنا' : 'Join Our Academy'}
                </h3>
                <p className={`mb-4 md:mb-6 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? 'ساعدنا في اكتشاف وتطوير المواهب الشابة. اكتشف المزيد عن برامجنا وكيفية الانضمام.' : 'Help us discover and develop young talents. Learn more about our programs and how to join.'}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 font-bold text-white transition-colors duration-300 bg-red-600 rounded-full hover:bg-red-700 md:px-8"
                >
                  {isArabic ? 'اعرف المزيد' : 'Learn More'}
                </motion.button>
              </div>
              <div className="relative h-48 overflow-hidden rounded-lg md:h-56">
                <Image
                  src="/youth-training.jpg"
                  alt="Youth Training"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouthSection;