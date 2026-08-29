import { motion } from 'framer-motion'

interface Step {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Set the intention',
    description:
      'Choose your interval, your soundscape, and the boundaries you want for this session. Three taps. Less than ten seconds.',
  },
  {
    number: '02',
    title: 'Cross the threshold',
    description:
      'The screen dims. Distractions are sealed. The breathing ring begins. You are no longer reachable — only present.',
  },
  {
    number: '03',
    title: 'Sink into depth',
    description:
      "Minutes deepen into something else entirely. Yugen stays out of the way, only surfacing when you've earned a rest.",
  },
  {
    number: '04',
    title: 'Return softly',
    description:
      'A gentle chime. A quiet reflection. No notifications, no streaks shouted at you. Just a clean line drawn under good work.',
  },
]

const VIEWPORT = { once: true }

export const TheJourney = () => {
  return (
    <section
      id="the-journey"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-16 overflow-hidden px-6 py-24 text-center sm:px-12 sm:py-32 md:px-20 md:py-40 lg:px-24 xl:px-80"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-20"
        aria-hidden="true"
      >
        <div
          className="h-150 w-237.5 max-w-full rounded-full blur-[80px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(145, 75, 230, 0.45) 0%, rgba(70, 55, 190, 0.35) 40%, rgba(25, 15, 70, 0.18) 65%, transparent 80%)',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-2xl space-y-3 sm:space-y-4"
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
          05 — THE JOURNEY
        </motion.p>

        <motion.h2
          className="font-noto text-3xl leading-[1.15] font-light text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={VIEWPORT}
        >
          From intention to{' '}
          <span className="font-garamond text-highlight italic">flow.</span>
        </motion.h2>
      </motion.div>

      <ol className="relative z-10 w-full max-w-3xl text-left">
        {STEPS.map((step, index) => (
          <motion.li
            key={step.number}
            className="flex gap-6 pb-14 last:pb-0 sm:gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={VIEWPORT}
          >
            <div className="flex flex-col items-center">
              <span className="bg-highlight h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_10px_rgba(216,180,226,0.7)]" />
              {index !== STEPS.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-white/10" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-garamond text-sm tracking-[0.15em] text-white/40">
                {step.number}
              </p>
              <h3 className="font-garamond mt-2 text-2xl font-light text-white sm:text-3xl">
                {step.title}
              </h3>
              <p className="font-manrope mt-3 max-w-xl text-sm leading-relaxed font-light text-white/60 sm:text-base">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
