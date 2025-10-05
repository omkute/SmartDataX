"use client";
import { motion, Variants } from "framer-motion";
import {
  Upload,
  Zap,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Ingest Any Data",
    icon: Upload,
    description:
      "Seamlessly collect structured & unstructured data from files, APIs, or streams.",
  },
  {
    title: "Process in Realtime",
    icon: Zap,
    description:
      "Stream, clean, and transform your data on the fly with high efficiency.",
  },
  {
    title: "Visual Dashboards",
    icon: BarChart3,
    description:
      "Build interactive dashboards with powerful visualizations .",
  },
  {
    title: "Scalable",
    icon: ShieldCheck,
    description:
      "Robust performance and scalable architecture.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
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

function Features() {
  return (
    <section className="relative z-10 py-20 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          We do data Analytics and <br />
          Business model solutions
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                className="bg-white dark:bg-[#1a1a1a]  border border-gray-200 dark:border-gray-800 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 ">
                  <div className="p-2 rounded-full bg-gradient-to-br from-teal-100 to-teal-300 dark:from-teal-700 dark:to-teal-900 text-teal-900 dark:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
