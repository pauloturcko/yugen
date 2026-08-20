import React, {
  useEffect,
  useRef,
  useMemo,
  type ReactNode,
  type RefObject,
} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement>
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  baseTranslationY?: number
  blurStrength?: number
  containerClassName?: string
  textClassName?: string
  rotationEnd?: string
  wordAnimationEnd?: string
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  baseTranslationY = 15,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom center',
  wordAnimationEnd = 'bottom center',
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null)

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word
      return (
        <span
          className="word inline-block"
          key={index}
        >
          {word}
        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window

    const ctx = gsap.context(() => {
      if (baseRotation !== 0) {
        gsap.fromTo(
          el,
          { transformOrigin: '0% 50%', rotate: baseRotation },
          {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom',
              end: rotationEnd,
              scrub: true,
            },
          },
        )
      }

      const wordElements = el.querySelectorAll<HTMLElement>('.word')

      gsap.fromTo(
        wordElements,
        {
          opacity: baseOpacity,
          y: baseTranslationY,
          filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
          willChange: 'opacity, transform, filter',
        },
        {
          ease: 'none',
          opacity: 1,
          y: 0,
          filter: enableBlur ? 'blur(0px)' : 'none',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            end: wordAnimationEnd,
            scrub: true,
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseTranslationY,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ])

  return (
    <h2
      ref={containerRef}
      className={`my-5 ${containerClassName}`}
    >
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  )
}

export default ScrollReveal
