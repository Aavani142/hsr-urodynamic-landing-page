// Minimal brand glyphs (lucide-react v1 no longer ships brand icons).
const PATHS = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  Facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" />,
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.5v.01M12 16v-3.25a2.25 2.25 0 0 1 4.5 0V16M12 10.5V16" />
    </>
  ),
  YouTube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" />
    </>
  ),
}

export default function SocialIcon({ name, className = 'h-4.5 w-4.5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}

/** WhatsApp-style glyph: chat bubble with a handset. Accepts className like a Lucide icon. */
export function WhatsAppIcon({ className = 'h-5 w-5', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path
        d="M12 2.6a9.4 9.4 0 0 0-8.1 14.15L2.6 21.4l4.78-1.25A9.4 9.4 0 1 0 12 2.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 7.4c-.22-.5-.45-.5-.66-.51h-.56a1.08 1.08 0 0 0-.78.36 3.3 3.3 0 0 0-1.02 2.45 5.72 5.72 0 0 0 1.2 3.04 12.1 12.1 0 0 0 5.03 4.44c2.48.98 2.99.79 3.53.74a2.97 2.97 0 0 0 1.98-1.4 2.46 2.46 0 0 0 .17-1.4c-.07-.12-.26-.19-.55-.33s-1.74-.86-2-.96-.47-.14-.66.15-.76.96-.93 1.15-.34.22-.63.07a7.93 7.93 0 0 1-2.34-1.44 8.78 8.78 0 0 1-1.62-2.01c-.17-.29 0-.45.13-.59l.43-.5a1.96 1.96 0 0 0 .29-.48.53.53 0 0 0-.03-.5c-.07-.15-.64-1.6-.9-2.18Z"
        fill="currentColor"
      />
    </svg>
  )
}
