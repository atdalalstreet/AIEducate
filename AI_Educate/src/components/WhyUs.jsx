import { FaProjectDiagram, FaTools, FaLaptopCode, FaBriefcase, FaCircle } from 'react-icons/fa'

export default function WhyUs() {
  const benefits = [
    {
      icon: <FaProjectDiagram className="w-12 h-12" />,
      title: "Work on Live Projects",
      description: "Collaborate with real clients on real-world problems."
    },
    {
      icon: <FaTools className="w-12 h-12" />,
      title: "Industry-Grade Tools",
      description: "Learn using cutting-edge AI frameworks and platforms."
    },
    {
      icon: <FaLaptopCode className="w-12 h-12" />,
      title: "Hands-On Experience",
      description: "Solve challenges that recruiters actually care about."
    },
    {
      icon: <FaBriefcase className="w-12 h-12" />,
      title: "Portfolio That Stands Out",
      description: "Showcase projects built for actual businesses."
    }
  ]

  const tracks = [
    {
      avatar: "👨‍💻",
      title: "For Students",
      subtitle: "> Launch Your Career in AI",
      description: "You develop a killer portfolio of real-world AI solutions. Impress your recruiters by solving their complex problems with ease.",
      steps: [
        "Master the skills",
        "Ace the interviews",
        "Land the job"
      ]
    },
    {
      avatar: "👨‍🔧",
      title: "For Entry-Level Engineers",
      subtitle: "> Level Up Your Career",
      description: "You transition from basic coding to building impactful AI solutions. Stand out at work with cutting-edge tools and industry-ready projects.",
      steps: [
        "Upgrade your skills",
        "Accelerate your growth",
        "Stand out at work"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center">
          But wait ... <span className="text-primary">why come to us?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 text-secondary flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Pathways Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mt-32">
          <div className="text-center mb-16">
            <span className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full text-sm font-mono">
              PATHWAYS
            </span>
            <h2 className="text-4xl font-bold mt-6">
              Create your goals and we help you meet them!
            </h2>
          </div>

          <div className="space-y-8">
            {tracks.map((track, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="text-6xl md:text-8xl">
                      {track.avatar}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-gray-500">{track.title}</h3>
                      <span className="font-mono text-primary">{track.subtitle}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {track.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {track.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-2">
                          <FaCircle className="text-secondary w-2 h-2" />
                          <span className="font-mono text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
