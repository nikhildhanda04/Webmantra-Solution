'use client'
import { motion } from 'framer-motion';

export default function Carousel() {
      const techStack = [
    { title: "Key Success Patners" },
    { title: "Nextjs" },
    { title: "Express" },
    { title: "Github" },
    { title: "Motion" },
    { title: "AWS" },
    { title: "Figma" },
    { title: "Python" },
    { title: "Pandas" },
    { title: "Matplotlib" },
    { title: "TensorFlow" }
  ];

    const duplicatedTechStack = [...techStack, ...techStack];

    return(
        <>
        <div className="flex flex-col gap-6 z-99 px-36 pt-68 pb-24">

            <div className="font-[poppins] text-3xl  font-medium text-center">
                Trusted by 50+ Companies
            </div>

            <div className="relative w-full overflow-hidden text-neutral-500 py-8">

      <motion.div 
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      className="absolute left-0 top-0 bottom-0 w-55 z-10 bg-gradient-to-r from-[#ffffff] to-transparent" />      
      <motion.div
        className="flex items-center"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedTechStack.map((tech, index) => (
          <div key={`${tech.title}-${index}`} className="flex items-center">
            <span className="text-xl font-bold uppercase tracking-wider px-8">
              {tech.title}
            </span>

          </div>
        ))}
      </motion.div>
      
      <div className="absolute right-0 top-0 bottom-0 w-55 z-10 bg-gradient-to-l from-[#ffffff] to-transparent" />
    </div>

        </div>
        </>
    )
}