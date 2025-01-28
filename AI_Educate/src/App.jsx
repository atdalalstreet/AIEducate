// Update all color references in components from [#FF4B2B] to primary
// and accent colors from [#FF6B3B], etc. to secondary

import Hero from './components/Hero.jsx'
import CourseOverview from './components/CourseOverview.jsx'
import WhyUs from './components/WhyUs.jsx'
import Projects from './components/Projects.jsx'
import Learning from './components/Learning.jsx'
import Curriculum from './components/Curriculum.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseOverview />
      <WhyUs />
      <Projects />
      <Learning />
      <Curriculum />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
