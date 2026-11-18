import { Phone } from 'lucide-react'
import Button from '../components/Button'
import { WhatsAppIcon } from '../components/SocialIcon'
import { CLINIC, whatsappLink } from '../data/clinic'

export default function Location() {
  return (
    <section id="location" className="section-y bg-paper" aria-labelledby="location-heading">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p data-reveal className="t-eyebrow">Location &amp; contact</p>
          <h2 id="location-heading" data-lines className="t-h2 mt-3">
            Visit HSR Urology Clinic in HSR Layout
          </h2>

          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <Button href={CLINIC.phoneHref} variant="dark" icon={Phone}>
              Call the clinic
            </Button>
            <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" icon={WhatsAppIcon}>
              WhatsApp
            </Button>
            <Button href={CLINIC.mapsLink} target="_blank" rel="noopener noreferrer" variant="outline" arrow>
              Get directions
            </Button>
          </div>

          <dl data-stagger className="mt-10 space-y-6">
            <div data-item>
              <dt className="font-display font-semibold text-navy-900">{CLINIC.name}</dt>
              <dd className="mt-2 leading-relaxed">
                <address className="not-italic">
                  {CLINIC.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </dd>
            </div>
            <div data-item>
              <dt className="font-display font-semibold text-navy-900">Phone &amp; email</dt>
              <dd className="mt-2 space-y-1">
                <a href={CLINIC.phoneHref} className="link-underline block w-fit">
                  {CLINIC.phoneDisplay}
                </a>
                <a href={`mailto:${CLINIC.email}`} className="link-underline block w-fit break-all">
                  {CLINIC.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div data-clip className="relative min-h-[22rem] overflow-hidden rounded-3xl bg-sand-100 lg:col-span-7 lg:h-[calc(100svh-72px-6rem)] lg:max-h-[36rem]">
          <iframe
            title="Map showing HSR Urology Clinic, Sector 6, HSR Layout, Bengaluru"
            src={CLINIC.mapsEmbed}
            className="absolute inset-0 h-full w-full grayscale-[25%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
