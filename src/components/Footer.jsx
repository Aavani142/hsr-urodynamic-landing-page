import { ArrowUpRight, Globe, Mail, MapPin, Phone } from 'lucide-react'
import SocialIcon, { WhatsAppIcon } from './SocialIcon'
import { CLINIC, NAV_LINKS, SOCIAL_LINKS, whatsappLink } from '../data/clinic'

const TEST_LINKS = [
  { label: 'Urodynamic Study', href: '#tests' },
  { label: 'Uroflowmetry Test', href: '#tests' },
  { label: 'Bladder Function Evaluation', href: '#tests' },
  { label: 'Urinary Incontinence Evaluation', href: '#conditions' },
  { label: 'Symptoms to watch for', href: '#symptoms' },
  { label: 'What happens during the test', href: '#procedure' },
  { label: 'Meet the doctor', href: '#doctor' },
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        HSR Urology Clinic — contact and navigation
      </h2>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-4">
          <a href="#top" className="inline-flex rounded-md bg-paper px-3 py-2" aria-label="HSR Urology Clinic — back to top">
            <img
              src="/images/hsr-urology-clinic-logo.png"
              alt="HSR Urology Clinic logo"
              width="640"
              height="303"
              loading="lazy"
              className="h-10 w-auto mix-blend-multiply"
            />
          </a>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-300" aria-hidden="true" />
              <a href={CLINIC.phoneHref} className="font-semibold text-white hover:text-teal-200">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-300" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-300" aria-hidden="true" />
              <a href={`mailto:${CLINIC.email}`} className="break-all hover:text-white">
                {CLINIC.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-300" aria-hidden="true" />
              <a href={CLINIC.website} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                www.hsrurologyclinic.com
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:col-span-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Navigate</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Tests</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {TEST_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-sm font-semibold text-white">Visit the clinic</h3>
          <address className="mt-5 flex gap-3 text-sm leading-relaxed not-italic">
            <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-300" aria-hidden="true" />
            <span>
              {CLINIC.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </address>
          <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="Map showing HSR Urology Clinic, Sector 6, HSR Layout, Bengaluru"
              src={CLINIC.mapsEmbed}
              className="block h-44 w-full grayscale-[35%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={CLINIC.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-200 hover:text-white"
          >
            Get directions on Google Maps
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-5 py-6 pr-24 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} {CLINIC.name}, HSR Layout, Bengaluru. All rights reserved.
          </p>
          <ul className="flex items-center gap-2" aria-label="Social media">
            {SOCIAL_LINKS.map(({ label, href }) =>
              href ? (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${CLINIC.name} on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-navy-100 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <SocialIcon name={label} />
                  </a>
                </li>
              ) : (
                // Placeholder: add the verified profile URL in src/data/clinic.js to activate
                <li key={label}>
                  <span
                    title={`${label} — coming soon`}
                    aria-label={`${label} profile (not yet available)`}
                    role="img"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-navy-400"
                  >
                    <SocialIcon name={label} />
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
        <p className="container-page pr-24 pb-8 text-xs leading-relaxed text-navy-400">
          The information on this page is for general education and does not replace a consultation with a qualified
          urologist.
        </p>
      </div>
    </footer>
  )
}
