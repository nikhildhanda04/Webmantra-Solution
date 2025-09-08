'use client'

import Qna from "./qna";
import { motion } from 'framer-motion'

export default function Queries() {

    const queries = [
        {
            question: "What is Next Hire?",
            answer: `Next Hire is an AI-powered job search platform that helps you find your dream job by matching and applying your for jobs best suited for you based on your resume and preferences.`
        },
        {
            question: "How does AI help in job search?",
            answer: `AI automates the process of matching your resume with job listings, analyzing your skills and preferences to suggest the best-fit roles. It also provides personalized job recommendations and insights to enhance your job search experience.`
        },
        {
            question: "What types of jobs can I find?",
            answer: `You can find a wide range of job listings across various industries and roles, including full-time, part-time, internships, and remote positions. The platform is designed to cater to diverse job seekers and employers.`
        },
        {
            question: "Is my data secure?",
            answer: `Yes, your data is secure with Next Hire. We prioritize user privacy and employ industry-standard security measures to protect your personal information. Your resume and job preferences are kept confidential and are only used to enhance your job search experience.`
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