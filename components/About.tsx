const ageTimeDiff = new Date().getTime() - new Date("1999-04-19").getTime();
const age = Math.floor(ageTimeDiff / (1000 * 60 * 60 * 24 * 365));
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="h1 mb-2 md:mb-4">Mauro Fernández</h1>
      <h2 className="h3 mb-6 md:mb-10">Desarrollador Frontend</h2>
      
    </motion.section>
  );
}
