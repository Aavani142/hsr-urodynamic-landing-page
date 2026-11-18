import Button from '../components/Button'
import { WhatsAppIcon } from '../components/SocialIcon'
import { whatsappLink } from '../data/clinic'

// All details below are taken from the "About the Doctor" section of https://www.hsrurologyclinic.com/
const EXPERTISE = ['Urology', 'Andrology', 'Renal Transplantation', 'Endourology (HOLEP, RIRS)', 'Robotic Urological Surgery']

const DETAILS = [
  ['Qualifications', 'MBBS and MS, Dr. NTR University of Health Sciences. M.Ch, MAHER.'],
  ['Training', 'Renal Transplant at IKDRC, Ahmedabad. Robotic and laparoscopic surgery at Kochi, Kerala.'],
  ['Previously', "Consultant, Sakra World Hospital, Bellandur. Associate Professor, St. John's Medical College and Hospital, Bangalore."],
]

export default function Doctor() {
  return (
    <section id="doctor" className="section-y bg-paper" aria-labelledby="doctor-heading">
      <div className="container-page">
        <article
          data-reveal
          className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white ring-1 ring-line md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
        >
          <div className="relative aspect-[4/5] md:aspect-auto">
            <img
              src="/images/dr-caranj-venugopal.webp"
              alt="Dr Caranj S. Venugopal, Consultant Urologist at HSR Urology Clinic, HSR Layout"
              width="800"
              height="1200"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          <div className="p-7 sm:p-9">
            <p className="t-eyebrow">Meet your urologist</p>
            <h2 id="doctor-heading" className="t-h2 mt-2">
              Dr Caranj S. Venugopal
            </h2>
            <p className="mt-1 text-sm font-medium text-clay">Consultant, Urology &amp; Renal Transplantation, Aster RV Hospital</p>

            <p className="mt-5 text-xs font-semibold text-muted">Specialisations</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {EXPERTISE.map((e) => (
                <li key={e} className="rounded-full bg-paper px-3 py-1.5 text-sm text-navy-900 ring-1 ring-line">
                  {e}
                </li>
              ))}
            </ul>

            <dl className="mt-5 space-y-3 text-[0.95rem]">
              {DETAILS.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold text-muted">{k}</dt>
                  <dd className="mt-0.5 leading-relaxed text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <Button
              href={whatsappLink('Hello, I would like to book a consultation with Dr Caranj S. Venugopal.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={WhatsAppIcon}
              className="mt-6"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </article>
      </div>
    </section>
  )
}
