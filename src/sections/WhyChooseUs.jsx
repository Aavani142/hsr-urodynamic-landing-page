// Based on information published at https://www.hsrurologyclinic.com/
const REASONS = [
  {
    title: 'Urology-focused care',
    text: 'A clinic dedicated to kidney, prostate and urinary health, so your symptoms are assessed by a specialist.',
  },
  {
    title: 'Testing on site',
    text: 'Uroflowmetry and urodynamics are done in our own lab. No referrals elsewhere for the test.',
  },
  {
    title: 'Explained in person',
    text: 'The urologist goes through your results with you and talks you through the options.',
  },
  {
    title: 'Private and comfortable',
    text: 'Tests take place in a private room, and your information stays confidential.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-y bg-white" aria-labelledby="why-heading">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal className="t-eyebrow">Why choose us</p>
          <h2 id="why-heading" data-lines className="t-h2 mt-3">
            Why people in HSR Layout choose HSR Urology Clinic
          </h2>
        </div>

        <ul data-stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ title, text }, i) => (
            <li data-item key={title} className="rounded-3xl bg-paper p-7 ring-1 ring-line">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay/10 font-display text-sm font-semibold text-clay">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="t-h3 mt-5">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
