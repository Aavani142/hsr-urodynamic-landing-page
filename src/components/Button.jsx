import { motion } from 'framer-motion'

const BASE =
  'group relative inline-flex items-center justify-center gap-3 rounded-full font-display font-semibold whitespace-nowrap transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
  primary: 'bg-clay text-white hover:bg-clay-dark focus-visible:outline-clay',
  dark: 'bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-teal-500',
  light: 'bg-white text-navy-900 hover:bg-paper focus-visible:outline-white',
  outline: 'border border-navy-900/20 text-navy-900 hover:border-navy-900/50 hover:bg-white/60 focus-visible:outline-teal-500',
  outlineLight: 'border border-white/30 text-white hover:border-white/70 focus-visible:outline-white',
  whatsapp: 'bg-whatsapp text-white hover:brightness-95 focus-visible:outline-teal-500',
}

const SIZES = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-6 text-[0.95rem]',
  lg: 'h-14 px-7 text-[0.98rem]',
}

const arrowMotion = {
  rest: { x: 0, y: 0 },
  hover: { x: 2, y: -2, transition: { type: 'spring', stiffness: 400, damping: 22 } },
}

/**
 * Pill button / link. Renders <a> when `href` is set, otherwise <button>.
 * `arrow` adds a small circular arrow badge that nudges on hover.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  arrow = false,
  className = '',
  type,
  children,
  ...props
}) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      type={href ? undefined : (type ?? 'button')}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${arrow ? 'pr-2' : ''} ${className}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Icon && <Icon className="h-4.5 w-4.5 shrink-0" aria-hidden="true" strokeWidth={1.75} />}
      <span>{children}</span>
      {arrow && (
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/12" aria-hidden="true">
          <motion.svg variants={arrowMotion} viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
            <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.6" />
          </motion.svg>
        </span>
      )}
    </Component>
  )
}
