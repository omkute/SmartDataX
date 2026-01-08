"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ToolItem = {
  name: string;
  icon: string;
};
// dd

const defaultItems: ToolItem[] = [
  {
    name: "Python",
    icon: "/icons/python.png"
  },
  {
    name: "Azure-Blob",
    icon: "/icons/azure-blob.png"
  },
  {
    name: "Databricks",
    icon: "/icons/databricks.png"
  },
  {
    name: "PowerBi",
    icon: "/icons/power-bi.png"
  },
  {
    name: "SQL",
    icon: "/icons/sql.png"
  },
];

export default function IconSlider() {
  return (
    <div className="relative w-full my-0 overflow-hidden lg:py-6">
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)"
        }}
      >
        <motion.div
          className="flex gap-12 w-[200%]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {[...defaultItems, ...defaultItems,].map((icon, i) =>
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 rounded-lg px-4 lg:px-9 py-2 bg-white/10 backdrop-blur-sm lg:backdrop-blur-3xl"
            >
              {/* {icon.icon} */}
              <Image src={icon.icon} alt="icon" width={24} height={24} />
              <span className="whitespace-nowrap">
                {icon.name}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
