import { motion } from 'framer-motion'

/**
 * Fades and lifts its children into view once, when scrolled into the viewport.
 * Respects the user's reduced-motion preference via <MotionConfig reducedMotion="user"> in App.
 */
export default function Reveal({ as = 'div', delay = 0, y = 18, className = '', children, ...props }) {
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}
