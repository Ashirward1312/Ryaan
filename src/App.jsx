import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './Pages/Hero/Hero'
import Header from './Pages/Header/Header'
import Experties from './Pages/Experties/Experties'
import Mission from './Pages/Mission/Mission'
import Vision from './Pages/Vision/Vision'
import Testimonial from './Pages/Testimonials/Testimonials'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Footer from './Pages/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'
import Whatsapp from './Pages/Whatsapp/Whatsapp'

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Whatsapp />
                <Hero theme="dark" />
                <Mission />
                <Vision />
                <Testimonial />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Experties />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App