import Button from '../components/Button'
import { useContactModal } from '../context/contactModal'

const TESTS = [
  {
    name: 'Uroflowmetry Test',
    text: 'You pass urine into a special commode in a private room. It records how fast urine flows and how much you pass.',
    facts: [
      ['Catheter', 'None'],
      ['Time', 'A few minutes'],
    ],
    dark: false,
  },
  {
    name: 'Urodynamic Study',
    text: 'Thin, soft catheters record bladder pressure while it fills and empties. It shows how the bladder muscle and outlet behave.',
    facts: [
      ['Catheter', 'Thin, flexible'],
      ['Time', 'About 30 to 60 min'],
    ],
    dark: true,
  },
  {
    name: 'Bladder Function Evaluation',
    text: 'A full assessment with the urologist, who looks at your symptoms and history and decides which test you need.',
    facts: [
      ['Starts with', 'Consultation'],
      ['Outcome', 'A clear plan'],
    ],
    dark: false,
  },
]

export default function TestTypes() {
  const { openModal } = useContactModal()

  return (
    <section id="tests" className="section-y bg-white" aria-labelledby="tests-heading">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p data-reveal className="t-eyebrow">Tests we offer</p>
            <h2 id="tests-heading" data-lines className="t-h2 mt-3">
              Uroflowmetry Test and Urodynamic Study
            </h2>
            <p data-reveal className="mt-4 leading-relaxed text-muted">
              Two tests that answer different questions. Many people need only the first.
            </p>
          </div>
          <div data-reveal>
            <Button onClick={openModal} variant="dark" size="md" arrow>
              Ask which test you need
            </Button>
          </div>
        </div>

        <div data-stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {TESTS.map(({ name, text, facts, dark }) => (
            <article
              data-item
              key={name}
              className={`flex flex-col rounded-3xl p-7 sm:p-8 ${dark ? 'bg-navy-900 text-navy-100' : 'bg-paper ring-1 ring-line'}`}
            >
              <h3 className={`font-display text-xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-navy-900'}`}>
                {name}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed">{text}</p>
              <dl className={`mt-6 grid grid-cols-2 gap-4 border-t pt-5 ${dark ? 'border-white/10' : 'border-line'}`}>
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className={`text-xs ${dark ? 'text-navy-300' : 'text-muted'}`}>{k}</dt>
                    <dd className={`mt-0.5 font-display font-semibold ${dark ? 'text-white' : 'text-navy-900'}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
