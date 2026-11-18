import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'
import { WhatsAppIcon } from './SocialIcon'
import { useContactModal } from '../context/contactModal'
import { CLINIC, NAV_LINKS, whatsappLink } from '../data/clinic'

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1))
const ease = [0.76, 0, 0.24, 1]

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
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return active
}

/** Hides the bar while scrolling down, brings it back on the way up. */
function useHideOnScroll() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const last = useRef(0)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setAtTop(y < 24)
      setHidden(y > 400 && y > last.current)
      last.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return { hidden, atTop }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const { hidden, atTop } = useHideOnScroll()
  const { openModal } = useContactModal()

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

  // "Contact" opens the appointment popup rather than only scrolling
  const onNavClick = (e, href) => {
    setOpen(false)
    if (href !== '#contact') return
    e.preventDefault()
    openModal()
  }

  const book = () => {
    setOpen(false)
    openModal()
  }

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
          atTop && !open ? 'border-b border-transparent bg-white' : 'border-b border-navy-900/10 bg-white/95 shadow-[0_8px_24px_-18px_rgb(8_44_66/0.35)] backdrop-blur-md'
        }`}
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease }}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        <nav className="container-page flex h-[72px] items-center justify-between gap-6" aria-label="Primary">
          <a href="#top" className="flex shrink-0 items-center" aria-label="HSR Urology Clinic, back to top">
            <img
              src="/images/hsr-urology-clinic-logo.png"
              alt="HSR Urology Clinic logo"
              width="640"
              height="303"
              className="h-10 w-auto mix-blend-multiply sm:h-11"
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => onNavClick(e, link.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative py-2 text-[0.9rem] transition-colors duration-300 ${
                      isActive ? 'text-navy-900' : 'text-muted hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-clay"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={CLINIC.phoneHref} className="link-underline hidden text-sm font-medium text-navy-900 xl:inline">
              {CLINIC.phoneDisplay}
            </a>
            <Button onClick={book} size="sm" variant="primary">
              Book an appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-11 items-center gap-3 text-sm font-medium text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className="relative block h-3 w-6" aria-hidden="true">
              <motion.span
                className="absolute left-0 block h-px w-6 bg-current"
                animate={open ? { top: 6, rotate: 45 } : { top: 2, rotate: 0 }}
                transition={{ duration: 0.4, ease }}
              />
              <motion.span
                className="absolute left-0 block h-px w-6 bg-current"
                animate={open ? { top: 6, rotate: -45 } : { top: 10, rotate: 0 }}
                transition={{ duration: 0.4, ease }}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-white pt-[72px] lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="container-page flex flex-1 flex-col justify-between overflow-y-auto pt-8 pb-10">
              <ul>
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.a
                      href={link.href}
                      onClick={(e) => onNavClick(e, link.href)}
                      className={`block py-2 font-display text-[2.4rem] leading-tight font-semibold tracking-tight ${
                        active === link.href.slice(1) ? 'text-clay' : 'text-navy-900'
                      }`}
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>

              <motion.div
                className="mt-10 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Button onClick={book} size="lg" arrow className="w-full">
                  Book an appointment
                </Button>
                <div className="flex items-center justify-between text-sm text-navy-900">
                  <a href={CLINIC.phoneHref} className="link-underline font-medium">
                    {CLINIC.phoneDisplay}
                  </a>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
