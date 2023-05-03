export default function Portfolios() {
    return <section className="pt-8 pb-14 border-t border-black border-opacity-10 border-dashed">
        <div className="container grid lg:grid-cols-3 gap-6">
            <PortfolioItem title="Peregrinus" img="portfolios/peregrinus2.png" icon="portfolios/peregrinus-icon.jpg" link="https://peregrinus.com.uy" />
            <PortfolioItem title="Midinero" img="portfolios/midinero2.jpg" icon="portfolios/midinero-icon.jpg" link="https://midinero.com.uy" imgWrapperClasses="bg-[#C2E2FF]" />
            <PortfolioItem title="Innuy" img="portfolios/innuy2.jpg" icon="portfolios/innuy-icon.jpg" link="https://innuy.com" imgWrapperClasses="bg-[#FBD4B6]" />
            <PortfolioItem title="Seva.Love" img="portfolios/seva-love.jpg" icon="portfolios/seva-love-icon.jpg" link="https://innuy.com" imgWrapperClasses="bg-[#D2C3EF]" />
            <PortfolioItem title="Edward & Associates" img="portfolios/edwards-associates.jpg" icon="portfolios/edwards-associates-icon.svg" link="https://peregrinus.com.uy" imgWrapperClasses="bg-[#D0F1C0]" />
            <PortfolioItem title="Market Street Family Dental" img="portfolios/market-street-dental.jpg" icon="portfolios/market-street-dental-icon.jpg" link="https://midinero.com.uy" imgWrapperClasses="bg-[#C0F1DA]" />
        </div>
    </section>
}

interface ItemProps {
    title: string
    img: string
    icon?: string
    link: string,
    variant?: 'variant1' | 'variant2' | 'variant3'
    imgWrapperClasses?: string
}


function PortfolioItem(props: ItemProps) {

    const { title, img, icon, link, variant = 'variant3' } = props;

    if (variant == 'variant2') return <PortfolioItemVariant2 {...props} />;
    if (variant == 'variant3') return <PortfolioItemVariant3 {...props} />;

    return <a href={link} target="_blank">
        <article className="p-6 border border-black border-opacity-20 rounded-2xl bg-white bg-opacity-50 flex flex-col gap-4 h-full hover:shadow transition-shadow">
            <img src={img} alt="" className={`aspect-[3/2] w-full object-cover rounded-lg border border-black border-opacity-10 bg-white`} />
            <div className="flex items-center gap-3">
                {icon && <img src={icon} className="rounded-lg border border-black border-opacity-10 w-8 h-8 object-cover" />} <h1 className="text-xl font-medium font-headings">{title}</h1>
            </div>
        </article>
    </a>
}

function PortfolioItemVariant2({ title, img, icon, link }: ItemProps) {
    return <a href={link} target="_blank">
        <article className="border border-black border-opacity-20 rounded-2xl bg-white bg-opacity-50 flex flex-col gap-4 h-full hover:shadow transition-shadow">
            <img src={img} alt="" className="aspect-[3/2] w-full object-cover rounded-t-2xl border border-black border-opacity-10 bg-white" />
            <div className="flex items-center gap-3 px-4 pb-5">
                {icon && <img src={icon} className="rounded-lg border border-black border-opacity-10 w-8 h-8 object-cover" />} <h1 className="text-xl font-medium font-headings">{title}</h1>
            </div>
        </article>
    </a>
}

function PortfolioItemVariant3({ title, img, icon, link, imgWrapperClasses = 'bg-[#CFE5E7]' }: ItemProps) {
    return <a href={link} target="_blank" className="group">
        <article className="border border-black border-opacity-20 rounded-2xl bg-white bg-opacity-50 flex flex-col gap-4 h-full group-hover:shadow transition-shadow overflow-clip">
            <div className={`${imgWrapperClasses} p-6 flex items-center justify-center`}>
                <img src={img} alt="" className="aspect-video w-full object-cover rounded-xl bg-white mb-[2] group-hover:-translate-y-1 transition-transform group-hover:duration-500" />
            </div>
            <div className="flex items-center gap-3 px-6 pb-6">
                {icon && <img src={icon} className="rounded-lg border border-black border-opacity-10 w-8 h-8 object-cover" />} <h1 className="text-xl font-medium font-headings">{title}</h1>
            </div>
        </article>
    </a>
}