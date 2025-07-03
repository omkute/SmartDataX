 "use client"
import { ShinyTextBadge } from "@/components/costom/ShinyTextBadge";
import { TextAnimate } from "../magicui/text-animate";
import { h2 } from "framer-motion/client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function HeroSection() {
  return (
    <section className=' h-screen my-auto '>
        <div className='lg:px-[10vw] md:flex h-full lg:flex-row-reverse  '>
          
            {/* right */}
            <div className=' lg:max-w-[50%]' >
                <DotLottieReact
                    src="/lottie/HeroAnimation.lottie"
                    loop
                    autoplay
                 />
            </div>
              {/* left */}
            <div className=' lg:max-w-[53%] lg:my-auto my-9'>
                <ShinyTextBadge />
                <h2 className="text-4xl  lg:text-5xl font-bold text-center p-0">
                    A Unified Platform for Data{" "}
                    <TextAnimate className="p-0 inline w-fit bg-gradient-to-r from-green-300 to-teal-200 bg-clip-text text-transparent" duration={0.5} animation="slideUp" as={h2}>
                        Ingestion
                    </TextAnimate>
                    {" "}
                    <TextAnimate className="inline w-fit bg-gradient-to-r from-yellow-400 to-rose-300 bg-clip-text text-transparent" duration={0.5} animation="slideUp" as={h2}>
                        Processing
                    </TextAnimate>
                     {" "} & {" "}
                    <TextAnimate className="inline w-fit bg-gradient-to-r from-purple-500 to-rose-300 bg-clip-text text-transparent" duration={0.5} animation="slideUp" as={h2}>
                        Visualization
                    </TextAnimate>
                    .
                </h2> 
                <p className=" text-sm px-3 text-gray-500/60 text-center">Transform raw data into powerful insights through automation, analytics, and full-stack web dashboards.
                </p> </div>
        </div>

    </section>
  )
}

export default HeroSection