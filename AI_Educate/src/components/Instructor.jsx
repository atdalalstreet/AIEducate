import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Instructor() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Your Instructor</h2>
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="https://i.pravatar.cc/150?img=4" 
            alt="Instructor"
            className="w-32 h-32 rounded-full mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold mb-2">Dr. Alex Thompson</h3>
          <p className="text-gray-600 mb-6">
            PhD in Machine Learning • 15+ Years Industry Experience • Former AI Lead at Tech Giants
          </p>
          <p className="text-gray-700 mb-6">
            Passionate about making AI accessible and practical for everyone. 
            Specialized in turning complex concepts into understandable lessons.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
