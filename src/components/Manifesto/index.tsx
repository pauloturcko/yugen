import ScrollReveal from '../ReactBits/ScrollReveal'

export const Manifesto = () => {
  return (
    <section
      id="manifesto"
      className="relative flex min-h-fit w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:py-32 md:py-48 lg:py-64"
    >
      <div className="relative z-20">
        <p className="font-noto text-highlight/50 mb-4 text-xl font-light tracking-widest uppercase">
          THE MANIFESTO
        </p>
        <div>
          <ScrollReveal
            baseOpacity={0.15}
            enableBlur={true}
            baseRotation={2}
            blurStrength={4}
            rotationEnd="bottom center"
            wordAnimationEnd="bottom center"
            containerClassName="max-w-5xl px-4 md:px-0"
            textClassName="
              font-noto
              text-white
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-thin
              leading-relaxed
              tracking-wide
            "
          >
            There is a Japanese word, yugen, that names the profound, mysterious
            sense of beauty discovered in the present moment. We built Yugen for
            that moment when the noise softens, when minutes deepen into hours,
            and the work becomes the meditation.
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
