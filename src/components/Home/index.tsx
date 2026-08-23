import { motion, useScroll, useTransform } from 'framer-motion'
import homeBg from '../../assets/home-bg-one.jpg'
import { ChevronDown } from 'lucide-react'
import { Button } from '../Button'

const textContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
}

const textChild = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, damping: 12, stiffness: 100 },
  },
}

export const Home = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])

  return (
    <section className="bg-background text-foreground relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-24">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={homeBg}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="from-background to-background absolute inset-0 bg-linear-to-b via-transparent" />
        <div className="from-background/80 to-background/80 absolute inset-0 bg-linear-to-r via-transparent" />
      </motion.div>

      <div className="bg-primary animate-breathe pointer-events-none absolute top-[48%] left-[62%] z-0 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[180px]" />

      <div className="noise-overlay z-10" />

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 md:px-16 lg:px-20 xl:px-[300px] text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-20 mb-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-lg backdrop-blur-md"
        >
          <div className="bg-highlight h-1.5 w-1.5 animate-pulse rounded-full" />
          <p className="text-xs font-light tracking-widest text-white/60 uppercase">
            Now in private access
          </p>
        </motion.div>
        <p className="font-noto text-highlight/50 mb-4 text-xl font-light">
          幽玄
        </p>
        <motion.h2
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="font-noto mb-6 text-center text-[2.75rem] font-light tracking-wide drop-shadow-lg md:text-7xl lg:text-8xl"
        >
          <span className="inline-block">
            {Array.from('Find depth').map((char, index) => (
              <motion.span
                key={index}
                variants={textChild}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          <br />
          <span className="text-highlight inline-block italic">
            {Array.from('in stillness.').map((char, index) => (
              <motion.span
                key={index}
                variants={textChild}
                className="inline-block pr-0.5"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-manrope text-md max-w-2xl leading-relaxed text-white/60 md:text-xl lg:mt-14 lg:max-w-xl"
        >
          Yugen is a sanctuary for deep work. A focus timer, an ambient
          soundscape, and a digital boundary — woven together to guide you back
          to the present.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-6 lg:mt-14 lg:flex-row"
        >
          <Button
            padding="p-3.5"
            fontSize="text-sm"
            width="w-full sm:w-xs"
          >
            Enter the Flow
          </Button>
          <Button
            bg="transparent"
            textColor="text-white/60"
            borderColor="text-white/60"
            padding="p-3.5"
            fontSize="text-sm"
            width="w-full sm:w-xs"
          >
            Read the manifesto
          </Button>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-14 flex flex-col items-center justify-center gap-2 text-sm text-white/60 uppercase"
        >
          Scroll <ChevronDown />
        </motion.span>
      </div>
    </section>
  )
}
