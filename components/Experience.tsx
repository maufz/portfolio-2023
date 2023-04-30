export default function Experience() {
  return <section className="flex flex-col gap-6">
    <div>
      <h2 className="h4 mb-2">Experiencia</h2>
      <ExperienceItem img="ameba-logo.jpg" title="Ameba Creative Studio" subtitle="2019 - presente" link="https://ameba.com.uy" />
    </div>
    <div>
      <h2 className="h4 mb-2">Educación</h2>
      <ExperienceItem img="ort-logo.jpg" title="Tec. en Diseño Digital Web, Universidad ORT" subtitle="2018 - 2020" link="https://ort.edu.uy" />
    </div>
    <div>
      <h2 className="h4 mb-2">Cursos</h2>
      <ExperienceItem img="coderhouse-logo.jpg" title="Diseño UX/UI, Coderhouse" subtitle="10/2022 - 01/2023" link="https://coderhouse.com" />
    </div>
  </section>
}


function ExperienceItem({img, title, subtitle, imgAlt, link}: ItemProps) {
  return <a href={link} className="flex flex-col sm:flex-row md:items-center gap-y-2 justify-between rounded-2xl border border-black border-opacity-20 p-4 bg-white bg-opacity-50
  hover:shadow transition-shadow" target="_blank">
    <div className="flex items-center gap-2">
      <img src={img} alt={imgAlt} className="rounded-lg border border-black border-opacity-10 bg-white" /> {title}
    </div>
    <div className="text-black text-opacity-70">{subtitle}</div>
  </a>
}

interface ItemProps {
  title: string
  img?: string
  subtitle?: string
  imgAlt?: string
  link?: string
}