import { useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import { motion } from 'framer-motion'

const TOTAL = 25 * 60

const FEATURES = [
  'Adaptative intervals: 25/45/90 min preset',
  'Breathing animation entrains attention',
  'Distraction-free fullscreen ritual mode',
  'Auto-rest reminders between sessions',
]

const VIEWPORT = { once: true }

const radius = 155
const circumference = 2 * Math.PI * radius

export const FocusTimer = () => {
  const [seconds, setSeconds] = useState(TOTAL)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [running])

  const progress = ((TOTAL - seconds) / TOTAL) * 100
  const dashoffset = circumference - (progress / 100) * circumference
  const m = String(Math.floor(seconds / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')

  return (
    <section
      id="focus-timer"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-16 lg:gap-24 overflow-hidden py-24 text-center px-6 md:px-16 lg:px-20 xl:px-[300px] lg:flex-row lg:justify-between lg:text-left"
    >
      <motion.div
        className="w-full max-w-xl space-y-8"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={VIEWPORT}
      >
        <div className="space-y-2">
          <motion.p
            className="font-noto text-highlight/60 text-sm font-light uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={VIEWPORT}
          >
            01 - focus timer
          </motion.p>

          <motion.h2
            className="font-noto text-4xl leading-tight font-light md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={VIEWPORT}
          >
            Time, sculpted into{' '}
            <span className="text-highlight italic">intention.</span>
          </motion.h2>
        </div>

        <motion.p
          className="font-manrope max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={VIEWPORT}
        >
          Configure deep work intervals — Pomodoro, 90-minute ultradian cycles,
          or custom flows; The breathing ring pulses with your rhythm, gently
          anchoring your attention without ever demanding it.
        </motion.p>

        <motion.ul
          className="space-y-3 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={VIEWPORT}
        >
          {FEATURES.map((item, i) => (
            <motion.li
              key={i}
              className="font-manrope flex items-start gap-3 text-white/60"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              viewport={VIEWPORT}
            >
              <span className="bg-highlight/60 mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Right: timer */}
      <div className="relative flex w-full max-w-sm items-center justify-center sm:max-w-md">
        <div className="relative aspect-square w-full">
          <div className="glass-strong ring-glow absolute inset-0 rounded-full" />

          <motion.div
            animate={{
              scale: running ? [1, 1.04, 1] : 1,
              opacity: running ? [0.5, 0.8, 0.5] : 0.4,
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-primary/20 absolute inset-[15%] rounded-full blur-2xl"
          />

          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 360 360"
          >
            <defs>
              <linearGradient
                id="timerGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#D8B4E2"
                />
                <stop
                  offset="100%"
                  stopColor="#4C2858"
                />
              </linearGradient>
            </defs>

            <circle
              cx="180"
              cy="180"
              r={radius}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
              fill="none"
            />

            <motion.circle
              cx="180"
              cy="180"
              r={radius}
              stroke="url(#timerGrad)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="mb-4 text-xs tracking-widest text-white/40 uppercase">
              Deep Work
            </span>

            <div className="font-garamond text-6xl font-light tracking-tighter text-white tabular-nums sm:text-7xl md:text-8xl">
              {m}
              <span className="text-white/30">:</span>
              {s}
            </div>

            <button
              onClick={() => setRunning((r) => !r)}
              className="glass-strong ring-glow text-highlight mt-8 flex h-14 w-14 items-center justify-center rounded-full transition-all hover:bg-white/10 active:scale-95"
            >
              {running ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
