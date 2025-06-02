import * as React from "react";
import * as motion from "motion/react-client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PostType } from "@/lib/types/modelTypes";
import Image from "next/image";

type Props = {
  posts: PostType[];
};

const parientVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function PostCards({ posts }: Props) {
  const lastFivePost = posts.slice(0, 5);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {lastFivePost.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <motion.article className="group h-full flex flex-col bg-gray-900/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-400">
              {/* Imagen del post - Tamaño fijo */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.thumbnail || "/placeholder-post.jpg"}
                  alt={item.title}
                  width={500}
                  height={500}
                  quality={100}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              </div>

              {/* Contenido - Se expande para ocupar espacio restante */}
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-sm text-gray-400 font-mono">
                  {new Date(item.createdAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>

                {/* Título con altura fija */}
                <h3 className="mt-2 text-xl font-bold text-gray-100 line-clamp-2 min-h-[3.5rem]">
                  {item.title}
                </h3>

                {/* Botón alineado al final */}
                <div className="mt-auto pt-4 flex justify-end">
                  <motion.button className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-gray-100 rounded-full text-sm font-medium transition-colors ">
                    Leer más
                  </motion.button>
                </div>
              </div>
            </motion.article>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
