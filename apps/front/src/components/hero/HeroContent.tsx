// components/Hero/HeroContent.tsx
import * as motion from "motion/react-client";
import Image from "next/image";
import {
  buttonVariants,
  containerVariants,
  imageVariants,
  paragraphVariants,
  tagVariants,
  titleVariants,
} from "./variants";

export function HeroContent() {
  return (
    <div className="  flex w-full h-screen gap-7 items-center justify-center bg-gradient-to-t from-gray-950  to-gray-900">
      {/* Imagen */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl hidden md:flex "
      >
        <Image
          src="/section-img-1.jpg"
          fill
          quality={100}
          alt="Blog preview"
          className="object-cover"
        />
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
      </motion.div>

      {/* Contenido */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
      >
        <motion.span
          variants={tagVariants}
          className="text-sm font-semibold text-gray-400 mb-2 tracking-wider"
        >
          BITÁCORA DE VIAJES
        </motion.span>

        <motion.h2
          variants={titleVariants}
          className="text-3xl text-gray-300 md:text-5xl font-bold mb-6 leading-tight tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
        >
          Explora <span className="text-gray-400">Historias</span> que Inspiran
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          className="text-lg text-gray-300 mb-8 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
        >
          Este blog es tu ventana al mundo: relatos auténticos de viajeros como
          tú, llenos de emoción, descubrimiento y cultura. Más que un diario, es
          una comunidad que conecta almas nómadas a través de la palabra.
        </motion.p>

        {/* Botón */}
        <motion.div variants={buttonVariants}>
          <motion.button
            className="bg-slate-600 hover:bg-slate-500 px-5 py-2 text-gray-300 rounded-full font-medium flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            whileHover={{
              boxShadow: "0 0 20px var(--color-slate-600)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explorar Posts</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
