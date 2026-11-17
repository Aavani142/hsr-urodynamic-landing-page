import { useCallback, useEffect, useMemo, useState } from 'react'
import { ContactModalContext } from './contactModal'

const AUTO_OPEN_DELAY_MS = 2500
const SESSION_KEY = 'hsr-uds-popup-dismissed'

function wasDismissedThisSession() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === '1'
  } catch {
    return false
  }
}

function rememberDismissal() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    // storage unavailable (private mode etc.) — popup may show again, which is acceptable
  }
}

/**
 * Holds the appointment popup state.
 * The popup opens automatically shortly after the page loads (once per browser session),
 * and can be opened any time from "Book Appointment" buttons via useContactModal().
 */
export default function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => {
    setIsOpen(false)
    rememberDismissal()
  }, [])

  useEffect(() => {
    if (wasDismissedThisSession()) return undefined
    const timer = window.setTimeout(() => setIsOpen(true), AUTO_OPEN_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const value = useMemo(() => ({ isOpen, openModal, closeModal }), [isOpen, openModal, closeModal])

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>
}
