export default function LearningTracks() {
  const tracks = [
    {
      level: "Beginner",
      prerequisites: "Basic programming knowledge",
      outcomes: "Foundation in AI concepts and problem-solving",
      profile: "Students new to AI"
    },
    {
      level: "Intermediate",
      prerequisites: "Python, basic ML concepts",
      outcomes: "Build and deploy AI solutions",
      profile: "Developers transitioning to AI"
    },
    {
      level: "Advanced",
      prerequisites: "ML experience, strong programming",
      outcomes: "Complex AI system architecture",
      profile: "Experienced ML practitioners"
    }
  ]

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Learning Tracks</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{track.level}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Prerequisites</h4>
                  <p className="text-gray-600">{track.prerequisites}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outcomes</h4>
                  <p className="text-gray-600">{track.outcomes}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ideal For</h4>
                  <p className="text-gray-600">{track.profile}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
