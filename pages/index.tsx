import Experience from "@/components/Experience"
import Knowledge from "@/components/Knowledge"
import Portfolios from "@/components/Portfolios"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"

const ageTimeDiff = new Date().getTime() - new Date('1999-04-19').getTime();
const age = Math.floor(ageTimeDiff / (1000 * 60 * 60 * 24 * 365));

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauro Fernández - Desarrollador Frontend</title>
      </Head>
      <main className="border-b border-black border-opacity-10 border-dashed"
      >
        <Header />
        <div className="container flex mx-auto xl:border-x border-black border-opacity-10 border-dashed">
          <div className="md:max-w-5xl w-full md:px-4 mx-auto pt-6 pb-8 lg:pt-16 md:border-x border-black border-opacity-10 border-dashed">
            <div className="max-w-2xl mx-auto md:px-3 lg:pb-24">
            <section className="mb-8">
              <h1 className="h1 mb-2 md:mb-4">Mauro Fernández</h1>
              <h2 className="h3 mb-6 md:mb-10">Desarrollador Frontend</h2>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-black text-opacity-8 leading-[1.6] text-lg">¡Hola!</p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                Soy Mauro y tengo {age} años. Desde 2019 me desempeño como desarrollador front-end.
                </p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                  Desde el inicio de mi formación como desarrollador, siento que la mejor manera de aprender y crecer es mediante la práctica constante e investigación continua. De esta manera, me mantengo actualizado en todo lo relacionado con el desarrollo y otras áreas de mi interés.
                </p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                  Me gusta desafiarme a mí mismo a través de proyectos personales.
                </p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                  Además del desarrollo, también me interesa el diseño UX/UI, lo que me motivó a realizar el curso de diseño en Coderhouse.
                </p>
              </div>
            </section>
            <Knowledge />
            <Experience />
            </div>
          </div>
        </div>
        <Portfolios />
      </main>
      <Footer></Footer>
    </>
  )
}
