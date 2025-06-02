export const imageVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: -15,
  },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      mass: 0.5,
      delay: 0.2, // Opcional: retraso para efectos en cascada
    }
  },
  hover: { // Estado adicional para efectos al pasar el mouse
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  }
};

// Variantes para el contenedor principal (staggered animation)
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Espaciado entre animaciones de hijos
      delayChildren: 0.3 // Retraso inicial
    }
  }
};

// Variantes para el tag/título pequeño
export const tagVariants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

// Variantes para el título principal (con efecto de letras)
export const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Variantes para el párrafo (entrada suave)
export const paragraphVariants = {
  hidden: { 
    opacity: 0,
    x: -20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 0.6
    }
  }
};

// Variantes mejoradas para el botón (ya tienes hover/tap)
export const buttonVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.6,
      stiffness: 300
    }
  }
};