import { BarChart3, PieChart, LineChart, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CasesPage() {
  return (
    <div className="min-h-screen  dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Project Delivered
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through interactive visualizations and EDA Analysis
          </p>
        </div>

        {/* Dashboard Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Dashboard Preview */}
            <div className="lg:w-1/2 p-6 lg:p-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src='/dashboard.webp'
                  width={800}
                  height={600}
                  alt='Analytics Dashboard'
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Section - Features */}
            <div className="lg:w-1/2 p-6 lg:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Campus IQ
              </h2>
              
              <div className="space-y-6">
                <FeatureItem 
                  icon={<BarChart3 className="w-6 h-6 text-green-500" />}
                  title="Insights of College in your State"
                  description="Get info about the Private and Government colleges "
                />

                <FeatureItem 
                  icon={<PieChart className="w-6 h-6 text-blue-500" />}
                  title="Inslights for Students"
                  description="Courses and Various Domains offered by colleges"
                />

                <FeatureItem 
                  icon={<LineChart className="w-6 h-6 text-purple-500" />}
                  title="Trend Analysis"
                  description="Identify patterns and trends with advanced analytics algorithms and predictive modeling."
                />

                <FeatureItem 
                  icon={<TrendingUp className="w-6 h-6 text-rose-500" />}
                  title="Performance Metrics"
                  description="Track and analyze key performance indicators with detailed metrics and benchmarks."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Feature Item Component
const FeatureItem = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  </div>
)

export default CasesPage