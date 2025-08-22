"use client";
import { motion, Variants } from "framer-motion";
import { ShinyTextBadge } from "@/components/costom/ShinyTextBadge";
import { TextAnimate } from "../magicui/text-animate";
import { h2 } from "framer-motion/client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "../ui/button";
import {
  
  ChartNoAxesColumnIncreasing,
  Presentation,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function HeroSection() {
  return (
    <section className="h-screen flex items-center">
      <div className="lg:px-[10vw] px-4 md:flex h-full lg:flex-row-reverse w-full gap-10 mt-[10vh] lg:mt-0 ">
        {/* Right Section - Animation */}
        <motion.div
          className="lg:max-w-[50%] my-auto "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <DotLottieReact
            src="/lottie/HeroAnimation.lottie"
            loop
            autoplay
            className="object-contain w-full h-auto"
          />
        </motion.div>

        {/* Left Section - Text */}
        <div className="lg:max-w-[53%] my-auto flex flex-col gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <ShinyTextBadge />
          </motion.div>

          <motion.h2
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-center lg:text-left"
          >
            A Unified Platform for Data{" "}
            <TextAnimate
              className="inline w-fit bg-gradient-to-r from-green-300 to-teal-200 bg-clip-text text-transparent"
              duration={0.5}
              animation="slideUp"
              as={h2}
            >
              Ingestion
            </TextAnimate>{" "}
            <TextAnimate
              className="inline w-fit bg-gradient-to-r from-yellow-400 to-rose-300 bg-clip-text text-transparent"
              duration={0.5}
              animation="slideUp"
              as={h2}
            >
              Processing
            </TextAnimate>{" "}
            &{" "}
            <TextAnimate
              className="inline w-fit bg-gradient-to-r from-purple-500 to-rose-300 bg-clip-text text-transparent"
              duration={0.5}
              animation="slideUp"
              as={h2}
            >
              Visualization
            </TextAnimate>
            .
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-sm text-gray-500/70 text-center lg:text-left"
          >
            Transform raw data into powerful insights through <br />
            automation, analytics, and full-stack web dashboards.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex justify-center lg:justify-start gap-4 mt-2"
          >
            <Button
              type="button"
              className="text-gray-900 bg-white shadow-md shadow-green-400 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
              <ChartNoAxesColumnIncreasing className="mr-2 h-4 w-4" />
              Get Started
            </Button>
            <Button
              type="button"
              className="text-gray-900 bg-white shadow-md shadow-blue-400 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
              <Presentation className="mr-2 h-4 w-4" />
              Book a Meet
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
