import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Faq {
  question: string
  answer: string
}

const FAQS: Faq[] = [
  {
    question: "What does 'yūgen' mean?",
    answer:
      'Yūgen (幽玄) is a Japanese aesthetic concept describing the deep, mysterious, almost untranslatable beauty found in subtle moments — a sunset through fog, a phrase that lingers. We named the app after the feeling we want your work to recover.',
  },
  {
    question: 'Which platforms is Yugen available on?',
    answer:
      'Yugen is available as a desktop app for macOS and Windows, plus a browser extension for Chrome, Safari, Firefox, and Arc. iOS and Android companion apps are in private beta.',
  },
  {
    question: 'How does the social media blocker work?',
    answer:
      'When a session begins, Yugen activates a system-level domain block list at the browser layer. You choose what gets sealed. In Strict mode, no override is possible until the timer ends — gentle but absolute.',
  },
  {
    question: 'Can I use Yugen with Spotify or Apple Music?',
    answer:
      "Yes. Yugen's soundscape library is curated and licensed for focused work, but you can mute it and run any other audio source alongside the timer.",
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Drift is free, forever. It includes a Pomodoro timer, three ambient soundscapes, and 7 days of stats. No credit card, no nag screens.',
  },
  {
    question: 'Refunds?',
    answer:
      'We offer a quiet 14-day refund on any paid plan, no questions asked. Lifetime included.',
  },
  {
    question: 'Will my data be sold?',
    answer:
      'Never. Yugen does not sell, share, or train on your data. Sessions are stored locally first, encrypted in transit, and you can export or delete everything at any time.',
  },
]

const VIEWPORT = { once: true }

export const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-16 overflow-hidden px-6 py-24 sm:px-12 sm:py-32 md:px-20 md:py-40 lg:px-24 xl:px-80"
    >
      <motion.div
        className="w-full max-w-3xl space-y-3 text-left sm:space-y-4"
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
          09 — QUESTIONS
        </motion.p>

        <motion.h2
          className="font-garamond text-4xl leading-[1.15] font-light text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={VIEWPORT}
        >
          Quietly answered.
        </motion.h2>
      </motion.div>

      <motion.div
        className="w-full max-w-3xl divide-y divide-white/10 border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={VIEWPORT}
      >
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left focus:outline-none"
              >
                <span className="font-garamond text-lg font-light text-white sm:text-xl md:text-2xl">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-white/40 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-manrope pb-6 text-sm leading-relaxed font-light text-white/60 sm:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
