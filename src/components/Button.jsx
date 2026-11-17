import { motion } from 'framer-motion'

const BASE =
  'inline-flex items-center justify-center gap-2.5 rounded-md font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
  primary: 'bg-navy-800 text-white hover:bg-navy-950 focus-visible:outline-teal-500',
  accent: 'bg-teal-600 text-white hover:bg-teal-700 focus-visible:outline-teal-500',
  secondary:
    'border border-navy-800/25 bg-transparent text-navy-900 hover:border-navy-800 hover:bg-white focus-visible:outline-teal-500',
  light: 'bg-paper text-navy-900 hover:bg-white focus-visible:outline-white',
  outlineLight:
    'border border-white/35 text-white hover:border-white/70 hover:bg-white/10 focus-visible:outline-white',
  whatsapp: 'bg-whatsapp text-white hover:brightness-95 focus-visible:outline-teal-500',
}

const SIZES = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-5 text-[0.95rem]',
  lg: 'h-13 px-7 text-base',
}

/**
 * Reusable button. Renders an <a> when `href` is supplied, otherwise a <button>.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type,
  children,
  ...props
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`
  const Component = href ? motion.a : motion.button
  const iconEl = Icon ? <Icon className="h-4.5 w-4.5 shrink-0" aria-hidden="true" strokeWidth={2} /> : null

  return (
    <Component
      href={href}
      type={href ? undefined : (type ?? 'button')}
      className={classes}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      {...props}
    >
      {iconPosition === 'left' && iconEl}
      {children}
      {iconPosition === 'right' && iconEl}
    </Component>
  )
}
