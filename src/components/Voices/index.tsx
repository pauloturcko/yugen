import { motion } from 'framer-motion'

interface Testimonial {
  quote: string
  name: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Every other productivity app screams. Yugen finally lets me hear myself think.',
    name: 'Tomás L.',
    role: 'PhD candidate',
  },
  {
    quote:
      'I doubled my deep work hours and stopped feeling guilty about my evenings.',
    name: 'Amara O.',
    role: 'Founder',
  },
  {
    quote:
      "It's the most beautiful piece of software I use, and somehow the most invisible.",
    name: 'Hiro T.',
    role: 'Designer',
  },
  {
    quote:
      "I haven't checked Twitter in 14 days. I'm reading novels again. I'm finishing things.",
    name: 'Marina K.',
    role: 'Novelist',
  },
  {
    quote:
      'Yugen feels less like an app and more like a small, quiet room I get to enter.',
    name: 'Daniel R.',
    role: 'Software engineer',
  },
  {
    quote:
      'The breathing ring alone is worth it. My anxiety dropped within a week.',
    name: 'Priya S.',
    role: 'Therapist',
  },
]

const LOOPED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS]

const VIEWPORT = { once: true }

export const Voices = () => {
  return (
    <section
      id="voices"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-12 overflow-hidden py-24 sm:gap-16 sm:py-32 md:py-40"
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
        className="relative z-10 max-w-2xl space-y-3 px-6 text-center sm:space-y-4 sm:px-12"
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
          06 — VOICES
        </motion.p>

        <motion.h2
          className="font-noto text-3xl leading-[1.15] font-light text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={VIEWPORT}
        >
          From those who{' '}
          <span className="font-garamond text-highlight italic">return.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={VIEWPORT}
      >
        <div className="animate-marquee flex w-max gap-5 hover:[animation-play-state:paused] sm:gap-6 md:gap-8">
          {LOOPED_TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-64 w-64 shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-[#0f0c18]/70 p-6 text-left backdrop-blur-xl sm:h-72 sm:w-80 sm:rounded-3xl sm:p-7 md:h-80 md:w-96 md:p-8"
            >
              <div>
                <span className="font-garamond text-highlight/30 text-3xl leading-none sm:text-4xl">
                  &ldquo;
                </span>
                <p className="font-garamond mt-3 text-base leading-snug font-light text-white sm:mt-4 sm:text-lg md:text-xl">
                  {testimonial.quote}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="font-manrope text-sm font-medium text-white">
                  {testimonial.name}
                </p>
                <p className="font-manrope text-xs font-light text-white/40">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
