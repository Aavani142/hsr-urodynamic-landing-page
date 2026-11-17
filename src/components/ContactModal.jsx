import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import ContactForm from './ContactForm'
import { useContactModal } from '../context/contactModal'
import { CLINIC } from '../data/clinic'

/**
 * Appointment popup. Centered dialog on desktop, bottom sheet on mobile.
 * Closes on Escape, backdrop click or the close button; keeps keyboard focus inside while open.
 */
export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()
  const dialogRef = useRef(null)
  const lastFocused = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined
    lastFocused.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusFirst = window.setTimeout(() => {
      dialogRef.current?.querySelector('input')?.focus({ preventScroll: true })
    }, 60)

    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusables = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.clearTimeout(focusFirst)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      lastFocused.current?.focus?.({ preventScroll: true })
    }
  }, [isOpen, closeModal])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            className="absolute inset-0 bg-navy-950/55 backdrop-blur-[2px]"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
            aria-describedby="modal-desc"
            className="relative max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-paper px-5 pt-6 pb-6 shadow-lift sm:rounded-2xl sm:px-8 sm:pt-8 sm:pb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-navy-800 transition-colors hover:bg-sand-100"
              aria-label="Close appointment form"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <h2 id="modal-heading" className="pr-10 text-xl font-semibold">
              Book an Appointment
            </h2>
            <p id="modal-desc" className="mt-1 mb-5 text-sm text-muted">
              Urodynamic Study · HSR Layout · {CLINIC.phoneDisplay}
            </p>

            <ContactForm source="popup" compact />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
