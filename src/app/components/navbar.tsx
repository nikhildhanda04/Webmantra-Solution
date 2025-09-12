'use client'

import { motion } from "framer-motion"

export default function Navbar(){

        const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
        <>
        <motion.div 
        initial={{y:-25, opacity:0, filter:"blur(6px)"}}
        animate={{y:0, opacity:1, filter:"blur(0px)"}}
        transition={{duration:0.4, ease:"easeIn"}}
        className="flex flex-row fixed backdrop-blur-2xl items-center w-full justify-between px-4 md:px-36 py-6 z-99 bg-white/80">

            <div className="font-primary text-stone-900 text-2xl font-bold ">
                WebMantra Solutions
            </div>

            <div className="hidden md:flex flex-row gap-8 font-secondary">
                 <a 
                href="#features"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("features");
                }}
                 className="hover:text-primary transition-all duration-300 hover:underline underline-offset-3">Features</a>
                 <a 
                href="#about"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                }}
                 className="hover:text-primary transition-all duration-300 hover:underline underline-offset-3">Workflow</a>
                 <a 
                href="#reviews"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("reviews");
                }}
                 className="hover:text-primary transition-all duration-300 hover:underline underline-offset-3">Reviews</a>
                 <a 
                href="#faq"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("faq");
                }}
                 className="hover:text-primary transition-all duration-300 hover:underline underline-offset-3">Faq</a>
                 <a 
                href="#contact"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                }}
                 className="hover:text-primary transition-all duration-300 hover:underline underline-offset-3">Contact</a>

            </div>
        </motion.div>
        </>
    )
}