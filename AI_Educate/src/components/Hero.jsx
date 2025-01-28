import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const companyLogos = [
    { name: 'Schbang', logo: '/path-to-schbang-logo.png' },
    { name: 'Ogilvy', logo: '/path-to-ogilvy-logo.png' },
    { name: 'Unacademy', logo: '/path-to-unacademy-logo.png' },
    { name: 'Mahindra', logo: '/path-to-mahindra-logo.png' },
    { name: 'Setu', logo: '/path-to-setu-logo.png' }
  ]

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F9FC] to-white opacity-50"></div>
        <div className="absolute left-0 right-0 w-full h-full">
          <svg viewBox="0 0 1000 1000" className="absolute w-full h-full opacity-20">
            <path
              d="M 0 500 C 200 300, 800 300, 1000 500 C 800 700, 200 700, 0 500"
              fill="none"
              stroke="#5EA3CC"
              strokeWidth="2"
            />
            <path
              d="M 0 500 C 200 400, 800 400, 1000 500 C 800 600, 200 600, 0 500"
              fill="none"
              stroke="#5EA3CC"
              strokeWidth="2"
              className="opacity-50"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          <span className="block text-gray-900">Become the</span>
          <span className="block text-primary">AI Expert Everyone Wants to Hire</span>
        </h1>
        
        <div className="space-y-4 mb-12">
          <p className="text-xl font-mono">
            Master Generative AI, Smart Automation, Decisioning Systems, and more in just 6 months.
          </p>
          <p className="text-xl font-mono">AI Isn't Just ChatGPT—And Neither Are We.</p>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-gray-600 italic">Next Cohort begins <span className="font-semibold">in February</span></p>
        </div>

        <div className="flex justify-center">
          <button className="bg-primary text-white px-12 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-primary-hover transition-colors">
            Join the Waitlist <FaArrowRight />
          </button>
        </div>

        {/* Logo Carousel */}
        <div className="mt-16">
          <p className="text-gray-600 font-mono mb-8">
            Students work on projects from companies like
          </p>
          <div className="relative overflow-hidden">
            <div className="flex space-x-16 animate-scroll-infinite">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <div 
                  key={index} 
                  className="flex-none"
                >
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-8 w-auto opacity-50"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-hover transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
