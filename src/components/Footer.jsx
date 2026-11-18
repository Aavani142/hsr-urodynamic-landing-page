import SocialIcon from './SocialIcon'
import { useContactModal } from '../context/contactModal'
import { CLINIC, NAV_LINKS, SOCIAL_LINKS } from '../data/clinic'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const { openModal } = useContactModal()

  return (
    <footer className="bg-navy-950 text-navy-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        HSR Urology Clinic contact and links
      </h2>

      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <a href="#top" className="inline-flex rounded-lg bg-white px-3 py-2" aria-label="HSR Urology Clinic, back to top">
            <img
              src="/images/hsr-urology-clinic-logo.png"
              alt="HSR Urology Clinic logo"
              width="640"
              height="303"
              loading="lazy"
              className="h-10 w-auto"
            />
          </a>
          <p className="mt-6 max-w-xs leading-relaxed">
            Urodynamic study, uroflowmetry and bladder function testing in HSR Layout, Bengaluru.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-semibold text-white">Address</h3>
          <address className="mt-4 text-sm leading-relaxed not-italic">
            {CLINIC.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={CLINIC.phoneHref} className="hover:text-white">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="break-all hover:text-white">
                {CLINIC.email}
              </a>
            </li>
            <li>
              <a href={CLINIC.website} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Main website
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-sm font-semibold text-white">Pages</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href !== '#contact') return
                    e.preventDefault()
                    openModal()
                  }}
                  className="hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col gap-6 border-t border-white/10 py-8 pr-24 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {YEAR} HSR Urology Clinic. All rights reserved.</p>
        <ul className="flex items-center gap-2" aria-label="Social media">
          {SOCIAL_LINKS.map(({ label, href }) =>
            href ? (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`HSR Urology Clinic on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-navy-100 transition-colors hover:border-white/40 hover:text-white"
                >
                  <SocialIcon name={label} />
                </a>
              </li>
            ) : (
              // Placeholder: add the verified profile URL in src/data/clinic.js to activate
              <li key={label}>
                <span
                  role="img"
                  aria-label={`${label} profile (not yet available)`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-navy-500"
                >
                  <SocialIcon name={label} />
                </span>
              </li>
            ),
          )}
        </ul>
      </div>
      <p className="container-page pr-24 pb-8 text-xs leading-relaxed text-navy-400">
        Information on this page is for general education and does not replace a consultation with a urologist.
      </p>
    </footer>
  )
}
