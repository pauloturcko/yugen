import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Button } from '../Button'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScroll = () => {
      const top =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      setIsScrolled(top > 40)
    }

    updateScroll()

    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 40)
    })

    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => {
      unsubscribe()
      window.removeEventListener('scroll', updateScroll)
    }
  }, [scrollY])

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[49px] transition-all duration-300 ease-in-out md:px-[89px] lg:px-[105px] xl:px-[325px] ${
        isScrolled || isOpen
          ? 'bg-background/90 border-b border-white/10 py-4 shadow-lg backdrop-blur-md'
          : 'border-b border-transparent bg-transparent pt-8 pb-5'
      }`}
    >
      <div className="font-noto relative z-50 flex items-center gap-2">
        <p className="text-highlight font-noto border-secondary shadow-secondary/50 flex h-7 w-7 items-center justify-center rounded-full border text-[10px] leading-none shadow-lg">
          幽
        </p>
        <h1 className="font-garamond text-lg font-normal tracking-wider">
          Yūgen
        </h1>
      </div>

      <button
        className="relative z-50 flex h-3.5 w-5 flex-col justify-between focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`bg-foreground h-0.5 w-full origin-center rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-y-1.5 rotate-45' : ''
          }`}
        />
        <span
          className={`bg-foreground h-0.5 w-full rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-4 opacity-0' : ''
          }`}
        />
        <span
          className={`bg-foreground h-0.5 w-full origin-center rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? '-translate-y-1.5 -rotate-45' : ''
          }`}
        />
      </button>

      {/* Desktop Menu */}
      <nav className="font-manrope hidden gap-8 text-xs tracking-widest text-white/60 md:flex">
        {['Manifesto', 'Features', 'Pricing', 'FAQ'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-highlight transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      <Button
        padding="px-6 py-2"
        className="hidden md:inline-flex"
      >
        Begin
      </Button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`bg-background/90 absolute top-full left-0 z-40 w-full origin-top border-b border-white/5 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-4 opacity-0'
        }`}
      >
        <ul className="text-md font-manrope flex flex-col items-start gap-2 px-6 py-6 tracking-widest text-white/60">
          {['Manifesto', 'Features', 'Pricing', 'FAQ'].map((item) => (
            <li
              key={item}
              className="w-full"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-highlight block w-full border-b border-white/5 pb-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <Button>Begin</Button>
      </div>
    </motion.header>
  )
}
