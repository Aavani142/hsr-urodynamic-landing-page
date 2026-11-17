import { MapPin, Phone } from 'lucide-react'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import { WhatsAppIcon } from '../components/SocialIcon'
import { CLINIC, whatsappLink } from '../data/clinic'

export default function Appointment() {
  return (
    <section id="contact" className="bg-sand-100 py-16 sm:py-24" aria-labelledby="appointment-heading">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 id="appointment-heading" className="font-serif text-[2rem] leading-[1.12] font-medium sm:text-[2.5rem]">
            Take the Next Step Towards Better Bladder Health
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed">Book a consultation or test at our HSR Layout clinic.</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={CLINIC.phoneHref} size="lg" icon={Phone}>
              Call Now
            </Button>
            <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer" size="lg" variant="whatsapp" icon={WhatsAppIcon}>
              WhatsApp
            </Button>
          </div>

          <ul className="mt-10 space-y-3 text-[0.95rem]">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-600" aria-hidden="true" />
              <a href={CLINIC.phoneHref} className="font-semibold text-navy-900 hover:text-teal-600">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-600" aria-hidden="true" />
              <span>{CLINIC.addressLines.join(' ')}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="appointment-form" className="rounded-lg bg-paper p-6 ring-1 ring-sand-200 sm:p-8">
            <h3 className="text-lg font-semibold">Book an Appointment</h3>
            <div className="mt-5">
              <ContactForm source="contact-section" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
