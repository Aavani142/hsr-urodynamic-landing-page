import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Menu, Phone, X } from 'lucide-react'
import Button from './Button'
import { WhatsAppIcon } from './SocialIcon'
import { useContactModal } from '../context/contactModal'
import { CLINIC, NAV_LINKS, whatsappLink } from '../data/clinic'

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1))

function useActiveSection() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return active
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()
  const { openModal } = useContactModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const book = () => {
    setOpen(false)
    openModal()
  }

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-navy-900 text-[0.8rem] text-navy-100 md:block">
        <div className="container-page flex h-10 items-center justify-between gap-6">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
            Urodynamic Study &amp; Uroflowmetry Lab · {CLINIC.addressShort}
          </p>
          <div className="flex items-center gap-6">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
              <WhatsAppIcon className="h-4 w-4 text-teal-300" />
              WhatsApp
            </a>
            <a href={CLINIC.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white">
              hsrurologyclinic.com
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow] duration-300 ${
          scrolled || open ? 'border-line bg-paper/95 shadow-[0_12px_30px_-24px_rgb(8_44_66/0.4)] backdrop-blur-md' : 'border-line/70 bg-paper'
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <nav className="container-page flex h-[76px] items-center justify-between gap-4" aria-label="Primary">
          <a href="#top" className="flex shrink-0 items-center" aria-label="HSR Urology Clinic — back to top">
            <img
              src="/images/hsr-urology-clinic-logo.png"
              alt="HSR Urology Clinic logo"
              width="640"
              height="303"
              className="h-11 w-auto mix-blend-multiply sm:h-12"
            />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative py-2 text-[0.92rem] font-medium transition-colors ${
                      isActive ? 'text-navy-900' : 'text-muted hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-navy-900"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={CLINIC.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-teal-600 xl:flex"
            >
              <Phone className="h-4 w-4 text-teal-600" aria-hidden="true" />
              {CLINIC.phoneDisplay}
            </a>
            <Button onClick={book} size="sm">
              Book Appointment
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={CLINIC.phoneHref}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy-800"
              aria-label={`Call ${CLINIC.name} on ${CLINIC.phoneDisplay}`}
            >
              <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-800 text-white"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              className="overflow-hidden border-t border-line bg-paper lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="container-page max-h-[calc(100dvh-76px)] overflow-y-auto pt-2 pb-6">
                <ul className="divide-y divide-line">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block py-3.5 text-lg font-medium ${
                          active === link.href.slice(1) ? 'text-teal-600' : 'text-navy-900'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Button href={CLINIC.phoneHref} variant="secondary" icon={Phone} onClick={() => setOpen(false)}>
                    {CLINIC.phoneDisplay}
                  </Button>
                  <Button onClick={book}>Book Appointment</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
