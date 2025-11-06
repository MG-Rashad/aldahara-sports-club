// components/FootballSection.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FootballSection = () => {
  const { isArabic } = useLanguage();
  const [activeMatchTab, setActiveMatchTab] = useState('upcoming');

  // Refs to control the scroll-snap carousels
  const playersCarouselRef = useRef(null);
  const matchesCarouselRef = useRef(null);

  // --- DATA (No changes needed here) ---
  const teamMembers = [
    { id: 1, name: isArabic ? 'أحمد محمد' : 'Ahmed Mohamed', position: isArabic ? 'حارس مرمى' : 'Goalkeeper', number: 1, image: '/player1.jpg', age: 28, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 2, name: isArabic ? 'علي عبدالله' : 'Ali Abdullah', position: isArabic ? 'مدافع' : 'Defender', number: 4, image: '/player2.jpg', age: 26, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 3, name: isArabic ? 'محمود عمر' : 'Mahmoud Omar', position: isArabic ? 'لاعب وسط' : 'Midfielder', number: 8, image: '/player3.jpg', age: 24, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 4, name: isArabic ? 'يوسف إبراهيم' : 'Yousef Ibrahim', position: isArabic ? 'مهاجم' : 'Forward', number: 10, image: '/player4.jpg', age: 25, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 5, name: isArabic ? 'خالد سالم' : 'Khaled Salem', position: isArabic ? 'حارس مرمى' : 'Goalkeeper', number: 12, image: '/player5.jpg', age: 30, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 6, name: isArabic ? 'عمر فتحي' : 'Omar Fathi', position: isArabic ? 'مدافع' : 'Defender', number: 5, image: '/player6.jpg', age: 27, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 7, name: isArabic ? 'ياسر أحمد' : 'Yasser Ahmed', position: isArabic ? 'لاعب وسط' : 'Midfielder', number: 6, image: '/player7.jpg', age: 23, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 8, name: isArabic ? 'حسن علي' : 'Hassan Ali', position: isArabic ? 'مهاجم' : 'Forward', number: 9, image: '/player8.jpg', age: 29, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 9, name: isArabic ? 'محمد خليفة' : 'Mohammed Khalifa', position: isArabic ? 'مدافع' : 'Defender', number: 2, image: '/player9.jpg', age: 31, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 10, name: isArabic ? 'إبراهيم يوسف' : 'Ibrahim Yousef', position: isArabic ? 'لاعب وسط' : 'Midfielder', number: 7, image: '/player10.jpg', age: 22, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 11, name: isArabic ? 'طارق السيد' : 'Tarek Al-Sayed', position: isArabic ? 'مهاجم' : 'Forward', number: 11, image: '/player11.jpg', age: 26, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 12, name: isArabic ? 'عبدالرحمن علي' : 'Abdelrahman Ali', position: isArabic ? 'حارس مرمى' : 'Goalkeeper', number: 25, image: '/player12.jpg', age: 32, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 13, name: isArabic ? 'مصطفى حسن' : 'Mustafa Hassan', position: isArabic ? 'مدافع' : 'Defender', number: 3, image: '/player13.jpg', age: 28, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 14, name: isArabic ? 'حمزة عادل' : 'Hamza Adel', position: isArabic ? 'لاعب وسط' : 'Midfielder', number: 14, image: '/player14.jpg', age: 21, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 15, name: isArabic ? 'أحمد رامي' : 'Ahmed Rami', position: isArabic ? 'مهاجم' : 'Forward', number: 16, image: '/player15.jpg', age: 24, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 16, name: isArabic ? 'خالد محمود' : 'Khaled Mahmoud', position: isArabic ? 'لاعب وسط' : 'Midfielder', number: 18, image: '/player16.jpg', age: 25, nationality: isArabic ? 'ليبي' : 'Libyan' },
    { id: 17, name: isArabic ? 'ياسر خالد' : 'Yasser Khaled', position: isArabic ? 'مدافع' : 'Defender', number: 15, image: '/player17.jpg', age: 27, nationality: isArabic ? 'ليبي' : 'Libyan' },
  ];

  const upcomingMatches = [
    { id: 1, opponent: isArabic ? 'الأهلي طرابلس' : 'Al Ahli Tripoli', date: '2023-10-15', time: '19:00', home: true, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب الظهرة' : 'Aldahara Stadium' },
    { id: 2, opponent: isArabic ? 'التحدي' : 'Al Tahaddi', date: '2023-10-22', time: '16:00', home: false, league: isArabic ? 'كأس ليبيا' : 'Libyan Cup', venue: isArabic ? 'ملعب بنغازي' : 'Benghazi Stadium' },
    { id: 3, opponent: isArabic ? 'النصر بنغازي' : 'Al Nasr Benghazi', date: '2023-10-29', time: '18:00', home: true, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب الظهرة' : 'Aldahara Stadium' },
    { id: 4, opponent: isArabic ? 'الاتحاد' : 'Al Ittihad', date: '2023-11-05', time: '20:00', home: false, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب طرابلس' : 'Tripoli Stadium' },
    { id: 5, opponent: isArabic ? 'الشط' : 'Al Shat', date: '2023-11-12', time: '17:00', home: true, league: isArabic ? 'كأس ليبيا' : 'Libyan Cup', venue: isArabic ? 'ملعب الظهرة' : 'Aldahara Stadium' },
  ];

  const completedMatches = [
    { id: 1, opponent: isArabic ? 'الأهلي بنغازي' : 'Al Ahli Benghazi', date: '2023-09-10', time: '19:00', home: true, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب الظهرة' : 'Aldahara Stadium', result: 'W', score: '3-1', scorers: [isArabic ? 'محمد خليفة 15' : 'Mohammed Khalifa 15', isArabic ? 'يوسف إبراهيم 32' : 'Yousef Ibrahim 32', isArabic ? 'طارق السيد 78' : 'Tarek Al-Sayed 78'] },
    { id: 2, opponent: isArabic ? 'التحدي' : 'Al Tahaddi', date: '2023-09-17', time: '16:00', home: false, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب مصراتة' : 'Misrata Stadium', result: 'D', score: '2-2', scorers: [isArabic ? 'أحمد رامي 25' : 'Ahmed Rami 25', isArabic ? 'خالد سالم 67' : 'Khaled Salem 67'] },
    { id: 3, opponent: isArabic ? 'النصر بنغازي' : 'Al Nasr Benghazi', date: '2023-09-24', time: '18:00', home: true, league: isArabic ? 'كأس ليبيا' : 'Libyan Cup', venue: isArabic ? 'ملعب الظهرة' : 'Aldahara Stadium', result: 'W', score: '2-0', scorers: [isArabic ? 'ياسر أحمد 40' : 'Yasser Ahmed 40', isArabic ? 'حسن علي 85' : 'Hassan Ali 85'] },
    { id: 4, opponent: isArabic ? 'الاتحاد' : 'Al Ittihad', date: '2023-10-01', time: '20:00', home: false, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب طرابلس' : 'Tripoli Stadium', result: 'L', score: '1-2', scorers: [isArabic ? 'محمود عمر 55' : 'Mahmoud Omar 55'] },
    { id: 5, opponent: isArabic ? 'الشط' : 'Al Shat', date: '2023-10-08', time: '17:00', home: true, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب الظهرة' : 'Aldahara Stadium', result: 'W', score: '4-2', scorers: [isArabic ? 'طارق السيد 12' : 'Tarek Al-Sayed 12', isArabic ? 'يوسف إبراهيم 34' : 'Yousef Ibrahim 34', isArabic ? 'أحمد رامي 58' : 'Ahmed Rami 58', isArabic ? 'خالد محمود 72' : 'Khaled Mahmoud 72'] },
  ];

  // --- SCROLL CONTROL FUNCTIONS ---
  const scrollCarousel = (ref, direction) => {
    if (!ref.current) return;
    const scrollAmount = ref.current.firstElementChild.offsetWidth + 24; // 24px = gap-6
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // --- HELPER FUNCTIONS ---
  const getResultColor = (result) => {
    switch (result) {
      case 'W': return 'bg-green-600';
      case 'L': return 'bg-red-600';
      case 'D': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getResultText = (result) => {
    switch (result) {
      case 'W': return isArabic ? 'فوز' : 'Win';
      case 'L': return isArabic ? 'خسارة' : 'Loss';
      case 'D': return isArabic ? 'تعادل' : 'Draw';
      default: return '';
    }
  };

  return (
    <section id="football" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.h2 className={`text-5xl md:text-6xl font-bold text-black mb-4 ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'فريق كرة القدم' : 'Football Team'}
          </motion.h2>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-red-600 to-red-800"></div>
        </motion.div>

        {/* Team Players Carousel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="p-8 border border-gray-800 shadow-2xl bg-gradient-to-b from-gray-900 to-black rounded-2xl">
            {/* Carousel Header */}
            <div className="flex items-center justify-between mb-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCarousel(playersCarouselRef, 'left')}
                className="p-3 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700"
                aria-label="Previous players"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>

              <h3 className={`text-2xl font-bold text-white ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'لاعبو الفريق' : 'Team Players'}
              </h3>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCarousel(playersCarouselRef, 'right')}
                className="p-3 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700"
                aria-label="Next players"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>

            {/* NEW: The CSS Scroll-Snap Carousel Container */}
            <div
              ref={playersCarouselRef}
              className="flex gap-6 pb-4 overflow-x-auto scroll-smooth scroll-snap-container"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for cleaner look
            >
              {teamMembers.map((player, index) => (
                <motion.div
                  key={player.id}
                  // NEW: Scroll-snap class for the child item
                  className="flex-none w-80 scroll-snap-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, root: playersCarouselRef.current }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="relative overflow-hidden transition-all duration-500 transform border-4 border-gray-800 shadow-2xl h-96 rounded-xl group-hover:scale-105 group-hover:border-red-600">
                    <Image
                      src={player.image}
                      alt={`${player.name}`}
                      layout="fill"
                      objectFit="cover"
                      quality={85}
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                    <div className="absolute flex items-center justify-center w-12 h-12 bg-red-600 border-2 border-white rounded-full shadow-lg top-4 start-4">
                      <span className="text-lg font-bold text-white">{player.number}</span>
                    </div>
                    <div className="absolute bottom-0 p-4 start-0 end-0">
                      <h4 className={`text-white font-bold text-lg mb-1 ${isArabic ? 'font-arabic' : ''}`}>{player.name}</h4>
                      <p className={`text-red-400 text-sm font-medium ${isArabic ? 'font-arabic' : ''}`}>{player.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Matches Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="p-8 border border-gray-800 shadow-2xl bg-gradient-to-b from-gray-900 to-black rounded-2xl">
            {/* Match Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex p-1 bg-gray-800 rounded-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveMatchTab('upcoming')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeMatchTab === 'upcoming' ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' : 'text-gray-400 hover:text-white'
                  } ${isArabic ? 'font-arabic' : ''}`}
                >
                  {isArabic ? 'المباريات القادمة' : 'Upcoming Matches'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveMatchTab('completed')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeMatchTab === 'completed' ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' : 'text-gray-400 hover:text-white'
                  } ${isArabic ? 'font-arabic' : ''}`}
                >
                  {isArabic ? 'المباريات المنتهية' : 'Completed Matches'}
                </motion.button>
              </div>
            </div>

            {/* Matches Carousel Header */}
            <div className="flex items-center justify-between mb-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCarousel(matchesCarouselRef, 'left')}
                className="p-3 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700"
                aria-label="Previous matches"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <h3 className={`text-2xl font-bold text-white ${isArabic ? 'font-arabic' : ''}`}>
                {activeMatchTab === 'upcoming' ? (isArabic ? 'المباريات القادمة' : 'Upcoming Matches') : (isArabic ? 'المباريات المنتهية' : 'Completed Matches')}
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollCarousel(matchesCarouselRef, 'right')}
                className="p-3 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700"
                aria-label="Next matches"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>

            {/* NEW: Matches Scroll-Snap Carousel */}
            <div
              ref={matchesCarouselRef}
              className="flex gap-6 pb-4 overflow-x-auto scroll-smooth scroll-snap-container"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
            >
              {(activeMatchTab === 'upcoming' ? upcomingMatches : completedMatches).map((match, index) => (
                <motion.div
                  key={`${match.id}-${activeMatchTab}`}
                  className="flex-none w-96 scroll-snap-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, root: matchesCarouselRef.current }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {activeMatchTab === 'upcoming' ? (
                    <div className="h-full p-6 transition-all duration-300 transform border-l-4 border-red-600 shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 hover:shadow-xl">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <h4 className={`font-bold text-white text-lg mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                            {isArabic ? 'نادي الظهرة' : 'Aldahara SC'} {match.home ? 'vs' : '@'} {match.opponent}
                          </h4>
                          <div className="flex items-center mb-3 space-x-4 text-sm text-gray-400">
                            <span className={`flex items-center ${isArabic ? 'font-arabic' : ''}`}>
                              <svg className="w-4 h-4 me-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              {match.date}
                            </span>
                            <span className={`flex items-center ${isArabic ? 'font-arabic' : ''}`}>
                              <svg className="w-4 h-4 me-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              {match.time}
                            </span>
                          </div>
                          <p className={`text-sm text-gray-400 ${isArabic ? 'font-arabic' : ''}`}>{match.venue}</p>
                        </div>
                        <div className={`inline-block px-4 py-2 mt-4 rounded-full text-sm font-bold shadow-lg ${
                          match.home ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                        }`}>
                          {match.home ? (isArabic ? 'الملعب' : 'Home') : (isArabic ? 'خارج' : 'Away')}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full p-6 transition-all duration-300 transform border-l-4 border-blue-600 shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 hover:shadow-xl">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className={`font-bold text-white text-lg ${isArabic ? 'font-arabic' : ''}`}>
                              {isArabic ? 'نادي الظهرة' : 'Aldahara SC'} {match.home ? 'vs' : '@'} {match.opponent}
                            </h4>
                            <div className={`px-3 py-1 rounded-full text-xs font-bold ${getResultColor(match.result)} text-white`}>
                              {getResultText(match.result)} {match.score}
                            </div>
                          </div>
                          <p className={`text-sm text-gray-400 ${isArabic ? 'font-arabic' : ''}`}>{match.date}</p>
                        </div>
                        <div className="mt-3">
                          <h5 className={`text-white font-semibold text-sm mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                            {isArabic ? 'الهداف' : 'Scorers'}:
                          </h5>
                          <div className="space-y-1">
                            {match.scorers.map((scorer, scorerIndex) => (
                              <p key={scorerIndex} className={`text-yellow-400 text-xs ${isArabic ? 'font-arabic' : ''}`}>
                                ⚽ {scorer}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="p-10 text-white border border-gray-800 shadow-2xl bg-gradient-to-r from-black to-gray-900 rounded-2xl">
            <motion.h3 className={`text-3xl font-bold mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'احصل على تذاكرك' : 'Get Your Tickets'}
            </motion.h3>
            <p className={`mb-8 text-lg text-gray-300 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'انضم إلينا في الملعب لدعم فريقك' : 'Join us at the stadium to support your team'}
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 font-bold text-center text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-xl"
            >
              {isArabic ? 'اشتر الآن' : 'Buy Now'}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FootballSection;