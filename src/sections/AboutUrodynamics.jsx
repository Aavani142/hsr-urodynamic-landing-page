import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const MEASURES = [
  { title: 'Bladder storage', text: 'How much your bladder holds and when you feel the urge to go.' },
  { title: 'Bladder pressure', text: 'Pressure in the bladder while it fills and empties.' },
  { title: 'Urine flow', text: 'How fast and how completely you empty your bladder.' },
]

export default function AboutUrodynamics() {
  return (
    <section id="about" className="py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="about-heading" title="What is a Urodynamic Study?" />
          <Reveal className="mt-5 space-y-4 text-[1.05rem] leading-relaxed">
            <p>
              A urodynamic study is a set of bladder function tests. It shows how well your bladder stores and releases
              urine.
            </p>
            <p>
              The results help your urologist find the cause of symptoms like leakage, urgency or a weak stream, and
              choose the right treatment.
            </p>
          </Reveal>
        </div>

        <ul className="self-start border-t border-line">
          {MEASURES.map(({ title, text }, i) => (
            <Reveal as="li" key={title} delay={0.05 * i} className="border-b border-line py-5">
              <h3 className="font-semibold text-navy-900">{title}</h3>
              <p className="mt-1 text-[0.95rem]">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
