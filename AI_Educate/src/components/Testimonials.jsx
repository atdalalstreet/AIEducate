import { FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Even with my IIT background, this program was a game-changer. I worked on a supply chain optimization project with a global logistics leader, which gave me hands-on industry exposure. I learnt about AWS Lambda functions, Twillio, ERP Next, MariaDB, Redis, Supervisor, Frappee and Integrating Gemini within 4 months!",
      name: "Jai Pannu",
      role: "Third-year ECE, IIT Indore",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      text: "Coming from a small college, I never thought I'd work on something like a climate-change detection system with ISRO. It helped me land my first internship at a tech company. In addition, my mentors helped me further my interest in blockchain with a crash implementation of ordinal protocol of Bitcoin runes",
      name: "Prasang S.",
      role: "Third-Year Student, MediCaps",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      text: "This program helped me scale up my career. I explored multiple AI types and worked on a customer sentiment tool for a leading e-commerce platform. The real-world projects and mentorship gave me the skills I needed to secure a promotion.",
      name: "Ravi P.",
      role: "Data Analyst, Bengaluru",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full text-sm font-mono">
            TESTIMONIALS
          </span>
          
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Student <span className="text-primary">reviews</span>
          </h2>
          
          <p className="text-xl text-gray-600">
            What our students are saying...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-8">
                <FaQuoteLeft className="text-secondary text-3xl mb-4 opacity-50" />
                <p className="text-gray-600 mb-8">
                  {testimonial.text}
                </p>
                
                <div className="border-t pt-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform translate-y-1 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
