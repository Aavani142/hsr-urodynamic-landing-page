const SPACES = [
  {
    img: '/images/urodynamics-lab.webp',
    w: 963,
    h: 1170,
    alt: 'Uroflowmetry and urodynamics lab at HSR Urology Clinic, HSR Layout',
    title: 'Uroflowmetry & urodynamics lab',
    text: 'The urodynamic testing system and flow-measuring commode, in a private room.',
    pos: 'object-center',
  },
  {
    img: '/images/doctor-consultation.webp',
    w: 1400,
    h: 933,
    alt: 'Consultation room where test results are discussed',
    title: 'Consultation',
    text: 'Where your history is taken and your results are explained.',
    pos: 'object-[20%_center]',
  },
]

export default function Clinic() {
  return (
    <section id="clinic" className="section-y bg-white" aria-labelledby="clinic-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <p data-reveal className="t-eyebrow">Our HSR Layout clinic</p>
          <h2 id="clinic-heading" data-lines className="t-h2 mt-3">
            Testing and consultation under one roof
          </h2>
          <p data-reveal className="mt-4 leading-relaxed text-muted">
            You do not need to go anywhere else for the test. It happens here, and the results are explained here.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SPACES.map((s) => (
            <figure key={s.title} data-reveal>
              <div data-clip className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-sand-100 lg:aspect-[16/9]">
                <img
                  data-parallax="0.1"
                  src={s.img}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  loading="lazy"
                  className={`absolute inset-x-0 -top-[6%] h-[112%] w-full object-cover ${s.pos}`}
                />
              </div>
              <figcaption className="mt-4">
                <span className="t-h3 block text-navy-900">{s.title}</span>
                <span className="mt-1 block text-[0.95rem] text-muted">{s.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
