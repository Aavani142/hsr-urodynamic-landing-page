import { useLayoutEffect, useRef } from 'react'
import { Check, Phone } from 'lucide-react'
import Button from '../components/Button'
import { WhatsAppIcon } from '../components/SocialIcon'
import { useContactModal } from '../context/contactModal'
import { CLINIC, whatsappLink } from '../data/clinic'
import { MOTION_OK, SplitText, gsap } from '../lib/gsap'

const INTRO_DELAY = 0.1

const BADGES = ['Consultant urologist', 'In-house testing lab', 'Private testing room']

const FACTS = [
  { value: 'M.Ch', label: 'Urology specialist' },
  { value: '2 tests', label: 'Uroflowmetry & urodynamics' },
  { value: 'On site', label: 'Testing lab' },
  { value: 'Private', label: 'Testing room' },
]

export default function Hero() {
  const { openModal } = useContactModal()
  const root = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      const q = gsap.utils.selector(root)
      const split = SplitText.create(q('[data-hero-title]'), { type: 'lines', mask: 'lines', linesClass: 'split-line' })

      gsap
        .timeline({ delay: INTRO_DELAY, defaults: { ease: 'power3.out' } })
        .from(q('[data-hero-badge]'), { autoAlpha: 0, y: 10, duration: 0.6 })
        .from(split.lines, { yPercent: 105, duration: 0.9, stagger: 0.08, ease: 'power4.out' }, 0.1)
        .from(q('[data-hero-fade]'), { autoAlpha: 0, y: 16, duration: 0.7, stagger: 0.07 }, 0.35)
        .fromTo(
          q('[data-hero-media]'),
          { clipPath: 'inset(8% 8% 8% 8% round 1.5rem)', autoAlpha: 0 },
          { clipPath: 'inset(0% 0% 0% 0% round 1.5rem)', autoAlpha: 1, duration: 1.1, ease: 'power3.inOut' },
          0.15,
        )
        .from(q('[data-hero-note]'), { autoAlpha: 0, y: 14, duration: 0.6, stagger: 0.12 }, 0.9)

      gsap.to(q('[data-hero-img]'), {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      return () => split.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <section ref={root} id="top" className="bg-navy-900 pt-24 pb-16 text-navy-100 lg:flex lg:h-[100svh] lg:min-h-[620px] lg:items-center lg:pt-[72px] lg:pb-0" aria-labelledby="hero-heading">
      <div className="container-page grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p
            data-hero-badge
            className="inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-full border border-white/15 px-4 py-2 text-[0.8rem] text-navy-100"
          >
            {BADGES.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#f0a49c]" aria-hidden="true" />
                {b}
              </span>
            ))}
          </p>

          <h1 id="hero-heading" data-hero-title className="t-display mt-6 text-white">
            Urodynamic Study in <span className="text-[#f0a49c]">HSR Layout, Bengaluru</span>
          </h1>

          <p data-hero-fade className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-navy-100">
            Understand your bladder health with uroflowmetry and urodynamic testing at HSR Urology Clinic, Sector 6. Results
            are explained to you by the urologist.
          </p>

          <div data-hero-fade className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={openModal} variant="light" size="lg" arrow>
              Book an appointment
            </Button>
            <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer" variant="outlineLight" size="lg" icon={WhatsAppIcon}>
              Chat on WhatsApp
            </Button>
          </div>

          <ul data-hero-fade className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FACTS.map(({ value, label }) => (
              <li key={value} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-display text-lg font-semibold text-white">{value}</p>
                <p className="mt-0.5 text-xs leading-snug text-navy-200">{label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-[30rem]">
          <div data-hero-media className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-800 lg:aspect-auto lg:h-[calc(100svh-72px-6rem)] lg:max-h-[38rem]">
            <picture>
              <source srcSet="/images/doctor-consultation.webp" type="image/webp" />
              <img
                data-hero-img
                src="/images/doctor-consultation.jpg"
                alt="Urologist in HSR Layout reviewing bladder function test results during a patient consultation"
                width="1400"
                height="933"
                fetchPriority="high"
                className="absolute inset-x-0 -top-[4%] h-[108%] w-full object-cover object-[72%_center]"
              />
            </picture>
          </div>

          <a
            data-hero-note
            href="#doctor"
            className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-lift sm:-left-8"
          >
            <img
              src="/images/dr-caranj-venugopal.webp"
              alt=""
              width="800"
              height="1200"
              className="h-11 w-11 rounded-full object-cover object-top"
            />
            <span className="text-sm leading-tight">
              <span className="block font-display font-semibold text-navy-900">Dr Caranj S. Venugopal</span>
              <span className="text-xs text-muted">Consultant Urologist</span>
            </span>
          </a>

          <a
            data-hero-note
            href={CLINIC.phoneHref}
            className="absolute top-6 -right-3 hidden items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-lift sm:flex sm:-right-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay text-white">
              <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <span className="text-sm leading-tight">
              <span className="block text-xs text-muted">Call to book</span>
              <span className="font-display font-semibold text-navy-900">{CLINIC.phoneDisplay}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
