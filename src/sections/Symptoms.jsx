import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const SYMPTOMS = [
  'Frequent urination',
  'Sudden urge to urinate',
  'Weak urine stream',
  'Difficulty starting urination',
  'Urinary leakage',
  'Incomplete bladder emptying',
  'Urinary retention',
  'Difficulty controlling the bladder',
]

export default function Symptoms() {
  return (
    <section id="symptoms" className="bg-sand-100 py-16 sm:py-24" aria-labelledby="symptoms-heading">
      <div className="container-page">
        <SectionHeading
          id="symptoms-heading"
          title="When Should You Consider a Urodynamic Test?"
          description="Your urologist may suggest a test if you have any of these symptoms."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SYMPTOMS.map((title, i) => (
            <Reveal
              as="li"
              key={title}
              delay={0.03 * i}
              className="rounded-lg border-l-2 border-teal-600 bg-paper px-5 py-4 font-semibold text-navy-900"
            >
              {title}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
