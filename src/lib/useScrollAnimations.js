import { useLayoutEffect } from 'react'
import { EASE, MOTION_OK, ScrollTrigger, SplitText, gsap } from './gsap'

/**
 * Page-wide scroll animations, driven by data attributes so sections stay declarative:
 *
 *   data-lines          headline revealed line by line (masked) when it enters the viewport
 *   data-words          paragraph brightens word by word, tied to scroll position
 *   data-reveal         element fades and rises into place
 *   data-stagger        direct children marked [data-item] reveal one after another
 *   data-parallax="n"   element drifts vertically while scrolling (n = strength, e.g. 0.15)
 *   data-clip           image container uncovers from the bottom
 *
 * GSAP owns everything scroll-driven. Framer Motion is kept for hover, taps, the menu and the popup,
 * and never animates the same elements, so the two libraries do not fight.
 */
export default function useScrollAnimations(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const mm = gsap.matchMedia()

    mm.add(MOTION_OK, () => {
      const splits = []

      root.querySelectorAll('[data-lines]').forEach((el) => {
        splits.push(
          SplitText.create(el, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'split-line',
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 105,
                duration: 1.1,
                ease: 'power4.out',
                stagger: 0.09,
                scrollTrigger: { trigger: el, start: 'top 85%', once: true },
              }),
          }),
        )
      })

      // Paragraph that "fills in" word by word as it scrolls through the viewport
      root.querySelectorAll('[data-words]').forEach((el) => {
        const split = SplitText.create(el, { type: 'words' })
        splits.push(split)
        gsap.fromTo(
          split.words,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
          },
        )
      })

      gsap.utils.toArray(root.querySelectorAll('[data-reveal]')).forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 40,
          duration: 1,
          ease: EASE,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray(root.querySelectorAll('[data-stagger]')).forEach((group) => {
        gsap.from(group.querySelectorAll(':scope > [data-item]'), {
          autoAlpha: 0,
          y: 32,
          duration: 0.9,
          ease: EASE,
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })

      gsap.utils.toArray(root.querySelectorAll('[data-clip]')).forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        )
      })

      gsap.utils.toArray(root.querySelectorAll('[data-parallax]')).forEach((el) => {
        const strength = parseFloat(el.dataset.parallax) || 0.15
        gsap.fromTo(
          el,
          { yPercent: -strength * 50 },
          {
            yPercent: strength * 50,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })

      return () => splits.forEach((s) => s.revert())
    })

    // Web fonts change line breaks and section heights; recalculate once they are in.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())

    return () => mm.revert()
  }, [rootRef])
}
