import { Check } from 'lucide-react'

export default function Pricing(){
    return(
        <>
        <div className="flex flex-col gap-36 py-28 px-24 tracking-tight">

            <div className="font-secondary font-medium text-5xl text-zinc-800">
               Pricing
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between">

                <div className="flex p-12 border border-neutral-700 rounded-2xl flex-col gap-12 shadow-[0px_7px_13px_rgba(0,0,0,0.4)]">
                    <div className="font-secondary font-medium text-3xl">
                        Portfolio <br/> <span className="font-normal text-xl text-zinc-500">Perfect for individuals, showing their skills and thier experiences</span>
                    </div>
                    <div className="font-secondary font-bold text-5xl">
                        $180 <span className="text-sm font-normal text-zinc-500">*vaires depending on your website</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Static Website </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Unique Design </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Fully Responsive </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Fully Responsive </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Fully Responsive </div>
                    </div>
                </div>


                <div className="flex flex-col gap-12 bg-primary/[0.8] backdrop-blur-2xl p-12 relative bottom-24 rounded-2xl shadow-[0px_7px_13px_rgba(0,0,0,0.4)]">
                    <div className="font-secondary font-medium text-zinc-200 text-3xl">
                        Portfolio <br/> <span className="font-normal text-xl text-zinc-300">Perfect for individuals, showing their skills and thier experiences</span>
                    </div>
                    <div className="font-secondary text-zinc-200 font-bold text-5xl">
                        $180 <span className="text-sm font-normal text-zinc-300">*vaires depending on your website</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='gap-2 items-center font-para text-lg text-zinc-300 flex flex-row'><Check/> Static Website </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-300 flex flex-row'><Check/> Unique Design </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-300 flex flex-row'><Check/> Fully Responsive </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-300 flex flex-row'><Check/> Fully Responsive </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-300 flex flex-row'><Check/> Fully Responsive </div>
                    </div>
                </div>


                <div className="flex p-12 border border-neutral-700 rounded-2xl flex-col gap-12 shadow-[0px_7px_13px_rgba(0,0,0,0.4)]">
                    <div className="font-secondary font-medium text-3xl">
                        Portfolio <br/> <span className="font-normal text-xl text-zinc-500">Perfect for individuals, showing their skills and thier experiences</span>
                    </div>
                    <div className="font-secondary font-bold text-5xl">
                        $180 <span className="text-sm font-normal text-zinc-500">*vaires depending on your website</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Static Website </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Unique Design </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Fully Responsive </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Fully Responsive </div>
                        <div className='gap-2 items-center font-para text-lg text-zinc-600 flex flex-row'><Check/> Fully Responsive </div>
                    </div>
                </div>


            </div>

        </div>
        </>
    )
}