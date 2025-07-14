"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function AboutUs() {
  return (
    <section className="relative z-10 py-24 h-screen bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* === Left: Image or Illustration === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
        >
          <Image
            src="/illustrations/data-team.svg"
            alt="Our Team"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* === Right: Text Content === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            At <span className="font-semibold text-teal-600 dark:text-teal-300">SmartDataX</span>, we &apos;re on a mission to empower organizations with end-to-end data solutions.
            From ingestion pipelines to real-time analytics dashboards, we simplify complexity and turn raw data into business-ready insights.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Our team blends engineering rigor with analytical clarity — building scalable, secure, and intelligent systems tailored to your domain. Whether you&apos;re starting your data journey or optimizing an existing stack, we&apos;re here to help.
          </p>
          <div>
            <Button
              variant="default"
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
