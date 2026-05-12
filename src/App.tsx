import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

function App() {
  return (
    <div className="bg-background text-foreground font-manrope selection:bg-secondary relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 selection:text-white">
      {/* Decorative Background Gradients */}
      <div className="bg-secondary pointer-events-none absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full opacity-20 blur-[120px]"></div>
      <div className="bg-highlight pointer-events-none absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full opacity-10 blur-[120px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 max-w-3xl space-y-8 text-center"
      >
        <div className="bg-surface border-primary text-highlight inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wide shadow-lg">
          <Sparkles className="h-4 w-4" />
          <span>Projeto Inicializado com Sucesso</span>
        </div>

        <h1 className="font-garamond from-foreground to-muted bg-gradient-to-r bg-clip-text text-6xl font-semibold text-transparent italic drop-shadow-sm md:text-8xl">
          Yugen
        </h1>

        <p className="text-muted-foreground font-noto mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
          Uma base sólida e elegante utilizando React, TypeScript, TailwindCSS
          v4 e Framer Motion. As cores, fontes e reset CSS já estão configurados
          e prontos para uso.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="from-secondary to-primary shadow-secondary/20 hover:shadow-secondary/40 border-highlight/20 rounded-full border bg-gradient-to-r px-8 py-4 font-medium tracking-wide text-white shadow-lg transition-all"
          >
            Começar o Desenvolvimento
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-surface text-foreground border-muted/20 hover:border-highlight/50 rounded-full border px-8 py-4 font-medium tracking-wide shadow-lg transition-all"
          >
            Ver Documentação
          </motion.button>
        </div>
      </motion.div>

      {/* Palette Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-surface/50 border-primary/30 absolute bottom-8 flex gap-2 rounded-2xl border p-4 backdrop-blur-md sm:gap-4"
      >
        {[
          'var(--color-background)',
          'var(--color-surface)',
          'var(--color-primary)',
          'var(--color-secondary)',
          'var(--color-accent)',
          'var(--color-highlight)',
          'var(--color-muted)',
          'var(--color-muted-foreground)',
          'var(--color-foreground)',
        ].map((color, index) => (
          <div
            key={index}
            className="h-6 w-6 rounded-full border border-white/10 shadow-inner sm:h-8 sm:w-8"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default App
