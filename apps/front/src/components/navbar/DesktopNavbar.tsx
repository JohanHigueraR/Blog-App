"use client";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Props = PropsWithChildren;

const DesktopNavbar = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  // Variants para las animaciones
  const navVariants = {
    initial: {
      y: 0,
      width: "100%",
      borderRadius: "0px",
      padding: "1rem 0",
      backgroundColor: "rgba(15, 23, 42, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "none",
      borderColor: "rgba(255, 255, 255, 0.1)"
    },
    scrolled: {
      y: 0,
      width: "calc(100% - 2rem)",
      borderRadius: "12px",
      padding: "0.5rem 0",
      backgroundColor: "rgba(15, 23, 42, 0.7)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      border: "1px solid",
      borderColor: "rgba(255, 255, 255, 0.1)",
      margin: "0.5rem 1rem",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    },
    notHome: {
      y: 0,
      backgroundColor: "rgba(15, 23, 42, 0.7)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      border: "1px solid",
      borderColor: "rgba(255, 255, 255, 0.1)"
    }
  };

  return (
    <div className="w-full flex justify-center">
      <motion.nav
        className="hidden fixed z-50 text-white top-0 md:block max-w-screen-2xl mx-auto"
        initial="initial"
        animate={isHome ? (isScrolled ? "scrolled" : "initial") : "notHome"}
        variants={navVariants}
      >
        <div className="flex items-center px-6 container mx-auto">
          {props.children}
        </div>

        <AnimatePresence>
          {(!isScrolled && isHome) && (
            <motion.hr
              className="border-b border-gray-100 opacity-25 w-full"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default DesktopNavbar;