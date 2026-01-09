import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Cpu, BarChart3, ArrowRight } from "lucide-react";
import Link from 'next/link';

function Servicedetails() {
  return (
     <div className="min-h-screen bg-black text-white p-8 md:p-16 font-sans">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="bg-blue-600/20 p-4 rounded-full mb-6">
          <Cloud className="w-12 h-12 text-blue-500" />
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Data Engineering</h1>
        <p className="text-gray-400 text-xl">Building the Foundation for Intelligent Data</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column: Information */}
        <Card className="bg-zinc-900/50 border-zinc-800 text-white p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-4">Overview</CardTitle>
            <p className="text-zinc-400 leading-relaxed">
              SmartDataX specializes in building robust, scalable data pipelines that 
              automate information flow. From ingestion to transformation, we ensure 
              your data becomes structured, clean, and ready for advanced machine learning.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8 mt-4">
            <div>
              <h3 className="text-blue-500 font-medium mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">• Automated Ingestion</li>
                <li className="flex items-center gap-2">• ETL/ELT Processing</li>
                <li className="flex items-center gap-2">• Schema Design</li>
                <li className="flex items-center gap-2">• Real-time Processing</li>
                <li className="flex items-center gap-2">• Data Warehousing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-blue-500 font-medium mb-3">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS Glue', 'Azure', 'Kafka', 'Flink', 'Snowflake', 'Python', 'SQL', 'Scala'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-none">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Visual Flow & CTA */}
        <Card className="bg-zinc-900/50 border-zinc-800 text-white flex flex-col items-center justify-between p-8">
          <div className="w-full space-y-12 py-8">
            {/* Simple Workflow Visualization */}
            <div className="flex items-center justify-between px-4">
              <div className="flex flex-col items-center gap-2">
                <Database className="w-8 h-8 text-blue-400" />
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Raw Sources</span>
              </div>
              <ArrowRight className="text-zinc-700" />
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-blue-600/10 rounded-lg">
                  <Cloud className="w-10 h-10 text-blue-500" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 text-center">Processing</span>
              </div>
              <ArrowRight className="text-zinc-700" />
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">AI & Analytics</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Ready to scale your data?</h3>
              <p className="text-zinc-500 text-sm">Our engineers help you turn raw data into actionable insights.</p>
            </div>
          </div>
          <Link href="/book-meet">
            <Button className="w-full md:w-auto px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl transition-all">
              Get a Free Consultation
            </Button>
          </Link>
        </Card>
      </div>

      <footer className="mt-20 text-center text-zinc-600 text-sm">
        SmartDataX © 2026
      </footer>
    </div>
  )
}

export default Servicedetails