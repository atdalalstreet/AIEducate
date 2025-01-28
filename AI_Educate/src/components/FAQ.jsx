import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What makes this AI course different from others?",
      answer: "Unlike courses that just teach you how to chat with ChatGPT, we'll help you build AI solutions. From creating image generators to fraud detection systems, you'll get your hands dirty solving real-world problems with tools like LangChain, Hugging Face, and Pinecone."
    },
    {
      question: "Who is this course for?",
      answer: "• Students who want to turn their degree into a job-ready portfolio.\n\n• Entry-level engineers eager to jump from generic coding to AI wizardry.\n\n• Curious minds who wonder, \"What's the deal with AI anyway?\"\n\nIf you're human (we hope), motivated, and excited by AI, you're welcome."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "Picture this: You'll be working on projects like designing a climate-change detection system or building a customer sentiment analysis tool for real clients. These aren't hypothetical; they're real-world challenges to help you create a portfolio that screams \"hire me!\""
    },
    {
      question: "Will I get a certificate?",
      answer: "Absolutely. But more importantly, you'll walk away with a killer portfolio, a solid network, and the confidence to say, \"Yes, I can build that.\""
    },
    {
      question: "How does this course help with jobs?",
      answer: "Our focus is simple: make you employable. The AI job market is booming, and we've tailored the course to teach skills that companies actually need. Add real-client projects to the mix, and you're walking into interviews with more than just theory—you've got proof of work."
    },
    {
      question: "Do you offer flexible payment options?",
      answer: "We get it, not everyone has pockets deeper than an AI's neural network. Yes, we offer installment plans and scholarships for those who need them. Don't let money hold you back from building your future."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full text-sm font-mono">
            FAQ
          </span>
          
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Everything You Need to Know <br />
            <span className="text-primary">(Without Falling Asleep)</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4"
            >
              <button
                className="w-full bg-white rounded-lg px-6 py-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-secondary flex-shrink-0 ml-4" />
                ) : (
                  <FaChevronDown className="text-secondary flex-shrink-0 ml-4" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="bg-white px-6 py-4 rounded-b-lg mt-px">
                  <p className="text-gray-600 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
