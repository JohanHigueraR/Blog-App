"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { motion, AnimatePresence } from "framer-motion";

type Props = PropsWithChildren<{
  triggerIcon: ReactNode;
  triggerClassName?: string;
}>;

const SideBar = (props: Props) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);
  useOnClickOutside(ref, () => setShow(false));

  return (
    <>
      {/* Navbar Mobile */}
      <motion.div 
        className="w-full fixed flex items-center justify-between p-4 z-40"
        initial={{ backgroundColor: "rgba(15, 23, 42, 0)" }}
        animate={{ 
          backgroundColor: show ? "rgba(15, 23, 42, 0.7)" : "rgba(15, 23, 42, 0.7)",
          backdropFilter: show ? "blur(12px)" : "blur(12px)"
        }}
        transition={{ duration: 0.3 }}
      >
        <button
          className={cn("text-white p-2 rounded-md", props.triggerClassName)}
          onClick={() => setShow((prev) => !prev)}
        >
          {props.triggerIcon}
        </button>
        
        <motion.h1 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Bitácora Nómada
        </motion.h1>
        
        <div className="w-10"></div> {/* Spacer para balancear el layout */}
      </motion.div>

      {/* Sidebar */}
      <AnimatePresence>
        {show && (
          <motion.div
            ref={ref}
            className="fixed top-0 left-0 z-50 h-screen w-64"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.div 
              className="h-full text-slate-100 bg-slate-800/95 backdrop-blur-lg border-r border-white/10 shadow-2xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mt-16 space-y-4">
                {props.children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;