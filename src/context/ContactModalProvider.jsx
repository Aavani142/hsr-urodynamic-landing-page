import { useCallback, useEffect, useMemo, useState } from 'react'
import { ContactModalContext } from './contactModal'

const AUTO_OPEN_DELAY_MS = 2500

/**
 * Holds the appointment popup state.
 * The popup opens automatically shortly after every page load,
 * and can be opened any time via useContactModal().openModal().
 */
export default function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), AUTO_OPEN_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const value = useMemo(() => ({ isOpen, openModal, closeModal }), [isOpen, openModal, closeModal])

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>
}
