'use client';
// import { BadgeIndianRupee } from "lucide-react";
import Graph from "./graph";
import Employee from "./employee";
import Bar from "./bar";
import Avatar from "./avatar";
import { motion } from "framer-motion";

export default function Hero(){
    return(
        <>
<div>
<div className="w-full flex flex-col min-h-screen">
<div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />

        <div className="flex flex-col gap-8 py-36 px-4 items-center z-10">
{/*             
            <div className="bg-gradient-to-bl text-xs md:text-lg from-1% from-[#6366f1]/[0.3] to-[#ffffff] font-[poppins] text-neutral-700 px-7 py-2 border border-stone-200 rounded-full">
              <BadgeIndianRupee className="inline text-primary mr-1" />  reach levels you never knew existed 
            </div> */}

            <motion.div 
            initial={{opacity:0, y:20, filter:"blur(6px)"}}
            animate={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            className="text-3xl md:text-7xl font-secondary font-medium text-center tracking-tight text-zinc-800">
                Elevate Your Business  with <br /> <span className="font-bold">Web Mantra Solutions</span>
            </motion.div>

            <motion.div 
            initial={{opacity:0, y:20, filter:"blur(6px)"}}
            animate={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn", delay:0.2}}
            className="text-sm md:text-lg font-para text-stone-400 md:px-96 text-center">
                Empowering your business with a stunning website that captivates your audience and drives results. <br />
                Our team of experts crafts custom solutions tailored to your unique needs, ensuring a seamless online presence that stands out in the digital landscape.
            </motion.div>
        </div>

        <div className="flex md:flex-row flex-col gap- mt-4 w-full  relative bottom-24 px-36">

            <motion.div
            initial={{opacity:0, filter:"blur(6px)"}}
            animate={{opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            >
            <motion.div 

            className="md:relative hidden md:flex flex-col gap-8 items-end bottom-8 right-12">
                <Avatar />

            <motion.div
                        initial={{opacity:0, y:20, filter:"blur(6px)"}}
            animate={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            >
            <motion.div
            initial={{y:7}}
            animate={{y:0}}
            transition={{duration:1.3, ease:"easeInOut", repeat:Infinity, repeatType:"reverse", delay:0.8}}
            className="md:flex hidden"
            >
                <Employee />
            </motion.div>
            </motion.div>
            
            </motion.div>
            </motion.div>

            <motion.div
                                    initial={{opacity:0, y:20, filter:"blur(6px)"}}
            animate={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            >
            <motion.div 
            initial={{y:7}}
            animate={{y:0}}
            transition={{duration:1.3, ease:"easeInOut", repeat:Infinity, repeatType:"reverse"}}
            className="relative md:block hidden top-4 right-8">
                <Graph />
            </motion.div>
            </motion.div>

            <motion.div
                                                initial={{opacity:0, y:20, filter:"blur(6px)"}}
            animate={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            >
            <motion.div 
            initial={{y:7}}
            animate={{y:0}}
            transition={{duration:1.5, ease:"easeInOut", repeat:Infinity, repeatType:"reverse"}}
            className="relative md:block hidden">
                <Bar />
            </motion.div>
            </motion.div>
           
        </div>
</div>



</div>
        </>
    )
}