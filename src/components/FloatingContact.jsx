import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { WhatsAppIcon } from './SocialIcon'
import { CLINIC, whatsappLink } from '../data/clinic'

function FloatingButton({ href, label, className, children, delay, external }) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lift ${className}`}
    >
      {children}
      <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden rounded-md bg-navy-950 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        {label}
      </span>
    </motion.a>
  )
}

/** Fixed WhatsApp + call shortcuts, bottom-right on every screen size. */
export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <FloatingButton href={CLINIC.phoneHref} label={`Call ${CLINIC.phoneDisplay}`} className="bg-navy-800" delay={0.9}>
        <Phone className="h-5.5 w-5.5" aria-hidden="true" />
      </FloatingButton>
      <FloatingButton href={whatsappLink()} label="Chat on WhatsApp" className="bg-whatsapp" delay={1.05} external>
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-20 motion-reduce:hidden" aria-hidden="true" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </FloatingButton>
    </div>
  )
}
