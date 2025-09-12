'use client'

import Qna from "./qna";
import { motion } from 'framer-motion'

export default function Queries() {

    const queries = [
        {
            question: "What does your comapny do?",
            answer: `Our company specializes in designing and developing professional websites tailored for small businesses. We help businesses establish a strong online presence by creating modern, user-friendly, and responsive websites that not only showcase their products and services but also build credibility and attract more customers. Our focus is on delivering affordable, high-quality solutions that make it easier for small businesses to compete and grow in the digital world.`
        },
        {
            question: "How do you manage if the budget is limited?",
            answer: `We understand that many small businesses work with limited budgets, so we offer flexible solutions to fit their needs. We focus on the essentials first — creating a clean, functional, and responsive website that establishes their online presence. From there, we provide scalable options, so businesses can start small and add more features as they grow. This way, clients don’t feel pressured to overspend, and they still get a professional website that delivers value from day one.`
        },
        {
            question: "What types of websites do you specalize in?",
            answer: `YWe specialize in creating a wide range of websites tailored to different business needs. This includes business portfolio websites, e-commerce stores, service-based websites, restaurant and café sites, real estate listings, society/colony websites, educational or coaching platforms, blogs, and landing pages for marketing campaigns. Whether a client needs a simple informational site to showcase their brand or a more complex solution with features like online booking, payments, or product catalogs, we have the expertise to deliver it.`
        },
        {
            question: "What is your pricing model?",
            answer: `Our pricing model is structured to keep the process transparent and fair for both sides. We charge 40% of the total project cost after the design is finalized and approved by the client. The remaining 60% is due after the website is fully developed, tested, and deployed. This way, clients only pay once they’re satisfied with the design direction, and the final payment is made when the complete website is delivered live.`
        }
    ]
    return(
  <>
        <motion.div 
        
        className="flex flex-col gap-14 px-4 md:px-52 py-36 w-full">

            <motion.div 
            initial={{opacity:0, y:20, filter:"blur(6px)"}}
            whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
            transition={{duration:0.6, ease:"easeIn"}}
            className="font-primary text-5xl text-dark dark:text-light ">
                Queries
                <div className="font-secondary text-sm text-zinc-700">You got questions? We got you.</div>
            </motion.div>

            <motion.div
        initial={{opacity:0, y:20, filter:"blur(6px)"}}
        whileInView={{opacity:1, y:0, filter:"blur(0px)"}}
        transition={{duration:0.6, ease:"easeIn"}}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 justify-between">
                {queries.map((query, index) => (
                    <Qna key={index} question={query.question} answer={query.answer} />
                ))}
            </motion.div>

            </motion.div>

        </>
    )}