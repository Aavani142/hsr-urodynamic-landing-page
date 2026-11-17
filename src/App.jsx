import { MotionConfig } from 'framer-motion'
import ContactModal from './components/ContactModal'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactModalProvider from './context/ContactModalProvider'
import AboutUrodynamics from './sections/AboutUrodynamics'
import Appointment from './sections/Appointment'
import Conditions from './sections/Conditions'
import Doctor from './sections/Doctor'
import FAQ from './sections/FAQ'
import Hero from './sections/Hero'
import Procedure from './sections/Procedure'
import Symptoms from './sections/Symptoms'
import TestTypes from './sections/TestTypes'
import WhyChooseUs from './sections/WhyChooseUs'
import './App.css'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ContactModalProvider>
        <Navbar />
        <main id="main" className="overflow-x-clip">
          <Hero />
          <AboutUrodynamics />
          <Symptoms />
          <Conditions />
          <TestTypes />
          <Procedure />
          <WhyChooseUs />
          <Doctor />
          <FAQ />
          <Appointment />
        </main>
        <Footer />
        <FloatingContact />
        <ContactModal />
      </ContactModalProvider>
    </MotionConfig>
  )
}
