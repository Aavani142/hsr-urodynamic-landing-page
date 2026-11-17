import Reveal from '../components/Reveal'

// All details below are taken from the "About the Doctor" section of https://www.hsrurologyclinic.com/
const DETAILS = [
  { label: 'Qualifications', value: 'MBBS and MS from Dr. NTR University of Health Sciences; M.Ch from MAHER' },
  { label: 'Expertise', value: 'Urology, Andrology and Renal Transplantation' },
  {
    label: 'Surgical experience',
    value: 'Endourology (HOLEP, RIRS) and Robotic Urological Surgery',
  },
  {
    label: 'Training',
    value:
      'Renal Transplant at the Institute of Kidney Diseases & Research Centre (IKDRC), Ahmedabad. Robotic and laparoscopic surgery at Kochi, Kerala.',
  },
  {
    label: 'Previously',
    value:
      "Consultant at Sakra World Hospital, Bellandur, Bangalore. Associate Professor at St. John's Medical College and Hospital, Bangalore.",
  },
]

export default function Doctor() {
  return (
    <section id="doctor" className="bg-sand-100 py-16 sm:py-24" aria-labelledby="doctor-heading">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <img
            src="/images/dr-caranj-venugopal.webp"
            alt="Dr Caranj S. Venugopal, Consultant Urologist at HSR Urology Clinic, HSR Layout"
            width="800"
            height="1200"
            loading="lazy"
            className="aspect-[4/5] w-full max-w-sm rounded-lg object-cover object-top"
          />
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <p className="text-sm font-semibold text-teal-600">Meet the Doctor</p>
            <h2 id="doctor-heading" className="mt-2 font-serif text-[2rem] leading-tight font-medium sm:text-[2.5rem]">
              Dr Caranj S. Venugopal
            </h2>
            <p className="mt-2 text-lg text-navy-800">Consultant, Urology &amp; Renal Transplantation, Aster RV Hospital</p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-8 border-t border-sand-200">
              {DETAILS.map(({ label, value }) => (
                <div key={label} className="grid gap-1 border-b border-sand-200 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-navy-900">{label}</dt>
                  <dd className="leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
