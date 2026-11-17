import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
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
          className="flex w-full items-center justify-between gap-6 py-5 text-left font-semibold text-navy-900 hover:text-teal-600"
        >
          {item.q}
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div id={`${id}-p`} role="region" aria-labelledby={`${id}-b`} className="faq-panel" data-open={isOpen} inert={!isOpen}>
        <div className="overflow-hidden">
          <p className="pr-10 pb-5 leading-relaxed">{item.a}</p>
        </div>
      </div>
    </li>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="py-16 sm:py-24" aria-labelledby="faq-heading">
      <div className="container-page max-w-3xl">
        <SectionHeading id="faq-heading" title="Frequently Asked Questions" align="center" />
        <Reveal className="mt-10">
          <ul className="border-t border-line">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
