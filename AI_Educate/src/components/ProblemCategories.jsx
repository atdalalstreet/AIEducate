export default function ProblemCategories() {
  const categories = [
    {
      title: "Computer Vision",
      applications: "Object detection, image classification",
      industry: "Autonomous vehicles, security",
      metrics: "Accuracy, inference speed"
    },
    {
      title: "Natural Language",
      applications: "Text analysis, chatbots",
      industry: "Customer service, content analysis",
      metrics: "Response quality, comprehension"
    },
    {
      title: "Predictive Analytics",
      applications: "Forecasting, risk assessment",
      industry: "Finance, healthcare",
      metrics: "Prediction accuracy, ROI"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Problem Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Applications</h4>
                  <p className="text-gray-600">{category.applications}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Industry Use</h4>
                  <p className="text-gray-600">{category.industry}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Success Metrics</h4>
                  <p className="text-gray-600">{category.metrics}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
