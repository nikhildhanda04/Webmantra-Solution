'use client'

import { MonitorSmartphone, Compass, Figma, Anvil, Microscope, Earth } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
    return(
        <>
        <div className="flex flex-col gap-18 py-28 px-4 md:px-52">

            <motion.div 
            initial={{opacity:0, y:20, filter:"blur(6px)"}}
            whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            className="font-primary text-5xl">
            Features.
            <div className="font-secondary text-sm text-zinc-700">Some of what we offer.</div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

                <motion.div 
                initial={{opacity:0, y:20, filter:"blur(6px)"}}
                whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
                transition={{duration:0.8, ease:"easeIn"}}
                className="flex flex-col backdrop-blur-2xl gap-6 border border-stone-300 overflow-hidden px-6 py-8 rounded-xl hover:shadow-[3px_6px_9px_rgba(0,0,0,0.3)] transition-all duration-200 ease-easeIn shadow-[0px_3px_7px_rgba(0,0,0,0.17)]">
                    <div className="relative">
                    <MonitorSmartphone className="absolute -rotate-30 -top-15 -left-7  text-primary w-40 h-40 opacity-30"/>
                    </div>
                    <div className="broder flex flex-row ml-auto font-primary pr-10 font-bold text-6xl border-b-stone-200 ">
                        .01
                    </div>  
                    <div className="font-secondary font-medium tracking-tight text-2xl">
                        Responsive Design
                    </div>
                    <div className="font-para text-sm tracking-tight text-zinc-600">
                        We build fully responsive websites that adapt to any screen size, ensuring a smooth and consistent experience on desktops, tablets, and smartphones.
                    </div>
                </motion.div>

                    <motion.div 
                initial={{opacity:0, y:20, filter:"blur(6px)"}}
                whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
                transition={{duration:1, ease:"easeIn", }}
                    className="flex flex-col backdrop-blur-2xl overflow-hidden gap-6 border border-stone-300 px-6 py-8 rounded-xl hover:shadow-[3px_6px_9px_rgba(0,0,0,0.3)] transition-all duration-200 ease-easeIn shadow-[0px_3px_7px_rgba(0,0,0,0.17)]">
                    <div className="relative">
                    <Compass className="absolute -rotate-30 -top-15 -left-7  text-primary w-40 h-40 opacity-30"/>
                    </div>
                    <div className="broder flex flex-row ml-auto font-primary pr-10 font-bold text-6xl border-b-stone-200 ">
                        .02
                    </div>  
                    <div className="font-secondary font-medium tracking-tight text-2xl">
                        SEO Customization
                    </div>
                    <div className="font-para text-sm tracking-tight text-zinc-600">
                        We optimize your website with SEO customization, helping it rank higher on search engines and reach the right audience effectively.
                    </div>
                </motion.div>

                    <motion.div 
                initial={{opacity:0, y:20, filter:"blur(6px)"}}
                whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
                transition={{duration:1.2, ease:"easeIn", }}
                    className="flex flex-col backdrop-blur-2xl overflow-hidden gap-6 border border-stone-300 px-6 py-8 rounded-xl hover:shadow-[3px_6px_9px_rgba(0,0,0,0.3)] transition-all duration-200 ease-easeIn shadow-[0px_3px_7px_rgba(0,0,0,0.17)]">
                    <div className="relative">
                    <Figma className="absolute -rotate-30 -top-15 -left-7  text-primary w-40 h-40 opacity-30"/>
                    </div>
                    <div className="broder flex flex-row ml-auto font-primary pr-10 font-bold text-6xl border-b-stone-200 ">
                        .03
                    </div>  
                    <div className="font-secondary font-medium tracking-tight text-2xl">
                        Clean & Modern UI/UX
                    </div>
                    <div className="font-para text-sm tracking-tight text-zinc-600">
                        We design clean and modern UI/UX that enhances usability, engages visitors, and gives your website a professional look.
                    </div>
                </motion.div>

                    <motion.div 
                    initial={{opacity:0, y:20, filter:"blur(6px)"}}
                whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
                transition={{duration:1.4, ease:"easeIn",}}
                    className="flex flex-col backdrop-blur-2xl overflow-hidden gap-6 border border-stone-300 px-6 py-8 rounded-xl hover:shadow-[3px_6px_9px_rgba(0,0,0,0.3)] transition-all duration-200 ease-easeIn shadow-[0px_3px_7px_rgba(0,0,0,0.17)]">
                    <div className="relative">
                    <Anvil className="absolute -rotate-30 -top-15 -left-7  text-primary w-40 h-40 opacity-30"/>
                    </div>
                    <div className="broder flex flex-row ml-auto font-primary pr-10 font-bold text-6xl border-b-stone-200 ">
                        .04
                    </div>  
                    <div className="font-secondary font-medium tracking-tight text-2xl">
                        Custom Domain & Hosting
                    </div>
                    <div className="font-para text-sm tracking-tight text-zinc-600">
                        We provide custom domain and reliable hosting solutions, ensuring your website is secure, fast, and always accessible.
                    </div>
                </motion.div>

                    <motion.div 
                   initial={{opacity:0, y:20, filter:"blur(6px)"}}
                whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
                transition={{duration:1.6, ease:"easeIn", delay:0.1}} 
                    className="flex flex-col backdrop-blur-2xl overflow-hidden gap-6 border border-stone-300 px-6 py-8 rounded-xl hover:shadow-[3px_6px_9px_rgba(0,0,0,0.3)] transition-all duration-200 ease-easeIn shadow-[0px_3px_7px_rgba(0,0,0,0.17)]">
                    <div className="relative">
                    <Microscope className="absolute -rotate-30 -top-18 -left-9  text-primary w-40 h-40 opacity-30"/>
                    </div>
                    <div className="broder flex flex-row ml-auto font-primary pr-10 font-bold text-6xl border-b-stone-200 ">
                        .05
                    </div>  
                    <div className="font-secondary font-medium tracking-tight text-2xl">
                        Micro-interactions
                    </div>
                    <div className="font-para text-sm tracking-tight text-zinc-600">
                        We add subtle micro-interactions that make your website more engaging, intuitive, and enjoyable for users.
                    </div>
                </motion.div>

                    <motion.div
                    initial={{opacity:0, y:20, filter:"blur(6px)"}}
                whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
                transition={{duration:1.8, ease:"easeIn", delay:0.1}}
                    className="flex flex-col backdrop-blur-2xl overflow-hidden gap-6 border border-stone-300 px-6 py-8 rounded-xl hover:shadow-[3px_6px_9px_rgba(0,0,0,0.3)] transition-all duration-200 ease-easeIn shadow-[0px_3px_7px_rgba(0,0,0,0.17)]">
                    <div className="relative">
                    <Earth className="absolute -rotate-30 -top-15 -left-7  text-primary w-40 h-40 opacity-30"/>
                    </div>
                    <div className="broder flex flex-row ml-auto font-primary pr-10 font-bold text-6xl border-b-stone-200 ">
                        .06
                    </div>  
                    <div className="font-secondary font-medium tracking-tight text-2xl">
                        All Browser Friendly
                    </div>
                    <div className="font-para text-sm tracking-tight text-zinc-600">
                        We ensure your website works smoothly across all major browsers, delivering a consistent experience to every visitor.
                    </div>
                </motion.div>

                

            </div>


        </div>
      
        </>
    )
}