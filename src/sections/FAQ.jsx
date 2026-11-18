import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import { FAQS } from '../data/faqs'

function FaqItem({ item, isOpen, onToggle }) {
  const id = useId()

  return (
    <li className="border-b border-line">
      <h3>
        <button
          id={`${id}-b`}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`${id}-p`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-3.5 text-left"
        >
          <span
            className={`font-display text-base font-semibold transition-colors duration-300 sm:text-lg ${
              isOpen ? 'text-clay' : 'text-navy-900 group-hover:text-clay'
            }`}
          >
            {item.q}
          </span>
          <span
            className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
              isOpen ? 'border-clay bg-clay text-white' : 'border-line text-navy-900'
            }`}
            aria-hidden="true"
          >
            <span className="absolute h-px w-3.5 bg-current" />
            <motion.span
              className="absolute h-3.5 w-px bg-current"
              animate={{ scaleY: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </button>
      </h3>
      <div id={`${id}-p`} role="region" aria-labelledby={`${id}-b`} className="faq-panel" data-open={isOpen} inert={!isOpen}>
        <div className="overflow-hidden">
          <p className="max-w-2xl pr-12 pb-5 leading-relaxed text-ink">{item.a}</p>
        </div>
      </div>
    </li>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="section-y bg-white" aria-labelledby="faq-heading">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p data-reveal className="t-eyebrow">FAQs</p>
          <h2 id="faq-heading" data-lines className="t-h2 mt-3">
            Frequently asked questions
          </h2>
          <p data-reveal className="mt-6 max-w-xs leading-relaxed text-muted">
            Common questions about the urodynamic study and uroflowmetry test.
          </p>
        </div>

        <ul data-reveal className="border-t border-line lg:col-span-7 lg:col-start-6">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
