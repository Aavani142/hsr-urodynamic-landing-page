import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const STEPS = [
  { title: 'Initial consultation', text: 'The urologist reviews your symptoms and history.' },
  { title: 'Preparation and assessment', text: 'You get simple instructions and the steps are explained.' },
  { title: 'Bladder function testing', text: 'The test is done in a private room.' },
  { title: 'Results and medical guidance', text: 'Your urologist explains the results and treatment options.' },
]

export default function Procedure() {
  return (
    <section id="procedure" className="bg-sand-100 py-16 sm:py-24" aria-labelledby="procedure-heading">
      <div className="container-page">
        <SectionHeading id="procedure-heading" title="What Happens During a Urodynamic Test?" />

        <ol className="relative mt-10 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden="true" className="absolute top-5 right-[12%] left-5 hidden h-px bg-sand-200 lg:block" />
          <span aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-px bg-sand-200 lg:hidden" />
          {STEPS.map(({ title, text }, i) => (
            <Reveal as="li" key={title} delay={0.08 * i} className="relative flex gap-5 lg:block">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-800 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-[0.95rem]">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
