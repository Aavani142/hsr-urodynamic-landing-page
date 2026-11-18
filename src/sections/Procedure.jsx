const STEPS = [
  {
    title: 'Initial consultation',
    text: 'You talk through your symptoms, history and medicines with the urologist.',
    points: ['Symptoms reviewed', 'Examination', 'Decide if testing helps'],
  },
  {
    title: 'Preparation',
    text: 'You are told what will happen and how to prepare before anything starts.',
    points: ['Simple instructions', 'Questions answered', 'Nothing rushed'],
  },
  {
    title: 'Bladder function testing',
    text: 'The recommended test is done in a private room. You can ask to pause at any point.',
    points: ['Private room', 'Uroflowmetry or urodynamics', 'Readings recorded'],
  },
  {
    title: 'Results and guidance',
    text: 'Your urologist explains the readings and the treatment options that follow.',
    points: ['Explained in person', 'Treatment options', 'Clear next steps'],
  },
]

export default function Procedure() {
  return (
    <section id="procedure" className="section-y bg-paper" aria-labelledby="procedure-heading">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal className="t-eyebrow">Simple. Private. Clear.</p>
          <h2 id="procedure-heading" data-lines className="t-h2 mt-3">
            What happens during a Urodynamic Test?
          </h2>
          <p data-reveal className="mt-4 leading-relaxed text-muted">
            Exact preparation differs from person to person. The clinic gives you instructions for your test.
          </p>
        </div>

        <ol data-stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ title, text, points }, i) => (
            <li data-item key={title} className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-line">
              <span className="font-display text-3xl font-semibold text-clay/80">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="t-h3 mt-4">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{text}</p>
              <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-sm text-navy-900">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-clay" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
