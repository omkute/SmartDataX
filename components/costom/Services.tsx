"use client";
import { motion, Variants } from "framer-motion";
import { DatabaseZap, BarChart4, Brain, Building2 } from "lucide-react";
import { Button } from "../ui/button";

const services = [
  {
    title: "Data Engineering",
    icon: DatabaseZap,
    description:
      "Build scalable data pipelines, automate ingestion, and transform raw data into structured formats ready for analytics.",
  },
  {
    title: "Data Analytics",
    icon: BarChart4,
    description:
      "Deliver real-time dashboards and insights using modern visualization tools and intelligent data models.",
  },{
    title: "Business Inslights",
    icon: Building2,
    description:
      "Get informative and Insightful Inslights .",
  },{
    title: "Smarter Business with AI",
    icon: Brain,
    description:
      "AI adoption by delivering enterprise-grade AI solutions.",
  }
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function OurServices() {
  return (
    <section className="relative z-10 py-24 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Our Services
        </motion.h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore how SmartDataX helps you move from raw data to real insights with powerful backend systems and intelligent analytics.
        </p>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn}
                className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-[#1a1a1a] flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-primary">
                  <Icon size={28} className="text-teal-600 dark:text-teal-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  className="text-sm border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Learn More
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
