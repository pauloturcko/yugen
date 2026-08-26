import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CircleDot, Lock } from 'lucide-react'

interface BlockedItem {
  id: string
  name: string
  color: string
}

const BLOCKED_ITEMS: BlockedItem[] = [
  { id: 'instagram', name: 'Instagram', color: '#902749' },
  { id: 'twitter', name: 'X / Twitter', color: '#596578' },
  { id: 'tiktok', name: 'TikTok', color: '#156B78' },
  { id: 'youtube', name: 'YouTube', color: '#8E2323' },
  { id: 'reddit', name: 'Reddit', color: '#933D16' },
  { id: 'facebook', name: 'Facebook', color: '#234991' },
]

const FEATURES = [
  'Browser-level blocking across Chrome, Safari, Firefox',
  'Customizable block lists & domain rules',
  'Strict mode — no overrides until session ends',
  'Mindful break: 30s pause before unlocking',
]

const UNLOCK_DURATION = 23 * 60
const LOCK_DURATION = 5 * 60
const VIEWPORT = { once: true }

export const DigitalBoundaries = () => {
  const [activeItems, setActiveItems] = useState<string[]>(
    BLOCKED_ITEMS.map((item) => item.id),
  )
  const [isBlockedSession, setIsBlockedSession] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(UNLOCK_DURATION)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsBlockedSession((current) => {
            const next = !current
            setSecondsLeft(next ? UNLOCK_DURATION : LOCK_DURATION)
            return next
          })
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const seconds = String(secondsLeft % 60).padStart(2, '0')

  const toggleItem = (id: string) => {
    setActiveItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <section
      id="digital-boundaries"
      className="relative isolate flex min-h-fit w-full flex-col items-center justify-center gap-12 overflow-hidden px-6 py-24 sm:px-12 sm:py-32 md:px-20 md:py-40 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-24 xl:px-80"
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
        <div
          className="absolute h-95 w-150 max-w-full rounded-full blur-[60px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(175, 95, 255, 0.35) 0%, rgba(90, 80, 240, 0.25) 50%, transparent 75%)',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-xl flex-1 space-y-6 text-center sm:space-y-8 lg:text-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={VIEWPORT}
      >
        <div className="space-y-3 sm:space-y-4">
          <motion.p
            className="font-noto text-highlight/70 flex items-center justify-center gap-2 text-xs font-light tracking-[0.2em] uppercase md:text-sm lg:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={VIEWPORT}
          >
            <CircleDot
              size={14}
              className="text-highlight/70 shrink-0"
            />
            <span>03 — DIGITAL BOUNDARIES</span>
          </motion.p>

          <motion.h2
            className="font-noto text-3xl leading-[1.15] font-light text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={VIEWPORT}
          >
            The world, at{' '}
            <span className="font-garamond text-highlight italic">
              arm&apos;s
            </span>{' '}
            <br />
            length.
          </motion.h2>
        </div>

        <motion.p
          className="font-manrope mx-auto text-sm leading-relaxed font-light text-white/60 sm:text-base md:text-lg lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={VIEWPORT}
        >
          When the timer begins, Yugen quietly closes the doors. Social
          platforms, news feeds, and chosen distractions become inaccessible
          across browser and apps — until the session ends, or you choose to
          break the seal.
        </motion.p>

        <motion.ul
          className="mx-auto max-w-md space-y-3 pt-2 text-left lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={VIEWPORT}
        >
          {FEATURES.map((item, i) => (
            <motion.li
              key={i}
              className="font-manrope flex items-center gap-3 text-sm font-light text-white/60 sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              viewport={VIEWPORT}
            >
              <span className="bg-highlight/60 block h-1.5 w-1.5 shrink-0 rounded-full" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-xl flex-1"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={VIEWPORT}
      >
        <div className="relative w-full rounded-3xl border border-white/10 bg-[#0f0c18]/85 p-5 shadow-2xl backdrop-blur-2xl sm:rounded-4xl sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3.5">
              <div className="border-highlight/20 bg-primary/40 text-highlight flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border shadow-inner sm:h-11 sm:w-11">
                <Lock size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
                  {isBlockedSession ? 'SEALED' : 'UNSEALED'}
                </p>
                <h3 className="font-noto mt-0.5 truncate text-base font-light text-white sm:text-lg">
                  {isBlockedSession
                    ? 'Distractions blocked'
                    : 'Mindful pause window'}
                </h3>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  isBlockedSession
                    ? 'bg-highlight animate-pulse shadow-[0_0_8px_rgba(216,180,226,0.9)]'
                    : 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                }`}
              />
              <span className="font-manrope text-xs font-light text-white/80">
                {isBlockedSession ? 'Active' : 'Break'}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {BLOCKED_ITEMS.map((app) => {
              const isBlocked = activeItems.includes(app.id)

              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => toggleItem(app.id)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl border px-3.5 py-3 text-left transition-colors duration-150 focus:outline-none sm:rounded-2xl ${
                    isBlocked
                      ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                      : 'border-transparent text-white/40 hover:bg-white/5'
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full transition-opacity duration-150"
                      style={{
                        backgroundColor: app.color,
                        opacity: isBlocked ? 1 : 0.35,
                      }}
                    />
                    <span
                      className={`font-manrope truncate text-sm transition-colors duration-150 ${
                        isBlocked
                          ? 'font-medium text-white/90'
                          : 'text-white/40'
                      }`}
                    >
                      {app.name}
                    </span>
                  </div>

                  <Lock
                    size={14}
                    className={`shrink-0 transition-colors duration-150 ${
                      isBlocked ? 'text-white/40' : 'text-white/15'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/5 bg-white/3 px-4 py-3 sm:rounded-2xl sm:px-5 sm:py-3.5">
            <span className="font-manrope text-xs font-light text-white/40 sm:text-sm">
              {isBlockedSession ? 'Unlocks in' : 'Locks in'}
            </span>
            <span className="font-mono text-sm font-medium tracking-wider text-white/90 sm:text-base">
              {minutes}:{seconds}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
