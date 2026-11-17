import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

// Based on information published at https://www.hsrurologyclinic.com/
const REASONS = [
  { title: 'Urology-focused care', text: 'Dedicated to kidney, prostate and urinary health.' },
  { title: 'Patient-oriented consultation', text: 'Clear explanations and treatment plans tailored to you.' },
  { title: 'Diagnostic evaluation', text: 'In-house uroflowmetry and urodynamics lab.' },
  { title: 'Convenient location', text: 'Sector 6, HSR Layout, Bengaluru.' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24" aria-labelledby="why-heading">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-lg">
          <img
            src="/images/urodynamics-lab.webp"
            alt="Uroflowmetry and urodynamics lab at HSR Urology Clinic, HSR Layout"
            width="963"
            height="1170"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
          />
        </Reveal>

        <div>
          <SectionHeading
            id="why-heading"
            title="Why Choose HSR Urology Clinic?"
            description="Consultation and testing with an experienced urologist in HSR Layout."
          />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {REASONS.map(({ title, text }, i) => (
              <Reveal as="li" key={title} delay={0.05 * i} className="border-t-2 border-teal-600 pt-4">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-[0.95rem]">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
