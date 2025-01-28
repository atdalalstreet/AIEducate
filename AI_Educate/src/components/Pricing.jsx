import { FaCheck } from 'react-icons/fa'

export default function Pricing() {
  const additionalBenefits = [
    "Live sessions with AI experts for mentorship and guidance",
    "$75 GPT API credits per month for hands-on work",
    "Personalized mentor support for projects and learning",
    "Work on real-world, corporate-sponsored projects",
    "Certificate of completion to validate your achievements",
    "Letters of recommendation from program mentors",
    "Access to a peer and alumni network for collaboration",
    "Lifetime access to alumni resources and updates"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full text-sm font-mono">
            OUR PRICING
          </span>
          
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Ready to <span className="text-primary">Bet on Yourself?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Experimenter Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Experimenter</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">₹</span>
                <span className="text-5xl font-bold">1,00,000</span>
              </div>
              <p className="text-gray-600 mt-1 font-mono">for 4 months</p>
            </div>

            <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold mb-4 hover:bg-primary-hover transition-colors text-sm">
              Implement and specialize in one AI type (e.g., Generative AI, Smart Automation, Decisioning, etc.)
            </button>
          </div>

          {/* Master Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Master</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">₹</span>
                <span className="text-5xl font-bold">2,50,000</span>
              </div>
              <p className="text-gray-600 mt-1 font-mono">for 10 months</p>
            </div>

            <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold mb-4 hover:bg-primary-hover transition-colors text-sm">
              Explore and implement up to four AI types, gaining broader expertise across diverse AI domains
            </button>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Additional Benefits</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheck className="flex-shrink-0 mt-1 text-secondary" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          *Any GPT API expenses beyond $75 per month will be borne by the participants.<br />
          **Additional modules can be added for ₹75,000, with a duration of 2 months each.
        </p>
      </div>
    </section>
  )
}
