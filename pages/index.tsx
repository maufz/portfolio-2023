import Knowledge from "@/components/Knowledge"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="border-b border-black border-opacity-20 border-dashed"
    >
      <Header />
      <div className="container flex mx-auto border-x border-black border-opacity-20 border-dashed">
        <div className="md:max-w-5xl w-full md:px-4 mx-auto pt-20 border-x border-black border-opacity-20 border-dashed">
          <div className="max-w-2xl mx-auto px-3 pb-36">
          <section className="mb-8">
            <h1 className="h1 mb-4">Mauro Fernández</h1>
            <h2 className="h3 mb-10">Desarrollador Frontend</h2>
            <p className="font-[350] text-black text-opacity-8 leading-[1.6] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem totam doloremque debitis assumenda aspernatur. Voluptates sed explicabo maiores error? At facere, perferendis similique sequi sed possimus repellat assumenda culpa recusandae.</p>
            <p className="font-[350] text-black text-opacity-8 leading-[1.6] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat vitae soluta cum sunt adipisci tenetur debitis iste dicta recusandae! Minus iusto mollitia tenetur non?</p>
            <p className="font-[350] text-black text-opacity-8 leading-[1.6] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam odio animi veniam fugiat atque.</p>
          </section>
          <Knowledge />
          </div>
        </div>
      </div>
    </main>
  )
}
