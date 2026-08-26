import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bird,
  Cloud,
  Coffee,
  Infinity as InfinityIcon,
  Mountain,
  Music,
  Waves,
} from 'lucide-react'

interface Track {
  id: string
  title: string
  category: string
  icon: typeof Bird
}

const TRACKS: Track[] = [
  { id: 'lofi', title: 'Lo-fi Drift', category: 'Beats', icon: Cloud },
  { id: 'ocean', title: 'Ocean Floor', category: 'Nature', icon: Waves },
  { id: 'alpine', title: 'Alpine Wind', category: 'Nature', icon: Mountain },
  { id: 'forest', title: 'Forest Dawn', category: 'Nature', icon: Bird },
  { id: 'cafe', title: 'Café Quiet', category: 'Ambience', icon: Coffee },
]

const CATEGORIES = [
  'Lo-fi & Beats',
  'Nature & Field',
  'Binaural Tones',
  'Café & Rain',
]

const WAVEFORM_BARS = [
  45, 60, 50, 85, 95, 75, 65, 20, 35, 25, 40, 50, 65, 60, 45, 75, 50, 30, 60,
  55, 45, 90, 65, 35, 50, 30, 70, 85, 60, 95, 85,
]

const VIEWPORT = { once: true }

export const SoundScapes = () => {
  const [activeTrack, setActiveTrack] = useState<Track>(TRACKS[3])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const ActiveIcon = activeTrack.icon

  return (
    <section
      id="soundscapes"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-12 overflow-hidden px-6 py-28 sm:px-[49px] sm:py-36 md:px-[89px] md:py-44 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-[105px] lg:text-left xl:px-[325px]"
    >
      <div className="bg-primary/20 pointer-events-none absolute top-1/2 left-1/4 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" />

      <motion.div
        className="w-full max-w-xl flex-1"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={VIEWPORT}
      >
        <div className="relative w-full rounded-3xl border border-white/10 bg-[#0f0c18]/85 p-5 shadow-2xl backdrop-blur-2xl sm:rounded-4xl sm:p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
                NOW PLAYING
              </p>
              <h3 className="font-noto mt-1 text-xl font-light text-white sm:text-2xl">
                {activeTrack.title}
              </h3>
            </div>

            <div className="border-highlight/20 bg-primary/40 text-highlight flex h-10 w-10 items-center justify-center rounded-full border shadow-inner sm:h-11 sm:w-11">
              <ActiveIcon size={20} />
            </div>
          </div>

          <div className="my-6 flex h-14 items-center justify-between gap-0.5 px-0.5 sm:my-7 sm:h-16 sm:gap-1 sm:px-1">
            {WAVEFORM_BARS.map((heightPercent, index) => (
              <motion.div
                key={index}
                className="w-0.5 rounded-full bg-linear-to-b from-[#e8cbf2] via-[#b673c6] to-[#4c2058] sm:w-0.75"
                style={{ height: `${heightPercent}%`, originY: 0.5 }}
                animate={{
                  scaleY: [0.7, 1.25, 0.7],
                  opacity: [0.75, 1, 0.75],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (index * 0.08) % 2.4,
                }}
              />
            ))}
          </div>

          <div className="space-y-1.5">
            {TRACKS.map((track) => {
              const isSelected = track.id === activeTrack.id
              const Icon = track.icon

              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setActiveTrack(track)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl border px-3 py-2 text-left transition-colors duration-150 focus:outline-none sm:rounded-2xl sm:px-3.5 sm:py-2.5 ${
                    isSelected
                      ? 'border-white/10 bg-white/[0.07] shadow-sm'
                      : 'border-transparent text-white/60 hover:bg-white/3'
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
                    <Icon
                      size={18}
                      className={`shrink-0 transition-colors duration-150 ${
                        isSelected ? 'text-highlight' : 'text-white/40'
                      }`}
                    />
                    <div className="min-w-0 truncate">
                      <p
                        className={`truncate text-sm font-medium transition-colors duration-150 ${
                          isSelected ? 'text-white' : 'text-white/80'
                        }`}
                      >
                        {track.title}
                      </p>
                      <p className="truncate text-xs text-white/40">
                        {track.category}
                      </p>
                    </div>
                  </div>

                  <InfinityIcon
                    size={16}
                    className={`shrink-0 transition-colors duration-150 ${
                      isSelected ? 'text-white/50' : 'text-white/20'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-xl flex-1 space-y-6 text-center sm:space-y-8 lg:text-left"
        initial={{ opacity: 0, x: 40 }}
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
            <Music
              size={14}
              className="text-highlight/70 shrink-0"
            />
            <span>02 — SOUNDSCAPES</span>
          </motion.p>

          <motion.h2
            className="font-noto text-3xl leading-[1.15] font-light text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={VIEWPORT}
          >
            A library that{' '}
            <span className="font-garamond text-highlight italic">listens</span>{' '}
            <br />
            to you.
          </motion.h2>
        </div>

        <motion.p
          className="font-manrope mx-auto text-sm leading-relaxed font-light text-white/60 sm:text-base md:text-lg lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={VIEWPORT}
        >
          Curated ambient compositions, binaural frequencies tuned to alpha and
          theta states, and field recordings from places where time slows. Every
          track is engineered to dissolve, never demand.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={VIEWPORT}
        >
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory(isSelected ? null : category)
                }
                className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-light transition-colors duration-150 focus:outline-none sm:rounded-2xl sm:px-5 sm:py-3.5 lg:text-left ${
                  isSelected
                    ? 'border-highlight/40 bg-white/10 text-white'
                    : 'border-white/10 bg-white/2 text-white/70 hover:border-white/20 hover:bg-white/6 hover:text-white'
                }`}
              >
                {category}
              </button>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
