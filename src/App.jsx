import { useRef } from 'react'
import { MotionConfig } from 'framer-motion'
import ContactModal from './components/ContactModal'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactModalProvider from './context/ContactModalProvider'
import useScrollAnimations from './lib/useScrollAnimations'
import AboutUrodynamics from './sections/AboutUrodynamics'
import Appointment from './sections/Appointment'
import Clinic from './sections/Clinic'
import Conditions from './sections/Conditions'
import Doctor from './sections/Doctor'
import FAQ from './sections/FAQ'
import Hero from './sections/Hero'
import Location from './sections/Location'
import Procedure from './sections/Procedure'
import Symptoms from './sections/Symptoms'
import TestTypes from './sections/TestTypes'
import WhyChooseUs from './sections/WhyChooseUs'
import './App.css'

export default function App() {
  const pageRef = useRef(null)
  useScrollAnimations(pageRef)

  return (
    <MotionConfig reducedMotion="user">
      <ContactModalProvider>
        <Navbar />
        <main id="main" ref={pageRef} className="overflow-x-clip">
          <Hero />
          <Appointment />
          <Symptoms />
          <AboutUrodynamics />
          <TestTypes />
          <Conditions />
          <WhyChooseUs />
          <Doctor />
          <Clinic />
          <Procedure />
          <FAQ />
          <Location />
        </main>
        <Footer />
        <FloatingContact />
        <ContactModal />
      </ContactModalProvider>
    </MotionConfig>
  )
}
