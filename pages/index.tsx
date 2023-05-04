import Experience from "@/components/Experience"
import Knowledge from "@/components/Knowledge"
import Portfolios from "@/components/Portfolios"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <main className="border-b border-black border-opacity-10 border-dashed"
      >
        <Header />
        <div className="container flex mx-auto xl:border-x border-black border-opacity-10 border-dashed">
          <div className="md:max-w-5xl w-full md:px-4 mx-auto pt-6 pb-6 lg:pt-16 md:border-x border-black border-opacity-10 border-dashed">
            <div className="max-w-2xl mx-auto md:px-3 lg:pb-24">
            <section className="mb-8">
              <h1 className="h1 mb-2 md:mb-4">Mauro Fernández</h1>
              <h2 className="h3 mb-6 md:mb-10">Desarrollador Frontend</h2>
              <p className="font-[350] text-black text-opacity-8 leading-[1.6] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem totam doloremque debitis assumenda aspernatur. Voluptates sed explicabo maiores error? At facere, perferendis similique sequi sed possimus repellat assumenda culpa recusandae.</p>
              <p className="font-[350] text-black text-opacity-8 leading-[1.6] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat vitae soluta cum sunt adipisci tenetur debitis iste dicta recusandae! Minus iusto mollitia tenetur non?</p>
              <p className="font-[350] text-black text-opacity-8 leading-[1.6] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam odio animi veniam fugiat atque.</p>
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
