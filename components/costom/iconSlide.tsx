"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type ToolItem = {
  name: string;
  icon: React.ReactNode;
};

const defaultItems: ToolItem[] = [
  {
    name: "Python",
    icon: <Image src="icons/python.png" alt="icon" width={24} height={24} />
  },
  {
    name: "Azure-Blob",
    icon: (
      <Image src="/icons/azure-blob.png" alt="icon" width={24} height={24} />
    )
  },
  {
    name: "Databricks",
    icon: (
      <Image src="/icons/databricks.png" alt="icon" width={24} height={24} />
    )
  },
  {
    name: "R-Lang",
    icon: (
      <Image src="/icons/r-programming.png" alt="icon" width={24} height={24} />
    )
  },
  {
    name: "PowerBi",
    icon: <Image src="/icons/power-bi.png" alt="icon" width={24} height={24} />
  },
  {
    name: "SQL",
    icon: <Image src="/icons/sql.png" alt="icon" width={24} height={24} />
  },
  {
    name: "Azure-SQL",
    icon: (
      <Image src="/icons/azure-sql.png" alt="Docker" width={24} height={24} />
    )
  },
  {
    name: "Python",
    icon: <Image src="/icons/python.png" alt="icon" width={24} height={24} />
  },
  {
    name: "Azure-Blob",
    icon: (
      <Image src="/icons/azure-blob.png" alt="icon" width={24} height={24} />
    )
  },
  {
    name: "Databricks",
    icon: (
      <Image src="/icons/databricks.png" alt="icon" width={24} height={24} />
    )
  },
  {
    name: "R-Lang",
    icon: (
      <Image src="/icons/r-programming.png" alt="icon" width={24} height={24} />
    )
  },
  {
    name: "PowerBi",
    icon: <Image src="/icons/power-bi.png" alt="icon" width={24} height={24} />
  },
  {
    name: "SQL",
    icon: <Image src="/icons/sql.png" alt="icon" width={24} height={24} />
  },
  {
    name: "Azure-SQL",
    icon: (
      <Image src="/icons/azure-sql.png" alt="Docker" width={24} height={24} />
    )
  }
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
          {[...defaultItems, ...defaultItems, ...defaultItems].map((icon, i) =>
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 rounded-lg px-4 lg:px-9 py-2 bg-white/10 backdrop-blur-sm lg:backdrop-blur-3xl"
            >
              {icon.icon}
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
