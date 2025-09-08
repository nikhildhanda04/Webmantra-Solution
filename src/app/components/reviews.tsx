'use client';
import { motion, PanInfo } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ReviewsCarousel() {
  const reviews = [
    {
      text: "WebMantra Solutions created a stunning, user-friendly website for my bakery in just two weeks! Their professional team captured my brand perfectly at an affordable price, with quick adjustments to minor color issues. Highly recommend for reliable web development!",
      author: "Ashley Landazo",
      title: "Co-Founder, EQ2",
      image: "/ashley.png"
    },
    {
      text: "I hired WebMantra for my portfolio site, and they delivered a sleek, responsive design in 10 days! Their communication was excellent, quickly incorporating feedback despite a limited initial design range. Perfect for freelancers on a budget!",
      author: "Rohan Mehta",
      title: "Freelance Graphic Designer",
      image: "/rohan.png"
    },
    {
      text: "WebMantra transformed my e-commerce site into a modern platform that boosted sales! Delivered in three weeks with great SEO, they fixed a minor payment gateway delay promptly. A fantastic choice for small businesses!",
      author: "Nilesh Kumar",
      title: "Owner, CraftyCorner",
      image: "/nilesh.png"
    },
    {
      text: "WebMantra built a visually appealing landing page for my startup in two weeks! Their part-time team delivered high quality despite tricky scheduling. Affordable and professional, they're ideal for startups!",
      author: "Vikram Singh",
      title: "Founder, TechTrend Innovations",
      image: "/vikram.png"
    },
    {
      text: "WebMantra crafted a clean, functional blog site for my travel content in 12 days! They fixed a mobile responsiveness issue quickly and delivered great value. A top pick for content creators!",
      author: "Ananya Rao",
      title: "Travel Blogger",
      image: "/ananyarao.png"
    }
  ];

  const duplicatedReviews = [...reviews, ...reviews];

  const [duration, setDuration] = useState(25);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setDuration(12);
      } else {
        setDuration(25);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile navigation functions
  const goNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % reviews.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev === 0 ? reviews.length - 1 : prev - 1);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Mobile swipe handlers
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        goPrev();
      } else {
        goNext();
      }
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-18 z-10 py-28 px-4">
        <motion.div 
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
        className="font-primary text-4xl font-medium text-left text-zinc-800">
          Trusted by Our Clients.
          <div className="font-secondary text-sm text-zinc-700">Top notch reviews from our clients.</div>
        </motion.div>
        
        <motion.div
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
        className="relative w-full py-8">
         
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="flex flex-col gap-4 border border-stone-200 p-6 bg-white shadow-lg cursor-grab active:cursor-grabbing select-none"
            >
              <div className="font-[poppins] text-sm tracking-tight text-zinc-700">
                {reviews[currentIndex].text}
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="relative w-10 h-10">
                  <Image
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].author}
                    fill
                    className="rounded-full border border-stone-200 object-cover"
                    draggable={false}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-[poppins] font-medium text-black text-base uppercase">
                    {reviews[currentIndex].author}
                  </div>
                  <div className="font-[poppins] text-zinc-600 text-xs">
                    {reviews[currentIndex].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile navigation arrows */}
          <button
            onClick={goPrev}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 shadow-lg transition-all duration-200 border border-stone-200"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goNext}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 shadow-lg transition-all duration-200 border border-stone-200"
            aria-label="Next review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index 
                    ? 'bg-zinc-800' 
                    : 'bg-zinc-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <div className="text-center mt-4">
            <span className="text-xs text-zinc-500 bg-white/80 px-3 py-1 rounded-full">
              Swipe or use arrows to browse
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <motion.div 
      initial={{opacity:0, y:20, filter:"blur(6px)"}}
    animate={{opacity:1, y:0, filter:"blur(0px)"}}
    transition={{duration:0.6, ease:"easeIn"}}
      className="flex flex-col gap-18 z-10 py-28 px-52">
        <div className="font-primary text-5xl font-medium text-left text-zinc-800">
          Trusted by Our Clients.
          <div className="font-secondary text-sm text-zinc-700">Top notch reviews from our clients.</div>
        </div>
        
        <div className="relative w-full overflow-hidden text-neutral-500 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"
          />
          
          <motion.div
            className="flex items-center"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: duration,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.author}-${index}`}
                className="flex flex-col gap-4 border border-stone-200 p-6 rounded-2xl min-w-[400px] max-w-[400px] mx-4 bg-white flex-shrink-0 select-none"
              >
                <div className="font-[poppins] text-base tracking-tight text-zinc-700">
                  {review.text}
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="relative w-10 h-10">
                    <Image
                      src={review.image}
                      alt={review.author}
                      fill
                      className="rounded-full border border-stone-200 object-cover"
                      draggable={false}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-[poppins] font-medium text-black text-lg uppercase">
                      {review.author}
                    </div>
                    <div className="font-[poppins] text-zinc-600 text-xs">
                      {review.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </>
  );
}