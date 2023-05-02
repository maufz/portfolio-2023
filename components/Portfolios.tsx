export default function Portfolios() {
    return <section className="pt-8 pb-14 border-t border-black border-opacity-10 border-dashed">
        <div className="container grid lg:grid-cols-3 gap-6">
            <PortfolioItem title="Peregrinus" img="portfolios/peregrinus.jpg" icon="portfolios/peregrinus-icon.jpg" link="https://peregrinus.com.uy" />
            <PortfolioItem title="Midinero" img="portfolios/midinero.jpg" icon="portfolios/midinero-icon.jpg" link="https://midinero.com.uy" />
            <PortfolioItem title="Innuy" img="portfolios/innuy.jpg" icon="portfolios/innuy-icon.jpg" link="https://innuy.com" />
            <PortfolioItem title="Peregrinus" img="portfolios/peregrinus.jpg" icon="portfolios/peregrinus-icon.jpg" link="https://peregrinus.com.uy" />
            <PortfolioItem title="Midinero" img="portfolios/midinero.jpg" icon="portfolios/midinero-icon.jpg" link="https://midinero.com.uy" />
            <PortfolioItem title="Innuy" img="portfolios/innuy.jpg" icon="portfolios/innuy-icon.jpg" link="https://innuy.com" />
        </div>
    </section>
}

interface ItemProps {
    title: string
    img: string
    icon?: string
    link: string
}

function PortfolioItem({title, img, icon, link}: ItemProps) {
    return <a href={link} target="_blank">
        <article className="p-6 border border-black border-opacity-20 rounded-2xl bg-white bg-opacity-50 flex flex-col gap-4 h-full hover:shadow transition-shadow">
            <img src={img} alt="" className="aspect-[3/2] w-full object-cover rounded-lg border border-black border-opacity-10 bg-white" />
            <div className="flex items-center gap-3">
                {icon && <img src={icon} className="rounded-lg border border-black border-opacity-10 w-8 h-8 object-cover" />} <h1 className="text-xl font-medium font-headings">{title}</h1>
            </div>
        </article>
    </a>
}