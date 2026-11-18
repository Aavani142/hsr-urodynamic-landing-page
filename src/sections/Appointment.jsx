import { Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { CLINIC } from '../data/clinic'

const POINTS = [
  'Your request reaches our team on WhatsApp.',
  'We call back to fix a time that suits you.',
  'Your details stay private.',
]

export default function Appointment() {
  return (
    <section id="contact" className="section-y bg-paper" aria-labelledby="appointment-heading">
      <div className="container-page">
        <div data-reveal className="grid gap-10 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
          <div className="lg:col-span-5">
            <p className="t-eyebrow">Book an appointment</p>
            <h2 id="appointment-heading" className="t-h2 mt-3">
              Book your Urodynamic Study in HSR Layout
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Share a few details and we will help you schedule a consultation or test.
            </p>
            <ul className="mt-6 space-y-2.5 text-[0.95rem]">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={CLINIC.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 text-navy-900 transition-colors hover:bg-sand-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block text-xs text-muted">Prefer to call?</span>
                <span className="font-display font-semibold">{CLINIC.phoneDisplay}</span>
              </span>
            </a>
          </div>

          <div id="appointment-form" className="lg:col-span-7">
            <ContactForm source="contact-section" />
          </div>
        </div>
      </div>
    </section>
  )
}
