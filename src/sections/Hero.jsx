import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Button from '../components/Button'
import { useContactModal } from '../context/contactModal'
import { CLINIC } from '../data/clinic'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { openModal } = useContactModal()

  return (
    <section id="top" className="bg-paper" aria-labelledby="hero-heading">
      <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <h1 id="hero-heading">
            <span className="block text-sm font-semibold text-teal-600">Urodynamic Study in HSR Layout, Bengaluru</span>
            <span className="mt-4 block font-serif text-[2.5rem] leading-[1.08] font-medium text-navy-900 sm:text-5xl lg:text-[3.5rem]">
              Understand Your Bladder Health with Urodynamic Testing
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed">
            Advanced bladder function evaluation to help understand urinary symptoms and guide appropriate treatment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={openModal} size="lg">
              Book an Appointment
            </Button>
            <Button href={CLINIC.phoneHref} size="lg" variant="secondary" icon={Phone}>
              Call Now
            </Button>
          </div>

          <a href="#doctor" className="mt-10 flex items-center gap-4 border-t border-line pt-6 hover:opacity-80">
            <img
              src="/images/dr-caranj-venugopal.webp"
              alt="Dr Caranj S. Venugopal, urologist at HSR Urology Clinic"
              width="800"
              height="1200"
              className="h-14 w-14 rounded-full object-cover object-top"
            />
            <div className="text-sm">
              <p className="font-semibold text-navy-900">Dr Caranj S. Venugopal</p>
              <p className="text-muted">MBBS, MS, M.Ch · Consultant Urologist</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="overflow-hidden rounded-lg"
        >
          <picture>
            <source srcSet="/images/doctor-consultation.webp" type="image/webp" />
            <img
              src="/images/doctor-consultation.jpg"
              alt="Urologist in HSR Layout reviewing bladder function test results during a patient consultation"
              width="1400"
              height="933"
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover object-[70%_center]"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  )
}
