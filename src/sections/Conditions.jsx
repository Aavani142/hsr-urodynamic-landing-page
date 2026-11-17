import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const CONDITIONS = [
  { title: 'Overactive bladder', text: 'Checks for bladder contractions that cause urgency and frequency.' },
  { title: 'Urinary incontinence', text: 'Helps tell stress leakage from urge leakage, which are treated differently.' },
  { title: 'Bladder dysfunction', text: 'Shows whether the problem is in storing urine or emptying it.' },
  { title: 'Urinary retention', text: 'Helps find out if a blockage or a weak bladder is the cause.' },
  { title: 'Neurogenic bladder', text: 'Assesses bladder function in people with nerve conditions.' },
  { title: 'Prostate-related symptoms', text: 'Helps show if a weak stream is due to the prostate or the bladder.' },
]

export default function Conditions() {
  return (
    <section id="conditions" className="py-16 sm:py-24" aria-labelledby="conditions-heading">
      <div className="container-page">
        <SectionHeading
          id="conditions-heading"
          title="Understanding Your Urinary Symptoms"
          description="Testing helps your urologist evaluate these conditions, alongside your history and examination."
        />

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map(({ title, text }, i) => (
            <Reveal key={title} delay={0.04 * i} className="border-t border-line pt-5">
              <h3 className="font-serif text-xl font-medium">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
