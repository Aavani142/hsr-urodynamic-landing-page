import { ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import { WhatsAppIcon } from '../components/SocialIcon'
import { useContactModal } from '../context/contactModal'
import { whatsappLink } from '../data/clinic'

const SYMPTOMS = [
  { title: 'Frequent urination', text: 'Going much more often, day or night' },
  { title: 'Sudden urge to urinate', text: 'A strong need to go that is hard to hold' },
  { title: 'Weak urine stream', text: 'Slow, thin or stop-start flow' },
  { title: 'Difficulty starting', text: 'Waiting or straining before urine flows' },
  { title: 'Urinary leakage', text: 'Leaking when coughing, lifting or rushing' },
  { title: 'Incomplete emptying', text: 'Feeling the bladder is still not empty' },
  { title: 'Urinary retention', text: 'Unable to pass urine fully, or at all' },
  { title: 'Loss of bladder control', text: 'The bladder no longer behaves as it used to' },
]

export default function Symptoms() {
  const { openModal } = useContactModal()

  return (
    <section id="symptoms" className="section-y bg-white" aria-labelledby="symptoms-heading">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal className="t-eyebrow">What brings you here today?</p>
          <h2 id="symptoms-heading" data-lines className="t-h2 mt-3">
            When should you consider a Urodynamic Test?
          </h2>
          <p data-reveal className="mt-4 leading-relaxed text-muted">
            If any of these has been going on for a while, a bladder function test can show what is causing it.
          </p>
        </div>

        <ul data-stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SYMPTOMS.map(({ title, text }) => (
            <li data-item key={title}>
              <button
                type="button"
                onClick={openModal}
                className="group flex h-full w-full flex-col rounded-2xl bg-paper p-5 text-left ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="t-h3">{title}</span>
                  <ArrowUpRight
                    className="h-4.5 w-4.5 shrink-0 text-muted transition-colors group-hover:text-clay"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-1.5 text-sm text-muted">{text}</span>
              </button>
            </li>
          ))}
        </ul>

        <div
          data-reveal
          className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy-900 p-6 text-navy-100 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="t-h3 text-white">Not sure where to start?</p>
            <p className="mt-1 text-sm">Tell us your symptoms and we will guide you to the right test.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={openModal} variant="light" size="sm">
              Book a consultation
            </Button>
            <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer" variant="outlineLight" size="sm" icon={WhatsAppIcon}>
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
