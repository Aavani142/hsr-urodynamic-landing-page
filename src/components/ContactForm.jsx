import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleCheck, Phone } from 'lucide-react'
import Button from './Button'
import { WhatsAppIcon } from './SocialIcon'
import { CLINIC, whatsappLink } from '../data/clinic'

const INITIAL = { name: '', phone: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.'
  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 13) errors.phone = 'Please enter a valid phone number.'
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  return errors
}

function buildMessage(v) {
  return [
    'Hello HSR Urology Clinic, I would like to book an appointment for a Urodynamic Study / bladder function test.',
    '',
    `Name: ${v.name.trim()}`,
    `Phone: ${v.phone.trim()}`,
    v.email.trim() && `Email: ${v.email.trim()}`,
    v.message.trim() && `Message: ${v.message.trim()}`,
  ]
    .filter((line) => line !== '' && line !== false)
    .join('\n')
}

// Optional hook for Google Ads / GA4 conversion tracking, if a tag is installed on the page.
function trackLead(source) {
  try {
    window.dataLayer?.push({ event: 'generate_lead', form_source: source })
    window.gtag?.('event', 'generate_lead', { form_source: source })
  } catch {
    // tracking must never break the form
  }
}

const inputClass = (hasError) =>
  `block w-full rounded-xl border bg-paper px-4 py-3.5 text-[0.95rem] text-navy-900 placeholder:text-muted/70 transition-colors focus:outline-none focus:ring-2 ${
    hasError ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-line focus:border-teal-500 focus:ring-teal-100'
  }`

function Field({ id, label, required, error, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
        {required ? (
          <span className="text-clay" aria-hidden="true">
            {' '}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * Appointment request form (Full Name, Phone, Email, Message).
 * No backend is connected: on submit the enquiry opens in WhatsApp, pre-filled and addressed to the clinic,
 * so the patient only needs to tap "Send". Replace `onSubmit` with an API call once a form service exists.
 */
export default function ContactForm({ source = 'page', compact = false }) {
  const uid = useId()
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const fid = (name) => `${uid}-${name}`

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstError = Object.keys(found)[0]
    if (firstError) {
      document.getElementById(fid(firstError))?.focus()
      return
    }
    trackLead(source)
    window.open(whatsappLink(buildMessage(values)), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const describedBy = (name) => (errors[name] ? `${fid(name)}-error` : undefined)

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="status"
          className="py-4"
        >
          <CircleCheck className="h-9 w-9 text-teal-600" strokeWidth={1.5} aria-hidden="true" />
          <h3 className="mt-4 text-xl font-semibold">Almost done</h3>
          <p className="mt-2 leading-relaxed text-ink">
            Tap <strong>Send</strong> in WhatsApp to complete your request.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink(buildMessage(values))} target="_blank" rel="noopener noreferrer" variant="whatsapp" icon={WhatsAppIcon}>
              Open WhatsApp again
            </Button>
            <Button href={CLINIC.phoneHref} variant="outline" icon={Phone}>
              Call {CLINIC.phoneDisplay}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => {
              setSent(false)
              setValues(INITIAL)
            }}
            className="mt-5 text-sm font-medium text-muted underline-offset-4 hover:text-navy-800 hover:underline"
          >
            Start a new request
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          noValidate
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2 sm:gap-5'}`}>
            <Field id={fid('name')} label="Full Name" required error={errors.name}>
              <input
                id={fid('name')}
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={onChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={describedBy('name')}
                className={inputClass(errors.name)}
                placeholder="Your full name"
              />
            </Field>
            <Field id={fid('phone')} label="Phone Number" required error={errors.phone}>
              <input
                id={fid('phone')}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={onChange}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={describedBy('phone')}
                className={inputClass(errors.phone)}
                placeholder="+91 98765 43210"
              />
            </Field>
            <Field id={fid('email')} label="Email" error={errors.email} className={compact ? '' : 'sm:col-span-2'}>
              <input
                id={fid('email')}
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={describedBy('email')}
                className={inputClass(errors.email)}
                placeholder="you@example.com"
              />
            </Field>
            <Field id={fid('message')} label="Message" className={compact ? '' : 'sm:col-span-2'}>
              <textarea
                id={fid('message')}
                name="message"
                rows={compact ? 2 : 4}
                value={values.message}
                onChange={onChange}
                className={`${inputClass(false)} resize-y`}
                placeholder="Briefly describe your symptoms or the test you were advised"
              />
            </Field>
          </div>

          <Button type="submit" variant="primary" size="lg" icon={WhatsAppIcon} className="mt-6 w-full">
            Send enquiry on WhatsApp
          </Button>
          <p className="mt-3 text-center text-xs leading-relaxed text-muted">
            Submitting opens WhatsApp with your details. Your enquiry is sent when you tap Send.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
