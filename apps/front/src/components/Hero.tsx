"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll y suavizado
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 300,
    restDelta: 0.001,
  });

  // Primera sección (entrada/salida)
  const firstSection = {
    scale: useTransform(smoothProgress, [0, 0.2], [1, 1]),
    opacity: useTransform(smoothProgress, [0, 0.3], [1, 0]),
    y: useTransform(smoothProgress, [0, 0.3], [0, -300]),
    gradientHeight: useTransform(smoothProgress, [0, 0.3], ["0%", "100%"]),
  };

  // Segunda sección (entrada y salida)
  const secondSection = {
    opacity: useTransform(smoothProgress, [0.1, 0.3, 0.5, 0.6], [0, 1, 0.8, 0]),
    y: useTransform(smoothProgress, [0.1, 0.3], [100, 0]),
  };

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Primera sección */}
      <motion.section
        style={{
          scale: firstSection.scale,
          opacity: firstSection.opacity,
          y: firstSection.y,
        }}
        className="sticky top-0 min-h-screen bg-cover bg-center bg-[url('/heroSection.png')] text-white flex items-center justify-center shadow-[inset_0_-100px_50px_-25px_#0e1101]"
      >
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          style={{ height: firstSection.gradientHeight }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0e1101] via-[#0e1101] to-transparent"
        />
        <div className="container relative flex flex-col items-center justify-center px-4 text-center min-h-screen">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bitácora Nómada
          </motion.h1>
          <motion.h3
            className="text-xl md:text-2xl max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Un recorrido por el mundo a través de palabras.
          </motion.h3>
        </div>
      </motion.section>

      {/* Segunda sección */}
      <motion.section
        style={secondSection}
        className="sticky top-0 min-h-screen bg-[#0e1101] flex items-center justify-center overflow-hidden"
      >
        <div className="container flex flex-col lg:flex-row items-center justify-center px-4 gap-8 lg:gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5, y: 50 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/section-img-1.jpg"
              fill
              quality={100}
              alt="Blog preview"
              className="object-cover"
            />
            <div className="absolute inset-0 border-2 border-white/10 rounded-xl pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
          >
            <motion.span
              className="text-sm font-semibold text-green-300 mb-2 tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              BITÁCORA DE VIAJES
            </motion.span>

            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Explora <span className="text-green-300">Historias</span> Únicas
            </motion.h2>

            <motion.p
              className="text-lg text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              Sumérgete en relatos cautivadores que te transportarán a los
              rincones más fascinantes del mundo. Cada entrada es una ventana a
              nuevas aventuras.
            </motion.p>

            <motion.button
              className="px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium flex items-center gap-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span>Explorar Posts</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
