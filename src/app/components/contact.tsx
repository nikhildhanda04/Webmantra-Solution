import { Phone, Mail } from 'lucide-react'
 
export default function ContactUs(){
    return(
        <>
        <div className="flex flex-col w-full justify-between gap-18 py-28 px-4 md:px-52">

            <div className="font-primary text-5xl">
                Get in Touch
            <div className="font-secondary text-sm text-zinc-700">
                Please feel free to contact us anytime.
            </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:pr-56 ">

            <form className="bg-white  flex flex-col gap-12">

                <input 
                placeholder="Your Name"
                className="font-secondary border-b border-stone-300 p-4 text-xl"
                />

                                <input 
                placeholder="Your Email"
                className="font-secondary border-b border-stone-300 p-4 text-xl"
                />

                                <textarea 
                placeholder="Your Message"
                className="font-secondary border-b border-stone-300 p-4 text-xl"
                />

                <button className="bg-neutral-700 text-white mx-4 md:mx-0 font-secondary p-4 font-medium tracking-wide hover:shadow-[2px_3px_7px_rgba(0,0,0,0.4)] transition-all duration-300">
                    Send
                </button>
            </form>

            <div className="flex flex-col items-center text-center md:items-start gap-9">

                <div className="font-secondary text-3xl text-zinc-800">
                    Talk to us
                </div>

                <div className="flex flex-row gap-4 mt-4 text-xl tracking-tight">
                  <Phone />  +91 9710003577
                </div>
                <div className="flex flex-row gap-4 text-xl tracking-tight">
                  <Phone />  +91 8866349970
                </div>
                <div className="flex flex-row gap-4 text-center text-xl tracking-tight">
                  <Mail/>  webmantrasol@gmail.com
                </div>

            </div>

            </div>


        </div>
        </>
    )
}