import { motion } from "framer-motion";

import {container, item} from "../utils/nested-animations";

export default function Experience() {
  return <motion.section className="flex flex-col gap-4 md:gap-6" variants={container}
  initial="hidden"
  animate="visible" viewport={{ once: true }}>
    <motion.div variants={item}>
      <h2 className="h4 mb-2">Experiencia</h2>
      <ExperienceItem img="ameba-logo.jpg" imgAlt="Logo de Ameba Creative Studio" title="Ameba Creative Studio" subtitle="2019 - presente" link="https://ameba.com.uy" />
    </motion.div>
    <motion.div variants={item}>
      <h2 className="h4 mb-2">Educación</h2>
      <ExperienceItem img="ort-logo.jpg" imgAlt="Logo de la Universidad ORT" title="Tec. en Diseño Digital Web, Universidad&nbsp;ORT" subtitle="2018 - 2020" link="https://ort.edu.uy" />
    </motion.div>
    <motion.div variants={item}>
      <h2 className="h4 mb-2">Cursos</h2>
      <ExperienceItem img="coderhouse-logo.jpg" imgAlt="Logo de Coderhouse" title="Diseño UX/UI, Coderhouse" subtitle="10/2022 - 01/2023" link="https://coderhouse.com.uy/pages/certificados/63d446d4687a8c000e5c91d8" />
    </motion.div>
  </motion.section>
}


function ExperienceItem({img, title, subtitle, imgAlt, link}: ItemProps) {
  return <a href={link} className="flex md:items-center gap-x-3 gap-y-2 rounded-2xl border border-black border-opacity-20 p-3 sm:p-4 bg-white bg-opacity-50
  hover:shadow transition-shadow" target="_blank">
    <div className="flex items-start md:block gap-2 shrink-0">
      <img src={img} alt={imgAlt} className="rounded-lg border border-black border-opacity-10 bg-white w-6 h-6" />
    </div>
    <div className="sm:flex sm:gap-2 sm:justify-between flex-grow items-center">
      <div>
        {title}
      </div>
      <div className="text-black text-opacity-70">{subtitle}</div>
    </div>
  </a>
}

interface ItemProps {
  title: string
  img?: string
  subtitle?: string
  imgAlt?: string
  link?: string
}