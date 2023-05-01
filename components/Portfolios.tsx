export default function Portfolios() {
    return <section className="pt-8 pb-14 border-t border-black border-opacity-10 border-dashed">
        <div className="container grid lg:grid-cols-3 gap-6">
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    </section>
}

function PortfolioItem() {
    return <a href="#">
        <article className="p-6 border border-black border-opacity-20 rounded-2xl bg-white bg-opacity-50 flex flex-col gap-4 h-full hover:shadow transition-shadow">
            <img src="portfolio-thumbnail.jpg" alt="" className="aspect-[4/3] w-full object-cover rounded-lg border border-black border-opacity-10" />
            <div>
                <h1 className="text-xl font-medium font-headings">Portfolio</h1>
            </div>
        </article>
    </a>
}