const ageTimeDiff = new Date().getTime() - new Date("1999-04-19").getTime();
const age = Math.floor(ageTimeDiff / (1000 * 60 * 60 * 24 * 365));
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="h1 mb-2 md:mb-4">Mauro Fernández</h1>
      <h2 className="h3 mb-6 md:mb-10">Desarrollador Frontend</h2>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-black text-opacity-8 leading-[1.6] text-lg">
          ¡Hola!
        </p>
        <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
          Soy Mauro y tengo {age} años. Desde 2019 me desempeño como
          desarrollador front-end.
        </p>
        <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
          Desde el inicio de mi formación como desarrollador, siento que la
          mejor manera de aprender y crecer es mediante la práctica constante e
          investigación continua. De esta manera, me mantengo actualizado en
          todo lo relacionado con el desarrollo y otras áreas de mi interés.
        </p>
        <p className="font-[350] text-black text-opacity-8 leading-[1.6]">Me gusta desafiarme a mí mismo a través de proyectos personales para poner a prueba nuevas herramientas y lenguajes.</p>
      </div>
    </motion.section>
  );
}
