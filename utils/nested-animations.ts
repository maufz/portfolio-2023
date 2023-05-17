export const container = {
  hidden: { opacity: 1, scale: 0.8, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.01,
      staggerChildren: 0.05,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const quickContainer = {
  hidden: { opacity: 1, scale: 0.8, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.01,
      staggerChildren: 0.02,
    },
  },
}