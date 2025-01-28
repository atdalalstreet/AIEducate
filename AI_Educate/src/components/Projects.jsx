import { useState } from 'react'

export default function Projects() {
  const projects = [
    {
      icon: "🎨",
      path: "Generative AI",
      description: "Create tools that generate creative outputs.",
      problem: "Design personalized marketing visuals.",
      industryIcon: "📈",
      industry: "Marketing"
    },
    {
      icon: "🤖",
      path: "Smart Automation",
      description: "Automate workflows and repetitive tasks.",
      problem: "Automate invoice processing for enterprises.",
      industryIcon: "💼",
      industry: "Finance"
    },
    {
      icon: "📊",
      path: "Decisioning AI",
      description: "Build systems for data-driven decisions.",
      problem: "Detect fraudulent transactions in banking.",
      industryIcon: "🏦",
      industry: "Banking"
    },
    {
      icon: "📸",
      path: "Computer Vision",
      description: "Analyze and interpret images or videos.",
      problem: "Identify defects in products during manufacturing.",
      industryIcon: "⚙️",
      industry: "Manufacturing"
    },
    {
      icon: "💬",
      path: "Natural Language Processing",
      description: "Process and analyze human language.",
      problem: "Develop multilingual chatbots for retail.",
      industryIcon: "🛍️",
      industry: "Retail"
    },
    {
      icon: "🎮",
      path: "Reinforcement Learning",
      description: "Optimize processes through trial and error.",
      problem: "Train robots to manage warehouse inventory.",
      industryIcon: "🚛",
      industry: "Logistics"
    },
    {
      icon: "🎙️",
      path: "Speech and Audio Processing",
      description: "Work with speech and sound data.",
      problem: "Transcribe and summarize court proceedings.",
      industryIcon: "⚖️",
      industry: "Legal"
    },
    {
      icon: "🛒",
      path: "Recommendation Systems",
      description: "Suggest relevant content or products.",
      problem: "Recommend movies for streaming platforms.",
      industryIcon: "🎥",
      industry: "Entertainment"
    },
    {
      icon: "🧠",
      path: "Expert Systems",
      description: "Simulate human expertise for decision-making.",
      problem: "Develop diagnostic tools for early disease detection.",
      industryIcon: "🏥",
      industry: "Healthcare"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What will you <span className="text-primary">build?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore real-world AI applications across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Front Content */}
              <div className="group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-2">{project.path}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Back Content */}
              <div className="absolute inset-0 p-8 bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="h-full flex flex-col">
                  <h4 className="text-lg font-bold mb-3 text-primary">Example Project:</h4>
                  <p className="text-gray-800 mb-4">{project.problem}</p>
                  <div className="mt-auto flex items-center gap-2">
                    <span className="text-2xl">{project.industryIcon}</span>
                    <span className="text-gray-600">{project.industry}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
