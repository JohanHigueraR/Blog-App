import * as motion from "motion/react-client";
import { PostType } from "@/lib/types/modelTypes";
import Link from "next/link";
import { PostCards } from "./PostCards";

type Props = {
  posts: PostType[];
};

export const titleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.6,
      stiffness: 300,
    },
  },
};
function LatestPost({ posts }: Props) {
  return (
    <div className="container px-4 mx-auto h-screen flex justify-center items-center flex-col w-3/5">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-400 "
      >
        Últimos Posts
      </motion.h2>
      <PostCards posts={posts}></PostCards>
      <motion.button
        variants={buttonVariants}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center mt-10"
      >
        <Link
          href="/blog"
          className="px-6 py-3 w-2xs sm:w-full bg-slate-600 hover:bg-slate-500 rounded-full font-medium text-gray-100 transition-colors duration-300 flex items-center justify-center "
        >
          Ver Todos los Posts
        </Link>
      </motion.button>
    </div>
  );
}

export default LatestPost;
