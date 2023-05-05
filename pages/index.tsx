import Experience from "@/components/Experience"
import Knowledge from "@/components/Knowledge"
import Portfolios from "@/components/Portfolios"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  const ageTimestamp = new Date().getTime() - new Date('1999-04-19').getTime();
  const age = Math.floor(ageTimestamp / (1000 * 60 * 60 * 24 * 365));
  return (
    <>
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
                <p className="font-medium text-black text-opacity-8 leading-[1.6] text-lg">¡Hola! 😊</p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                  Soy Mauro, tengo {age} años y desde el 2019 soy desarrollador front-end.
                </p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                  Desde que empecé a formarme como desarrollador considero que la mejor forma de aprender y crecer es mediante la práctica e investigación constante.
                </p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                  Es así como me mantengo al día sobre todo lo que es desarrollo y demás. Me gusta desafiarme mediante proyectos personales, esta página es uno de ellos.
                </p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                  Además del desarrollo, me interesa el diseño ux/ui. Por esto mismo decidí hacer el curso de diseño en coderhouse.
                </p>
                <p className="font-[350] text-black text-opacity-8 leading-[1.6]">
                  ¡Un gusto!
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
