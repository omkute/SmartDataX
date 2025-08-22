
import { Card, CardContent } from "@/components/ui/card";
import { Database, BarChart, Cloud, HardDrive, FileCode, LineChart } from "lucide-react";

const tools = [
  { name: "Python", icon: <FileCode className="w-10 h-10 text-blue-500" /> },
  { name: "SQL", icon: <Database className="w-10 h-10 text-purple-500" /> },
  { name: "R Programming", icon: <LineChart className="w-10 h-10 text-indigo-500" /> },
  { name: "PowerBI", icon: <BarChart className="w-10 h-10 text-yellow-500" /> },
  { name: "Azure Blob Storage", icon: <HardDrive className="w-10 h-10 text-sky-500" /> },
  { name: "Azure", icon: <Cloud className="w-10 h-10 text-cyan-500" /> },
  { name: "Databricks", icon: <Cloud className="w-10 h-10 text-red-500" /> },
  { name: "Azure SQL Database", icon: <Database className="w-10 h-10 text-green-500" /> },
];

export default function OurTools() {
  return (
    <section className="py-10 px-5 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center p-6 shadow-md hover:shadow-lg transition rounded-2xl"
          >
            <CardContent className="flex flex-col items-center gap-2">
              {tool.icon}
              <span className="text-base md:text-lg font-medium text-center">
                {tool.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
