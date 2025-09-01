import Image from "next/image";

import { motion } from "framer-motion";

export default function Avatar(){
    return(
        <>
        <motion.div 
        initial={{y:7}}
            animate={{y:0}}
            transition={{duration:1.5, ease:"easeInOut", repeat:Infinity, repeatType:"reverse", delay:0.9}}
        className="flex flex-row px-9 py-8 items-end bg-white/[0.8] backdrop-blur-lg shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-2xl">

            <div className="relative border-3 backdrop-blur-3xl border-white z-20 rounded-full p-2 w-20 h-20 -bottom-2 bg-white/[0.2]">
                <Image src="/avatar1.svg" alt="Avatar 1" fill className="obp-1 bg-white/[0.2] ject-cover rounded-full" />
            </div>

            <div className="relative border-3 backdrop-blur-3xl border-white z-80 rounded-full p-2 w-26 h-26 bg-white/[0.2] -ml-6">
                <Image src="/avatar2.svg" alt="Avatar 1" fill className="p-1 bg-white/[0.2] object-cover rounded-full" />
            </div>

            <div className="relative border-3 backdrop-blur-3xl border-white z-99 rounded-full p-2 w-36 h-36 bg-white/[0.2] -ml-8">
                <Image src="/avatar3.svg" alt="Avatar 1" fill className="p-1 bg-white/[0.2] object-cover rounded-full" />
            </div>

            <div className="relative border-3 backdrop-blur-3xl border-white z-80 rounded-full p-2 w-26 h-26 bg-white/[0.2] -ml-6">
                <Image src="/avatar4.svg" alt="Avatar 1" fill className="p-1 bg-white/[0.2] object-cover rounded-full" />
            </div>

            <div className="relative border-3 backdrop-blur-3xl border-white z-20 rounded-full p-2 w-20 h-20 -bottom-2 bg-white/[0.2] -ml-4">
                <Image src="/avatar5.svg" alt="Avatar 1" fill className="p-1 bg-white/[0.2] object-cover rounded-full" />
            </div>

        </motion.div>
        </>
    )
}