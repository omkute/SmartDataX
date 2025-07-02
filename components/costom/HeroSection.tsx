 "use client"
import { ShinyTextBadge } from "@/components/costom/ShinyTextBadge";
import { TextAnimate } from "../magicui/text-animate";
import { h2 } from "framer-motion/client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function HeroSection() {
  return (
    <section className=''>
        <div className='lg:px-[10vw] md:flex'>
            {/* left */}
            <div className=' lg:max-w-[50%]'>
                <ShinyTextBadge/>
                <h2 className="text-3xl lg:text-4xl font-bold text-center">
                    A Unified Platform for Data{" "}
                    <TextAnimate className="inline w-fit text-foreground/50" duration={0.5} animation="slideUp" as={h2}>
                        Ingestion
                    </TextAnimate>
                    ,{" "}
                    <TextAnimate className="inline w-fit text-foreground/50" duration={0.5} animation="slideUp" as={h2}>
                        Processing
                    </TextAnimate>
                     ,{" "} and {" "}
                    <TextAnimate className="inline w-fit text-foreground/50" duration={0.5} animation="slideUp" as={h2}>
                        Visualization
                    </TextAnimate>
                    .
                </h2>  </div>
            {/* right */}
            <div className=' lg:max-w-[50%]' >
                <DotLottieReact
                    src="/lottie/HeroAnimation.lottie"
                    loop
                    autoplay
                 />
            </div>
        </div>

    </section>
  )
}

export default HeroSection