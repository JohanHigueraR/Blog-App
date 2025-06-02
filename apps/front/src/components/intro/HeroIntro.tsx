// components/Hero/HeroIntro.tsx
import * as motion from "motion/react-client";

export default function HeroIntro() {
  return (
    <>
      <motion.div className=" relative bg-[url('/heroSection.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-gray-300">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent via-70% to-gray-900/90"></div>
        <div className="container relative flex flex-col items-center justify-center min-h-screen text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, translateY: -15 }}
            exit={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: {
                delay: 0,
                type: "tween",
              },
            }}
          >
            Bitácora Nómada
          </motion.h1>

          <motion.h3
            className="text-xl md:text-2xl max-w-2xl text-gray-300 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, translateY: -15 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                delay: 0.2,
                type: "tween",
              },
            }}
          >
            Un recorrido por el mundo a través de palabras.
          </motion.h3>

          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, 10, 0],
              opacity: 1,
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-10 flex flex-col items-center text-white/70 text-sm"
          >
            <span className="mb-2">Desliza para explorar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
