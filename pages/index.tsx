import Experience from "@/components/Experience"
import Knowledge from "@/components/Knowledge"
import Portfolios from "@/components/Portfolios"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"
import About from "@/components/About"

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
            <About />
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
