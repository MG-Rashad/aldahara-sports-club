import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const FootballSection = ({ isArabic }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredPlayer, setHoveredPlayer] = useState(null);
  const [direction, setDirection] = useState(0);
  const [activeMatchTab, setActiveMatchTab] = useState('upcoming'); // 'upcoming' or 'completed'
  const [currentMatchSlide, setCurrentMatchSlide] = useState(0);
  const [matchDirection, setMatchDirection] = useState(0);
  
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
    { id: 6, opponent: isArabic ? 'السويحلي' : 'Al Suwaihli', date: '2023-09-03', time: '19:00', home: false, league: isArabic ? 'كأس ليبيا' : 'Libyan Cup', venue: isArabic ? 'ملعب مصراتة' : 'Misrata Stadium', result: 'W', score: '3-1', scorers: [isArabic ? 'علي عبدالله 20' : 'Ali Abdullah 20', isArabic ? 'مصطفى حسن 45' : 'Mustafa Hassan 45', isArabic ? 'حمزة عادل 89' : 'Hamza Adel 89'] },
    { id: 7, opponent: isArabic ? 'الأولمبي' : 'Al Olympi', date: '2023-08-27', time: '16:00', home: true, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب الظهرة' : 'Aldahara Stadium', result: 'D', score: '1-1', scorers: [isArabic ? 'عبدالرحمن علي 60' : 'Abdelrahman Ali 60'] },
    { id: 8, opponent: isArabic ? 'الدرع' : 'Al Diraa', date: '2023-08-20', time: '18:00', home: false, league: isArabic ? 'الدوري الليبي' : 'Libyan Premier League', venue: isArabic ? 'ملعب الزاوية' : 'Zawiya Stadium', result: 'W', score: '2-0', scorers: [isArabic ? 'ياسر أحمد 30' : 'Yasser Ahmed 30', isArabic ? 'حسن علي 75' : 'Hassan Ali 75'] },
  ];

  // Calculate how many players to show based on screen size
  const getPlayersPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl: 4 players
      if (window.innerWidth >= 768) return 2; // md: 2 players
      return 1; // mobile: 1 player
    }
    return 4; // default for server-side rendering
  };

  const getMatchesPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg: 3 matches
      if (window.innerWidth >= 768) return 2; // md: 2 matches
      return 1; // mobile: 1 match
    }
    return 3; // default for server-side rendering
  };

  const playersPerSlide = getPlayersPerSlide();
  const matchesPerSlide = getMatchesPerSlide();
  const totalSlides = Math.ceil(teamMembers.length / playersPerSlide);
  const totalMatchSlides = Math.ceil((activeMatchTab === 'upcoming' ? upcomingMatches : completedMatches).length / matchesPerSlide);
  const maxSlide = totalSlides - 1;
  const maxMatchSlide = totalMatchSlides - 1;

  const handlePrevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  const handleNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const handlePrevMatchSlide = () => {
    setMatchDirection(-1);
    setCurrentMatchSlide((prev) => (prev === 0 ? maxMatchSlide : prev - 1));
  };

  const handleNextMatchSlide = () => {
    setMatchDirection(1);
    setCurrentMatchSlide((prev) => (prev === maxMatchSlide ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setDirection(slideIndex > currentSlide ? 1 : -1);
    setCurrentSlide(slideIndex);
  };

  const goToMatchSlide = (slideIndex) => {
    setMatchDirection(slideIndex > currentMatchSlide ? 1 : -1);
    setCurrentMatchSlide(slideIndex);
  };

  const getVisiblePlayers = () => {
    const start = currentSlide * playersPerSlide;
    const end = start + playersPerSlide;
    return teamMembers.slice(start, end);
  };

  const getVisibleMatches = () => {
    const matches = activeMatchTab === 'upcoming' ? upcomingMatches : completedMatches;
    const start = currentMatchSlide * matchesPerSlide;
    const end = start + matchesPerSlide;
    return matches.slice(start, end);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const matchVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const getResultColor = (result) => {
    switch(result) {
      case 'W': return 'bg-green-600';
      case 'L': return 'bg-red-600';
      case 'D': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getResultText = (result) => {
    switch(result) {
      case 'W': return isArabic ? 'فوز' : 'Win';
      case 'L': return isArabic ? 'خسارة' : 'Loss';
      case 'D': return isArabic ? 'تعادل' : 'Draw';
      default: return '';
    }
  };

  return (
    <section id="football" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className={`text-5xl md:text-6xl font-bold text-black mb-4 ${isArabic ? 'font-arabic' : ''}`}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isArabic ? 'فريق كرة القدم' : 'Football Team'}
          </motion.h2>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-red-600 to-red-800"></div>
        </motion.div>

        {/* Team Players in Professional Film Frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative">
            {/* Enhanced Film Frame Container */}
            <div className="p-8 border border-gray-800 shadow-2xl bg-gradient-to-b from-gray-900 to-black rounded-2xl">
              {/* Enhanced Film Frame Header */}
              <div className="flex items-center justify-between mb-8">
                {/* Left Arrow with Enhanced Design */}
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevSlide}
                  className="flex items-center px-6 py-3 text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  aria-label="Previous players"
                >
                  <svg className={`w-6 h-6 ${isArabic ? 'ml-2' : 'mr-2'} group-hover:animate-pulse`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={`font-semibold ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'السابق' : 'Previous'}
                  </span>
                </motion.button>

                {/* Enhanced Title and Slide Info */}
                <div className="text-center">
                  <motion.h3 
                    className={`text-2xl font-bold text-white mb-2 ${isArabic ? 'font-arabic' : ''}`}
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {isArabic ? 'لاعبو الفريق' : 'Team Players'}
                  </motion.h3>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-sm text-gray-400">
                      {currentSlide + 1} {isArabic ? 'من' : 'of'} {totalSlides}
                    </span>
                  </div>
                </div>

                {/* Right Arrow with Enhanced Design */}
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextSlide}
                  className="flex items-center px-6 py-3 text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  aria-label="Next players"
                >
                  <span className={`font-semibold ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'التالي' : 'Next'}
                  </span>
                  <svg className={`w-6 h-6 ${isArabic ? 'mr-2' : 'ml-2'} group-hover:animate-pulse`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>

              {/* Enhanced Film Strip Top Border */}
              <div className="flex justify-between mb-6">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-red-600 to-red-800"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>

              {/* Enhanced Players Carousel */}
              <div className="relative overflow-hidden rounded-xl" style={{ height: '400px' }}>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    className="absolute inset-0 grid gap-6 p-2"
                    style={{
                      gridTemplateColumns: `repeat(${playersPerSlide}, 1fr)`,
                    }}
                  >
                    {getVisiblePlayers().map((player, index) => (
                      <motion.div
                        key={`${player.id}-${currentSlide}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group"
                        onMouseEnter={() => setHoveredPlayer(player.id)}
                        onMouseLeave={() => setHoveredPlayer(null)}
                      >
                        {/* Enhanced Player Card */}
                        <div className="relative h-full overflow-hidden transition-all duration-500 transform border-4 border-gray-800 shadow-2xl rounded-xl group-hover:scale-105 group-hover:border-red-600">
                          <Image
                            src={player.image}
                            alt={player.name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Enhanced Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                          
                          {/* Player Number Badge */}
                          <div className="absolute flex items-center justify-center w-12 h-12 bg-red-600 border-2 border-white rounded-full shadow-lg top-4 left-4">
                            <span className="text-lg font-bold text-white">{player.number}</span>
                          </div>
                          
                          {/* Enhanced Player Info */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 transform group-hover:translate-y-0">
                            <h4 className={`text-white font-bold text-lg mb-1 ${isArabic ? 'font-arabic' : ''}`}>{player.name}</h4>
                            <p className={`text-red-400 text-sm font-medium mb-2 ${isArabic ? 'font-arabic' : ''}`}>{player.position}</p>
                            
                            {/* Additional Info on Hover */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: hoveredPlayer === player.id ? 1 : 0, y: hoveredPlayer === player.id ? 0 : 20 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-1 text-xs text-white"
                            >
                              <p>{isArabic ? 'العمر' : 'Age'}: {player.age}</p>
                              <p>{isArabic ? 'الجنسية' : 'Nationality'}: {player.nationality}</p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced Film Strip Bottom Border */}
              <div className="flex justify-between mt-6">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-red-600 to-red-800"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>

              {/* Enhanced Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-3">
                {[...Array(totalSlides)].map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8 bg-gradient-to-r from-red-600 to-red-800' 
                        : 'w-3 bg-gray-600 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Matches Calendar Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative">
            {/* Enhanced Film Frame Container */}
            <div className="p-8 border border-gray-800 shadow-2xl bg-gradient-to-b from-gray-900 to-black rounded-2xl">
              {/* Match Tabs */}
              <div className="flex justify-center mb-8">
                <div className="flex p-1 bg-gray-800 rounded-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveMatchTab('upcoming')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      activeMatchTab === 'upcoming'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                        : 'text-gray-400 hover:text-white'
                    } ${isArabic ? 'font-arabic' : ''}`}
                  >
                    {isArabic ? 'المباريات القادمة' : 'Upcoming Matches'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveMatchTab('completed')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      activeMatchTab === 'completed'
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                        : 'text-gray-400 hover:text-white'
                    } ${isArabic ? 'font-arabic' : ''}`}
                  >
                    {isArabic ? 'المباريات المنتهية' : 'Completed Matches'}
                  </motion.button>
                </div>
              </div>

              {/* Enhanced Film Frame Header */}
              <div className="flex items-center justify-between mb-8">
                {/* Left Arrow */}
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevMatchSlide}
                  className="flex items-center px-6 py-3 text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  aria-label="Previous matches"
                >
                  <svg className={`w-6 h-6 ${isArabic ? 'ml-2' : 'mr-2'} group-hover:animate-pulse`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={`font-semibold ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'السابق' : 'Previous'}
                  </span>
                </motion.button>

                {/* Title and Slide Info */}
                <div className="text-center">
                  <motion.h3 
                    className={`text-2xl font-bold text-white mb-2 ${isArabic ? 'font-arabic' : ''}`}
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {activeMatchTab === 'upcoming' 
                      ? (isArabic ? 'المباريات القادمة' : 'Upcoming Matches')
                      : (isArabic ? 'المباريات المنتهية' : 'Completed Matches')
                    }
                  </motion.h3>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-sm text-gray-400">
                      {currentMatchSlide + 1} {isArabic ? 'من' : 'of'} {totalMatchSlides}
                    </span>
                  </div>
                </div>

                {/* Right Arrow */}
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextMatchSlide}
                  className="flex items-center px-6 py-3 text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  aria-label="Next matches"
                >
                  <span className={`font-semibold ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'التالي' : 'Next'}
                  </span>
                  <svg className={`w-6 h-6 ${isArabic ? 'mr-2' : 'ml-2'} group-hover:animate-pulse`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>

              {/* Enhanced Film Strip Top Border */}
              <div className="flex justify-between mb-6">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-red-600 to-red-800"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>

              {/* Matches Carousel */}
              <div className="relative overflow-hidden rounded-xl" style={{ height: activeMatchTab === 'upcoming' ? '300px' : '400px' }}>
                <AnimatePresence initial={false} custom={matchDirection}>
                  <motion.div
                    key={`${activeMatchTab}-${currentMatchSlide}`}
                    custom={matchDirection}
                    variants={matchVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    className="absolute inset-0 grid gap-6 p-2"
                    style={{
                      gridTemplateColumns: `repeat(${matchesPerSlide}, 1fr)`,
                    }}
                  >
                    {getVisibleMatches().map((match, index) => (
                      <motion.div
                        key={`${match.id}-${activeMatchTab}-${currentMatchSlide}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group"
                      >
                        {activeMatchTab === 'upcoming' ? (
                          /* Upcoming Match Card */
                          <div className="h-full p-6 transition-all duration-300 transform border-l-4 border-red-600 shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 hover:shadow-xl hover:scale-102">
                            <div className="flex flex-col justify-between h-full">
                              <div>
                                <h4 className={`font-bold text-white text-lg mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                                  {isArabic ? 'نادي الظهرة' : 'Aldahara SC'} {match.home ? 'vs' : '@'} {match.opponent}
                                </h4>
                                <div className="flex items-center mb-3 space-x-4 text-sm text-gray-400">
                                  <span className={`flex items-center ${isArabic ? 'font-arabic' : ''}`}>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    {match.date}
                                  </span>
                                  <span className={`flex items-center ${isArabic ? 'font-arabic' : ''}`}>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    {match.time}
                                  </span>
                                </div>
                                <div className="flex items-center mb-3 text-sm text-gray-400">
                                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                  </svg>
                                  <span className={isArabic ? 'font-arabic' : ''}>{match.league}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-400">
                                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                  <span className={isArabic ? 'font-arabic' : ''}>{match.venue}</span>
                                </div>
                              </div>
                              <div className="flex justify-end">
                                <div className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                                  match.home 
                                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' 
                                    : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                                }`}>
                                  {match.home ? (isArabic ? 'الملعب' : 'Home') : (isArabic ? 'خارج' : 'Away')}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Completed Match Card */
                          <div className="h-full p-6 transition-all duration-300 transform border-l-4 border-blue-600 shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl hover:from-gray-700 hover:to-gray-800 hover:shadow-xl hover:scale-102">
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
                                <div className="flex items-center mb-3 space-x-4 text-sm text-gray-400">
                                  <span className={`flex items-center ${isArabic ? 'font-arabic' : ''}`}>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    {match.date}
                                  </span>
                                  <span className={`flex items-center ${isArabic ? 'font-arabic' : ''}`}>
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    {match.time}
                                  </span>
                                </div>
                                <div className="flex items-center mb-3 text-sm text-gray-400">
                                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                  </svg>
                                  <span className={isArabic ? 'font-arabic' : ''}>{match.league}</span>
                                </div>
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
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced Film Strip Bottom Border */}
              <div className="flex justify-between mt-6">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-red-600 to-red-800"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>

              {/* Enhanced Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-3">
                {[...Array(totalMatchSlides)].map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToMatchSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentMatchSlide 
                        ? 'w-8 bg-gradient-to-r from-red-600 to-red-800' 
                        : 'w-3 bg-gray-600 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="p-10 text-white border border-gray-800 shadow-2xl bg-gradient-to-r from-black to-gray-900 rounded-2xl">
            <motion.h3 
              className={`text-3xl font-bold mb-4 ${isArabic ? 'font-arabic' : ''}`}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isArabic ? 'احصل على تذاكرك' : 'Get Your Tickets'}
            </motion.h3>
            <p className={`mb-8 text-lg text-gray-300 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'انضم إلينا في الملعب لدعم فريقك' : 'Join us at the stadium to support your team'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:scale-105"
            >
              {isArabic ? 'اشتر الآن' : 'Buy Now'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FootballSection;