import { motion } from 'framer-motion'
import { Clock, Flame, Target, TrendingUp } from 'lucide-react'

interface Stat {
  icon: typeof Clock
  label: string
  value: string
  sublabel: string
}

const STATS: Stat[] = [
  { icon: Clock, label: 'Hours focused', value: '147', sublabel: 'this month' },
  { icon: Flame, label: 'Streak', value: '23', sublabel: 'days' },
  { icon: Target, label: 'Goals', value: '8/10', sublabel: 'completed' },
  { icon: TrendingUp, label: 'Avg. session', value: '52m', sublabel: 'this week' },
]

const FOCUS_MINUTES = [
  38, 52, 44, 65, 70, 78, 60, 66, 82, 58, 74, 88, 80, 76,
]

const MAX_MINUTES = Math.max(...FOCUS_MINUTES)

const VIEWPORT = { once: true }

export const Progress = () => {
  return (
    <section
      id="progress"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-12 overflow-hidden px-6 py-24 text-center sm:px-12 sm:py-32 md:px-20 md:py-40 lg:px-24 xl:px-80"
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
          04 — PROGRESS
        </motion.p>

        <motion.h2
          className="font-noto text-3xl leading-[1.15] font-light text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={VIEWPORT}
        >
          Quiet patterns.{' '}
          <span className="font-garamond text-highlight italic">
            Lasting practice.
          </span>
        </motion.h2>

        <motion.p
          className="font-manrope mx-auto max-w-xl text-sm leading-relaxed font-light text-white/60 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={VIEWPORT}
        >
          Honest reflections on your rhythm — never gamified, never noisy.
          Yugen shows you what shows up.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 grid w-full max-w-5xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={VIEWPORT}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-[#0f0c18]/70 p-5 text-left backdrop-blur-xl sm:rounded-3xl sm:p-6"
          >
            <stat.icon
              size={18}
              className="text-highlight/70"
            />
            <p className="font-noto mt-4 text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
              {stat.label}
            </p>
            <p className="font-garamond mt-2 text-4xl font-light text-white tabular-nums sm:text-5xl">
              {stat.value}
            </p>
            <p className="font-manrope mt-1 text-xs font-light text-white/40">
              {stat.sublabel}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0f0c18]/85 p-6 text-left shadow-2xl backdrop-blur-2xl sm:rounded-4xl sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={VIEWPORT}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
              Last 14 days
            </p>
            <h3 className="font-noto mt-1 text-xl font-light text-white sm:text-2xl">
              Daily focus minutes
            </h3>
          </div>

          <div className="text-right">
            <p className="text-highlight font-garamond text-2xl font-light sm:text-3xl">
              +24%
            </p>
            <p className="font-manrope text-xs font-light text-white/40">
              vs. previous
            </p>
          </div>
        </div>

        <div className="mt-8 flex h-40 items-end justify-between gap-2 sm:h-48 sm:gap-3">
          {FOCUS_MINUTES.map((value, index) => (
            <motion.div
              key={index}
              className="from-highlight/70 via-highlight/40 to-primary/30 w-full rounded-t-md bg-linear-to-b sm:rounded-t-lg"
              style={{
                height: `${(value / MAX_MINUTES) * 100}%`,
                transformOrigin: 'bottom',
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              viewport={VIEWPORT}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
