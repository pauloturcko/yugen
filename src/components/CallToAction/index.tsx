import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../Button'

export const CallToAction = () => {
  return (
    <section
      id="cta"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-6 overflow-hidden px-6 py-32 text-center sm:px-12 sm:py-40 md:px-20 md:py-48 lg:px-24 xl:px-80"
    >
      <div
        className="bg-primary pointer-events-none absolute top-1/2 left-1/2 z-0 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[160px]"
        aria-hidden="true"
      />
      <div className="noise-overlay z-0" />

      <motion.p
        className="font-noto text-highlight/50 relative z-10 text-xl font-light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        幽玄
      </motion.p>

      <motion.h2
        className="font-noto relative z-10 text-5xl leading-[1.1] font-light text-white sm:text-7xl md:text-8xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
      >
        Enter
        <br />
        <span className="font-garamond text-highlight italic">the flow.</span>
      </motion.h2>

      <motion.p
        className="font-manrope relative z-10 max-w-xl text-sm leading-relaxed font-light text-white/60 sm:text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Begin a 14-day practice, free of charge, free of noise. The next deep
        hour is waiting.
      </motion.p>

      <motion.div
        className="relative z-10 mt-4 flex w-full flex-col items-center justify-center gap-4 sm:mt-6 sm:w-auto sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        viewport={{ once: true }}
      >
        <Button
          padding="p-3.5"
          fontSize="text-sm"
          width="w-full sm:w-auto"
        >
          <span className="flex items-center justify-center gap-2">
            Begin the practice
            <ArrowUpRight size={16} />
          </span>
        </Button>
        <Button
          bg="transparent"
          textColor="text-white/60"
          borderColor="text-white/60"
          padding="p-3.5"
          fontSize="text-sm"
          width="w-full sm:w-auto"
        >
          Re-read the manifesto
        </Button>
      </motion.div>
    </section>
  )
}
