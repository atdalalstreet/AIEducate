import { FaBrain, FaTools, FaChartLine, FaBriefcase } from 'react-icons/fa'

export default function Outcomes() {
  const outcomes = [
    {
      icon: <FaBrain className="text-3xl text-blue-600" />,
      title: "AI Fundamentals",
      description: "Master core AI concepts and algorithms"
    },
    {
      icon: <FaTools className="text-3xl text-blue-600" />,
      title: "Technical Skills",
      description: "Hands-on experience with AI tools and frameworks"
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: "Problem-Solving",
      description: "Develop advanced analytical thinking"
    },
    {
      icon: <FaBriefcase className="text-3xl text-blue-600" />,
      title: "Career Growth",
      description: "Open new career opportunities in AI"
    }
  ]

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Learning Outcomes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{outcome.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{outcome.title}</h3>
              <p className="text-gray-600">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
