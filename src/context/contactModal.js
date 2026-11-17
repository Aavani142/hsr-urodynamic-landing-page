import { createContext, useContext } from 'react'

export const ContactModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

/** Access the appointment popup from any component: const { openModal } = useContactModal() */
export function useContactModal() {
  return useContext(ContactModalContext)
}
