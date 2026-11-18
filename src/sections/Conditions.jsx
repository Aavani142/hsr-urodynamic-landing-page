const CONDITIONS = [
  { title: 'Overactive bladder', text: 'Whether the bladder contracts on its own while filling, causing urgency.' },
  { title: 'Urinary incontinence', text: 'Whether leaking comes from effort, from urgency, or both.' },
  { title: 'Bladder dysfunction', text: 'Whether the problem is in storing urine or in emptying it.' },
  { title: 'Urinary retention', text: 'Whether a blockage or a weak bladder muscle stops it emptying.' },
  { title: 'Neurogenic bladder', text: 'How the bladder behaves when nerves are affected, such as with diabetes.' },
  { title: 'Prostate-related symptoms', text: 'Whether a slow stream comes from the prostate or the bladder.' },
]

export default function Conditions() {
  return (
    <section id="conditions" className="section-y bg-paper" aria-labelledby="conditions-heading">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p data-reveal className="t-eyebrow">Conditions evaluated</p>
          <h2 id="conditions-heading" data-lines className="t-h2 mt-3">
            Understanding your urinary symptoms
          </h2>
          <p data-reveal className="mt-4 leading-relaxed text-muted">
            The same symptom can have different causes. Testing helps your urologist tell them apart, alongside your
            history and examination.
          </p>
        </div>

        <ol data-stagger className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {CONDITIONS.map(({ title, text }, i) => (
            <li data-item key={title} className="flex gap-4 border-t border-line py-6">
              <span className="font-display text-sm font-semibold text-clay">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="t-h3">{title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
