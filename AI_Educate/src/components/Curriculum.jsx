import { useState } from 'react'
import { FaChevronDown, FaChevronRight, FaClock } from 'react-icons/fa'

export default function Curriculum() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [openIndex, setOpenIndex] = useState(0)

  const modules = [
    {
      title: "Foundation Building",
      duration: "Week 1-2",
      topics: [
        "Understand the problem statement, define objectives, and success criteria",
        "Draft a Business Requirements Document (BRD)",
        "Learn Python basics and essential libraries",
        "Explore AI workflows",
        "Analyze datasets and conduct EDA"
      ]
    },
    {
      title: "Developing the Solution",
      duration: "Week 3-5",
      topics: [
        "Train an initial AI model using sample data",
        "Refine the model with optimization techniques",
        "Customize the model based on the project",
        "Generative AI: Use Stable Diffusion or MidJourney",
        "Decisioning AI: Explore scikit-learn or XGBoost",
        "Smart Automation: Implement workflows with RPA tools"
      ]
    },
    {
      title: "Implementation and Deployment",
      duration: "Week 6-15",
      topics: [
        "Validate the refined model with unseen data",
        "Build a deployment pipeline",
        "Implement MLOps tools and vector databases",
        "Pilot test the solution",
        "Add advanced capabilities",
        "Deploy the final solution",
        "Test advanced features"
      ]
    },
    {
      title: "Showcasing and Wrap-Up",
      duration: "Week 16",
      topics: [
        "Present the project",
        "Submit final deliverables",
        "Reflect on the learning journey"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full text-sm font-mono">
            CURRICULUM
          </span>
          
          <h2 className="text-4xl font-bold mt-6 mb-4">
            What will you <span className="text-primary">learn?</span>
          </h2>
          
          <p className="text-xl text-gray-600 font-mono">
            We don't just teach AI—we help you apply it where it matters!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Always show first module */}
          <ModuleCard 
            {...modules[0]} 
            isOpen={openIndex === 0}
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
            isFirst={true}
          />

          {/* Show other modules when expanded */}
          {isExpanded && (
            <div className="space-y-4 mt-4">
              {modules.slice(1).map((module, index) => (
                <ModuleCard 
                  key={index + 1}
                  {...module}
                  isOpen={openIndex === index + 1}
                  onClick={() => setOpenIndex(openIndex === index + 1 ? null : index + 1)}
                />
              ))}
            </div>
          )}

          {/* View More Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 mx-auto block bg-white border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            {isExpanded ? 'Show Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  )
}

function ModuleCard({ title, duration, topics, isOpen, onClick, isFirst = false }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div 
        className="p-6 flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center space-x-4">
          <button className="text-primary">
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaClock className="mr-2" />
          {duration}
        </div>
      </div>

      {isOpen && (
        <div className="px-6 pb-6 border-t">
          <ul className="space-y-3 mt-4">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
