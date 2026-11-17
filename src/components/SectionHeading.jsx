import Reveal from './Reveal'

export default function SectionHeading({ title, description, id, align = 'left', tone = 'dark', className = '' }) {
  const centered = align === 'center'
  const light = tone === 'light'

  return (
    <Reveal className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      <h2
        id={id}
        className={`font-serif text-[2rem] leading-[1.12] font-medium sm:text-[2.5rem] ${light ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[1.05rem] leading-relaxed ${light ? 'text-navy-100' : 'text-ink'}`}>{description}</p>
      )}
    </Reveal>
  )
}
