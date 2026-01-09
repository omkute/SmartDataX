import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Cpu, BarChart3, ArrowRight, ChartBar, ClipboardMinus, LayoutDashboard, Search, Pickaxe, Briefcase, Brain, LayoutDashboardIcon } from "lucide-react";
import Link from 'next/link';

  const BusinessWithAI = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 font-sans">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="bg-blue-600/20 p-4 rounded-full mb-6">
          <Brain className="w-12 h-12 text-blue-500" />
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Business Insights with AI</h1>
        <p className="text-gray-400 text-xl">Empowering Smarter Business with Enterprise-Grade AI
</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column: Information */}
        <Card className="bg-zinc-900/50 border-zinc-800 text-white p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-4">Overview</CardTitle>
            <p className="text-zinc-400 leading-relaxed">
              In an increasingly competitive landscape, we help organizations achieve Smarter Business with AI by 
              bridging the gap between experimental technology and core operations. Our focus is on accelerating 
              AI adoption through the delivery of enterprise-grade AI solutions that are secure, scalable, and ethically sound. 
              Rather than generic implementations, we build bespoke intelligence systems—ranging from predictive analytics to generative 
              AI workflows—that integrate seamlessly into your existing infrastructure to drive measurable ROI.


            </p>
          </CardHeader>
          
          <CardContent className="space-y-8 mt-4">
            <div>
              <h3 className="text-blue-500 font-medium mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">• ETL Automation</li>
                <li className="flex items-center gap-2">• Data Transformation using AI Agent</li>
                <li className="flex items-center gap-2">• Model Traning</li>
                <li className="flex items-center gap-2">• Query Optimization</li>

              </ul>
            </div>

            <div>
              <h3 className="text-blue-500 font-medium mb-3">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {[ 'Microsoft Fabric'].map((tech) => (
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
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">ETL Automation </span>
              </div>
              <ArrowRight className="text-zinc-700" />
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-blue-600/10 rounded-lg">
                  <LayoutDashboardIcon className="w-10 h-10 text-blue-500" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 text-center"> Business Inslights</span>
              </div>
              <ArrowRight className="text-zinc-700" />
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <Pickaxe className=' text-green-500' />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500"> Action</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold"> Automate ETL Process </h3>
              <p className="text-zinc-500 text-sm"> Automate ETL processes with AI-powered workflows that integrate seamlessly into your existing infrastructure.</p>
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
  );
};

export default BusinessWithAI;
