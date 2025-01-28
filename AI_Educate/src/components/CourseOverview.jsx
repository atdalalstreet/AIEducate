import { FaGraduationCap, FaLaptopCode, FaUserMd, FaBalanceScale, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa'

export default function CourseOverview() {
  const bulletPoints = [
    "Looking to upskill in Generative AI?",
    "Want to automate workflows with Smart Automation?",
    "Ready to pivot into Decisioning AI careers?",
    "Curious about AI and its possibilities?"
  ]

  const professions = [
    { icon: <FaGraduationCap />, label: "Students" },
    { icon: <FaLaptopCode />, label: "Software Engineers" },
    { icon: <FaBriefcase />, label: "Management Consultants" },
    { icon: <FaBalanceScale />, label: "Lawyers" },
    { icon: <FaUserMd />, label: "Doctors" },
    { icon: <FaChalkboardTeacher />, label: "Teachers" }
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8">
          Who is this <span className="text-primary">for?</span>
        </h2>

        <p className="text-xl font-mono mb-12 max-w-3xl">
          From total coding newbies to seasoned pros, everyone is welcome! No coding experience? No problem. Got Some? Even better - its your time to shine!
        </p>

        <div className="space-y-4 mb-16">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="flex-none w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                ›
              </span>
              <p className="text-lg font-mono">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xl mb-8">We have taught:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {professions.map((profession, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2 text-secondary flex justify-center">
                  {profession.icon}
                </div>
                <p className="text-sm">{profession.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-400">and many more...</p>
        </div>
      </div>
    </section>
  )
}
