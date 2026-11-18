const MEASURES = [
  { word: 'Storage', text: 'How much your bladder holds, and when you first feel the need to go.' },
  { word: 'Pressure', text: 'What happens inside the bladder as it fills and as you pass urine.' },
  { word: 'Flow', text: 'How fast urine leaves, and whether the bladder empties fully.' },
]

export default function AboutUrodynamics() {
  return (
    <section id="about" className="section-y bg-paper" aria-labelledby="about-heading">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p data-reveal className="t-eyebrow">About the test</p>
          <h2 id="about-heading" data-lines className="t-h2 mt-3">
            What is a Urodynamic Study?
          </h2>
          <p data-reveal className="mt-4 max-w-lg leading-relaxed">
            A urodynamic study is a set of bladder function tests. Scans show what the urinary tract looks like;
            urodynamics shows how it works.
          </p>
          <p data-reveal className="mt-3 max-w-lg leading-relaxed text-muted">
            That helps when leakage, urgency or a weak stream has no obvious cause, so treatment can be chosen with
            confidence.
          </p>
        </div>

        <dl data-stagger className="divide-y divide-line self-center border-y border-line">
          {MEASURES.map(({ word, text }) => (
            <div data-item key={word} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <dt className="font-display text-lg font-semibold text-navy-900">{word}</dt>
              <dd className="text-muted">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
