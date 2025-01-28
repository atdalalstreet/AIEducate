import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-20 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl text-secondary mb-4" />
            <h3 className="font-bold mb-2">Where are we physically located</h3>
            <p className="text-gray-600">Hyderabad, Jaipur</p>
          </div>

          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl text-secondary mb-4" />
            <h3 className="font-bold mb-2">Who to contact</h3>
            <a 
              href="mailto:ashish@avapadvisory.com" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              ashish@avapadvisory.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <FaPhone className="text-4xl text-secondary mb-4" />
            <h3 className="font-bold mb-2">Who to call</h3>
            <a 
              href="tel:+916282506720" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              +91 62825 06720
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
