'use client'

import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col  gap-18 py-28 px-4 md:px-52 relative">
        <motion.div
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
        className="font-primary text-5xl text-zinc-800 ">
            Work Flow
            <div className="font-secondary text-sm text-zinc-700">What happens after you decide to work with us.</div>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-32 relative">

          <div className="hidden md:block md:absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-300 z-0">
            <div className="absolute top-[4rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <div className="absolute top-[16rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <div className="absolute top-[28rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <div className="absolute top-[40rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
          </div>

          <motion.div
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
          className="font-secondary text-3xl hover:text-primary transition-all duration-300 z-10">
            Connect. <br />
            <span className="text-lg text-zinc-700 tracking-tight">
              Our team connects with you to understand your work and how we can help make a perfectly customized website for you.
            </span>
          </motion.div>
          <div className="hidden md:block"></div>

          <motion.div

          className="hidden md:block"></motion.div>
          <motion.div
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}} 
          className="font-secondary text-3xl hover:text-primary transition-all duration-300 z-10">
            Design. <br />
            <span className="text-lg text-zinc-700 tracking-tight">
              Our design team gets to work and puts together a beautiful UI uniquely made for you, depending on the information we got from our meeting.
            </span>
          </motion.div>

          <motion.div
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
          className="font-secondary text-3xl hover:text-primary transition-all duration-300 z-10">
            Develop. <br />
            <span className="text-lg text-zinc-700 tracking-tight">
              Our development team develops the best website specifically hand-crafted for your business, helping you reach the perfect audience.
            </span>
          </motion.div>
          <div className="hidden md:block"></div>

          <motion.div 
 
          className="hidden md:block"></motion.div>
          <motion.div 
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
          className="font-secondary text-3xl hover:text-primary transition-all duration-300 z-10">
            Deploy. <br />
            <span className="text-lg text-zinc-700 tracking-tight">
              Your website is then deployed on a custom domain which can be searched or shared among users.
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
}