'use client';
import { motion } from 'framer-motion';
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
      text: "WebMantra built a visually appealing landing page for my startup in two weeks! Their part-time team delivered high quality despite tricky scheduling. Affordable and professional, they’re ideal for startups!",
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

  useEffect(() => {
    function handleResize() {
      // 768px is Tailwind's md breakpoint
      if (window.innerWidth < 768) {
        setDuration(12); // Faster on small screens
      } else {
        setDuration(25); // Slower on large screens
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-18 z-10 py-28 px-4 md:px-52">
        <div className="font-primary text-5xl font-medium text-left text-zinc-800">
          Trusted by Our Clients.
          <div className="font-secondary text-sm text-zinc-700">Top notch reviews from our clients.</div>
        </div>
        <div className="relative w-full overflow-hidden text-neutral-500 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent"
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
                className="flex flex-col gap-4 border border-stone-200 p-6 rounded-2xl min-w-[400px] max-w-[400px] mx-4 bg-white"
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
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </>
  );
}