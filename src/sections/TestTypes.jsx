import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const TESTS = [
  {
    title: 'Uroflowmetry Test',
    text: 'You pass urine into a special commode that measures your flow. Simple, quick and no catheter.',
  },
  {
    title: 'Urodynamic Study',
    text: 'Thin catheters measure bladder pressure as it fills and empties. Gives a detailed picture of bladder function.',
  },
  {
    title: 'Bladder Function Evaluation',
    text: 'A full assessment with your urologist, who decides which tests you need.',
  },
]

const COMPARISON = [
  { label: 'Measures', flow: 'Urine flow only', uds: 'Bladder pressure and flow' },
  { label: 'Catheter', flow: 'No', uds: 'Yes, thin and flexible' },
  { label: 'Time', flow: 'A few minutes', uds: 'About 30 to 60 minutes' },
]

export default function TestTypes() {
  return (
    <section id="tests" className="bg-navy-900 py-16 text-navy-100 sm:py-24" aria-labelledby="tests-heading">
      <div className="container-page">
        <SectionHeading id="tests-heading" tone="light" title="Bladder Function Tests We Offer" />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {TESTS.map(({ title, text }, i) => (
            <Reveal key={title} delay={0.06 * i} as="article" className="rounded-lg border-t-2 border-teal-300 bg-white/5 p-6">
              <h3 className="font-serif text-2xl font-medium text-white">{title}</h3>
              <p className="mt-2 leading-relaxed">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="font-serif text-2xl font-medium text-white">Uroflowmetry vs Urodynamic Study</h3>
          <div className="mt-5 overflow-x-auto rounded-lg ring-1 ring-white/10">
            <table className="w-full min-w-[30rem] text-left text-[0.95rem]">
              <caption className="sr-only">Difference between uroflowmetry and a urodynamic study</caption>
              <thead className="bg-white/5 text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">Uroflowmetry</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Urodynamic Study</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="px-5 py-3 font-medium text-white">
                      {row.label}
                    </th>
                    <td className="px-5 py-3">{row.flow}</td>
                    <td className="px-5 py-3">{row.uds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
