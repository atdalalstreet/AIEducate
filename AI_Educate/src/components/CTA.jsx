import { FaArrowRight } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Step into the future of programming.<br />
          <span className="text-primary">
            Become the AI Engineer everyone wants on speed dial! 🚀
          </span>
        </h2>
        
        <button className="bg-primary text-white px-12 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto hover:bg-primary-hover transition-colors">
          Join the Waitlist <FaArrowRight />
        </button>
      </div>
    </section>
  )
}
