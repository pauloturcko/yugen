import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <section 
      className="relative min-h-screen pt-24 w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-primary to-secondary text-foreground"
    >
      {/* Animated Smoke/Vapor Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-50">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-white/10 blur-[100px]"
          animate={{
            x: ['0%', '15%', '-5%', '0%'],
            y: ['0%', '10%', '15%', '0%'],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-white/10 blur-[120px]"
          animate={{
            x: ['0%', '-20%', '10%', '0%'],
            y: ['0%', '-15%', '10%', '0%'],
            scale: [1, 1.1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[90px]"
          animate={{
            x: ['0%', '30%', '-10%', '0%'],
            y: ['0%', '-10%', '20%', '0%'],
            scale: [0.8, 1.3, 1, 0.8],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Placeholder Content for the Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-garamond text-5xl md:text-7xl font-bold mb-6 tracking-wide drop-shadow-lg"
        >
          A Essência <span className="text-highlight">Yūgen</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-manrope text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
        >
          O mistério e a beleza profunda do universo que não podem ser expressos em palavras.
        </motion.p>
      </div>
    </section>
  );
};