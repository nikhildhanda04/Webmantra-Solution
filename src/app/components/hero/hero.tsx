'use client';
// import { BadgeIndianRupee } from "lucide-react";
// import Graph from "./graph";
// import Employee from "./employee";
// import Bar from "./bar";
import Image from "next/image";
// import Avatar from "./avatar";
import { motion } from "framer-motion";
import './hero.css'

export default function Hero(){

            const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

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

        {/* <div className="flex flex-col md:gap-8 gap-20 py-36 px-4 items-center z-10 overflow-hidden">
                        
            <motion.div 
            initial={{opacity:0, y:20, filter:"blur(6px)"}}
            whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            className="bg-gradient-to-bl md:hidden  text-xs md:text-lg from-1% from-[#6366f1]/[0.3] to-[#ffffff] font-[poppins] text-neutral-700 px-7 py-2 border border-stone-200 rounded-full">
              <BadgeIndianRupee className="inline text-primary mr-1" />  reach levels you never knew existed 
            </motion.div>

            <motion.div 
            initial={{opacity:0, y:20, filter:"blur(6px)"}}
            whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            className="text-3xl md:text-7xl font-secondary font-medium text-center tracking-tight text-zinc-800">
                Elevate Your Business  with <br /> <span className="font-bold">Web Mantra Solutions</span>
            </motion.div>

            <motion.div 
            initial={{opacity:0, y:20, filter:"blur(6px)"}}
            whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn", delay:0.2}}
            className="text-sm md:text-lg font-para text-stone-400 md:px-96 text-center">
                Empowering your business with a stunning website that captivates your audience and drives results. <br />
                Our team of experts crafts custom solutions tailored to your unique needs, ensuring a seamless online presence that stands out in the digital landscape.
            </motion.div>
        </div>

        <div className="flex md:flex-row flex-col gap- mt-4 w-full  relative bottom-24 px-36">

            <motion.div
            initial={{opacity:0, filter:"blur(6px)"}}
            whileInView={{opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            >
            <motion.div 

            className="md:relative hidden md:flex flex-col gap-8 items-end bottom-8 right-12">
                <Avatar />

            <motion.div
            initial={{opacity:0, y:20, filter:"blur(6px)"}}
            whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
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
            whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            >
            <motion.div 
            initial={{y:7}}
            whileInView={{y:0}}
            transition={{duration:1.3, ease:"easeInOut", repeat:Infinity, repeatType:"reverse"}}
            className="relative md:block hidden top-4 right-8">
                <Graph />
            </motion.div>
            </motion.div>

            <motion.div
                                                initial={{opacity:0, y:20, filter:"blur(6px)"}}
            whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            >
            <motion.div 
            initial={{y:7}}
            whileInView={{y:0}}
            transition={{duration:1.5, ease:"easeInOut", repeat:Infinity, repeatType:"reverse"}}
            className="relative md:block hidden">
                <Bar />
            </motion.div>
            </motion.div>
           
        </div> */}


            <div className="flex flex-row z-80 pt-36 py-16 px-4 md:px-44 w-full items-center">
            <div className="flex flex-col gap-8 items-start w-full">

                <motion.div 
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
                className="font-primary font-bold tracking-tight text-4xl md:text-7xl ">
                    Building imapctful <br /> web solutions <br /> for business.
                </motion.div>
                <motion.div 
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.8, ease:"easeIn"}}
                className="font-secondary text-sm md:text-base text-zinc-400">
                    we build top notch and high value websites for you. Every website we  build is unique and customized for you,  helping you reach the digital presence that you deserve. 
                </motion.div>

                <motion.div 
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:1, ease:"easeIn"}}
                className="flex flex-row gap-8 mt-6 md:mt-12">
                <a 
                href="#contact"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                }}
                className="font-secondary font-medium text-sm md:text-xl border border-stone-700 text-stone-200 bg-blue-600 px-7 py-3 md:py-4 rounded-full hover:-top-1 relative hover:shadow-[0px_4px_2px_rgba(0,0,0,0.9)] active:top-0 active:shadow-[0px_0px_0px_rgba(0,0,0,0,)] transition-all duration-100">
                    Book a Call
                </a>
                <a 
                href="#reviews"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("reviews")
                }}
                className="font-secondary font-medium text-sm md:text-xl border border-stone-700 text-stone-800 px-7 py-3 md:py-4 rounded-full hover:-top-1 relative hover:shadow-[0px_4px_2px_rgba(0,0,0,0.9)] active:top-0 active:shadow-[0px_0px_0px_rgba(0,0,0,0,)] transition-all duration-100">
                    Check Reviews
                </a>
                </motion.div>

                <div className="flex flex-row gap-12 mt-16 justify-between w-full items-center">
                        <motion.div 
                                initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
                        className="flex flex-col gap- text-center md:text-left tracking-tight">

                            <div className="font-secondary font-bold tracking-tight text-2xl md:text-5xl text-zinc-600 ">
                                25+
                            </div>
                            <div className="font-secondary text-base md:text-lg text-zinc-600">
                               Happy Clients
                            </div>


                        </motion.div>

                        <motion.div 
                                initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.8, ease:"easeIn"}}
                        className="flex flex-col text-center md:text-left tracking-tight">

                            <div className="font-secondary font-bold tracking-tight text-2xl md:text-5xl text-zinc-600 ">
                                60+
                            </div>
                            <div className="font-secondary text-base md:text-lg text-zinc-600">
                                Positive Reviews
                            </div>


                        </motion.div>

                        <motion.div 
                                initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:1, ease:"easeIn"}}
                        className="flex flex-col gap-  text-center md:text-left tracking-tight">

                            <div className="font-secondary font-bold tracking-tight text-2xl md:text-5xl text-zinc-600 ">
                                98%
                            </div>
                            <div className="font-secondary text-base md:text-lg text-zinc-600">
                                Project Success Rate
                            </div>


                        </motion.div>
                        
                </div>



            </div>

           <motion.div 
                   initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
           className="relative md:block hidden">
                <motion.div
            initial={{y:20}}
            animate={{y:0}}
            transition={{duration:1.3, ease:"easeInOut", repeat:Infinity, repeatType:"reverse"}}
                className="w-200 h-180  relative">
                <Image
                    src="/mac.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority // Critical for above-the-fold images
                quality={85} // Reduced from default 100
                placeholder="blur" // Add blur placeholder
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2jJqx3tZJlF9vNqKFenDsrMrJatVKBU1bC2XFvTrBaARRQdWgDM="
                />
                </motion.div>
                <motion.div 
            initial={{y:16}}
            animate={{y:0}}
            transition={{duration:1.6, ease:"easeInOut", repeat:Infinity, repeatType:"reverse"}}
                className="w-120 h-120 absolute -top-20 -right-40 z-10">
                <Image
                    src="/phone.png"
                    alt=""
                    fill
                    priority // Critical for above-the-fold images
                quality={85} // Reduced from default 100
                placeholder="blur" // Add blur placeholder
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2jJqx3tZJlF9vNqKFenDsrMrJatVKBU1bC2XFvTrBaARRQdWgDM="
                    className="object-cover"
                />
                </motion.div>
                </motion.div>

            </div>
</div>



</div>
        </>
    )
}