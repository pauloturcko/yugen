import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface Column {
  eyebrow: string
  title: string
  items: string[]
}

const WITHOUT: Column = {
  eyebrow: 'A TYPICAL TUESDAY',
  title: 'The scattered self.',
  items: [
    '47 notification pings in one work session',
    'Open tabs that have lived for weeks',
    'Three apps shouting for streaks at once',
    'The same paragraph re-read four times',
    'Doomscrolling at 1 a.m. — again',
  ],
}

const WITH: Column = {
  eyebrow: 'A TUESDAY WITH YUGEN',
  title: 'The gathered self.',
  items: [
    'Silence, by design — phone forgotten',
    'One screen, one task, one rhythm',
    'Sessions that quietly compound into hours',
    'The paragraph finished. Then the chapter.',
    'Closing the laptop without guilt',
  ],
}

const VIEWPORT = { once: true }

export const TheDifference = () => {
  return (
    <section
      id="the-difference"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-16 overflow-hidden px-6 py-24 text-center sm:px-12 sm:py-32 md:px-20 md:py-40 lg:px-24 xl:px-80"
    >
      <motion.div
        className="max-w-2xl space-y-3 sm:space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={VIEWPORT}
      >
        <motion.p
          className="font-noto text-highlight/70 text-xs font-light tracking-[0.2em] uppercase md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={VIEWPORT}
        >
          07 — THE DIFFERENCE
        </motion.p>

        <motion.h2
          className="font-noto text-4xl leading-[1.15] font-light text-white sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={VIEWPORT}
        >
          Without Yugen.
        </motion.h2>
        <motion.h2
          className="font-garamond text-highlight text-4xl leading-[1.15] font-light italic sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={VIEWPORT}
        >
          With Yugen.
        </motion.h2>
      </motion.div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        <motion.div
          className="rounded-2xl border border-white/10 bg-[#0f0c18]/70 p-6 text-left backdrop-blur-xl sm:rounded-3xl sm:p-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={VIEWPORT}
        >
          <p className="font-noto text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
            {WITHOUT.eyebrow}
          </p>
          <h3 className="font-garamond mt-3 text-2xl font-light text-white sm:text-3xl">
            {WITHOUT.title}
          </h3>

          <ul className="mt-6 space-y-4 sm:mt-8">
            {WITHOUT.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-white/30 line-through decoration-white/20"
              >
                <X
                  size={16}
                  className="shrink-0 text-white/20"
                />
                <span className="font-manrope text-sm sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="border-highlight/20 rounded-2xl border bg-[#0f0c18]/70 p-6 text-left backdrop-blur-xl sm:rounded-3xl sm:p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={VIEWPORT}
        >
          <p className="font-noto text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
            {WITH.eyebrow}
          </p>
          <h3 className="font-garamond mt-3 text-2xl font-light text-white sm:text-3xl">
            {WITH.title}
          </h3>

          <ul className="mt-6 space-y-4 sm:mt-8">
            {WITH.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-white/80"
              >
                <Check
                  size={16}
                  className="text-highlight shrink-0"
                />
                <span className="font-manrope text-sm sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
