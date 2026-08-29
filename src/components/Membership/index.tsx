import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '../Button'

type Billing = 'monthly' | 'yearly'

interface Plan {
  name: string
  description: string
  monthlyDescription: string
  price: string
  monthlyPrice: string
  priceSuffix: string
  monthlyPriceSuffix: string
  features: string[]
  cta: string
  highlighted?: boolean
  badge?: string
}

const PLANS: Plan[] = [
  {
    name: 'Drift',
    description: 'Begin the practice. Light timer & three soundscapes.',
    monthlyDescription: 'Begin the practice. Light timer & three soundscapes.',
    price: 'Free',
    monthlyPrice: 'Free',
    priceSuffix: 'always',
    monthlyPriceSuffix: 'always',
    features: [
      'Pomodoro timer',
      '3 ambient soundscapes',
      '7 days of stats',
      '1 device',
    ],
    cta: 'Start free',
  },
  {
    name: 'Deep',
    description: 'Save 35%. The most chosen. A whole year of depth.',
    monthlyDescription: 'The most chosen. Full depth, billed monthly.',
    price: 'R$ 149',
    monthlyPrice: 'R$ 19',
    priceSuffix: '/ year',
    monthlyPriceSuffix: '/ month',
    features: [
      'All timer modes & rituals',
      'Full soundscape library + binaural',
      'Unlimited social/site blocking',
      'Cross-device sync (3 devices)',
      'Detailed analytics & journal',
      'Priority support',
    ],
    cta: 'Begin Deep',
    highlighted: true,
    badge: 'MOST CHOSEN',
  },
  {
    name: 'Yūgen',
    description: 'Once. Forever. For those who already know.',
    monthlyDescription: 'Once. Forever. For those who already know.',
    price: 'R$ 299',
    monthlyPrice: 'R$ 299',
    priceSuffix: 'lifetime',
    monthlyPriceSuffix: 'lifetime',
    features: [
      'Everything in Deep, forever',
      'All future updates included',
      'Unlimited devices',
      "Founders' circle access",
      'Annual physical zine',
    ],
    cta: 'Buy lifetime',
  },
]

const VIEWPORT = { once: true }

export const Membership = () => {
  const [billing, setBilling] = useState<Billing>('yearly')
  const isYearly = billing === 'yearly'

  return (
    <section
      id="pricing"
      className="relative flex min-h-fit w-full flex-col items-center justify-center gap-12 overflow-hidden px-6 py-24 text-center sm:gap-16 sm:px-12 sm:py-32 md:px-20 md:py-40 lg:px-24 xl:px-80"
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
          08 — MEMBERSHIP
        </motion.p>

        <motion.h2
          className="font-noto text-3xl leading-[1.15] font-light text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={VIEWPORT}
        >
          Choose your{' '}
          <span className="font-garamond text-highlight italic">depth.</span>
        </motion.h2>

        <motion.p
          className="font-manrope mx-auto max-w-xl text-sm leading-relaxed font-light text-white/60 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={VIEWPORT}
        >
          Cancel anytime. 14-day quiet refund. No tricks.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={VIEWPORT}
      >
        <button
          type="button"
          onClick={() => setBilling('monthly')}
          className={`font-manrope focus-visible:ring-highlight focus-visible:ring-offset-background cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            !isYearly
              ? 'bg-white text-[#0A0A0A]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBilling('yearly')}
          className={`font-manrope focus-visible:ring-highlight focus-visible:ring-offset-background flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isYearly
              ? 'bg-white text-[#0A0A0A]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Yearly
          <span className="bg-primary text-highlight rounded-full px-2 py-0.5 text-[10px] font-semibold">
            -35%
          </span>
        </button>
      </motion.div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {PLANS.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-6 text-left backdrop-blur-xl sm:rounded-3xl sm:p-8 ${
              plan.highlighted
                ? 'border-highlight/40 bg-[#150f22]/80'
                : 'border-white/10 bg-[#0f0c18]/70'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            viewport={VIEWPORT}
          >
            {plan.badge && (
              <span className="bg-highlight absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.15em] whitespace-nowrap text-[#0A0A0A] uppercase">
                {plan.badge}
              </span>
            )}

            <h3 className="font-garamond text-2xl font-light text-white">
              {plan.name}
            </h3>
            <p className="font-manrope mt-2 text-sm font-light text-white/50">
              {isYearly ? plan.description : plan.monthlyDescription}
            </p>

            <div className="mt-6 flex items-baseline gap-2 sm:mt-8">
              <span className="font-garamond text-4xl font-light text-white tabular-nums sm:text-5xl">
                {isYearly ? plan.price : plan.monthlyPrice}
              </span>
              <span className="font-manrope text-sm font-light text-white/40">
                {isYearly ? plan.priceSuffix : plan.monthlyPriceSuffix}
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-3 sm:mt-8">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-white/70"
                >
                  <Check
                    size={16}
                    className="text-highlight mt-0.5 shrink-0"
                  />
                  <span className="font-manrope text-sm sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              bg={plan.highlighted ? 'bg-white' : 'bg-white/10'}
              textColor={plan.highlighted ? 'text-[#0A0A0A]' : 'text-white'}
              borderColor={plan.highlighted ? undefined : 'border-white/10'}
              width="w-full"
              padding="py-3"
              fontSize="text-sm"
              className="mt-8 inline-flex"
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
