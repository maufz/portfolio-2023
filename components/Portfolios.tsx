import { motion } from "framer-motion";
import { container, item } from "../utils/nested-animations";
import {FiInfo} from "react-icons/fi";

const portfolios = [
  {
    title: "Peregrinus",
    img: "portfolios/peregrinus2.webp",
    icon: "portfolios/peregrinus-icon.webp",
    link: "https://peregrinus.com.uy",
  },
  {
    title: "Midinero",
    img: "portfolios/midinero2.webp",
    icon: "portfolios/midinero-icon.webp",
    link: "https://midinero.com.uy",
    imgWrapperClasses: "bg-[#C2E2FF]",
  },
  {
    title: "Innuy",
    img: "portfolios/innuy2.webp",
    icon: "portfolios/innuy-icon.webp",
    link: "https://innuy.com",
    imgWrapperClasses: "bg-[#FBD4B6]",
  },
  {
    title: "Seva.Love",
    img: "portfolios/seva-love.webp",
    icon: "portfolios/seva-love-icon.webp",
    link: "https://seva.love",
    imgWrapperClasses: "bg-[#D2C3EF]",
  },
  {
    title: "Edward & Associates",
    img: "portfolios/edwards-associates.webp",
    icon: "portfolios/edwards-associates-icon.svg",
    link: "https://eandassociates.com/",
    imgWrapperClasses: "bg-[#D0F1C0]",
  },
  {
    title: "Market Street Family Dental",
    img: "portfolios/market-street-dental.webp",
    icon: "portfolios/market-street-dental-icon.webp",
    link: "https://troyildentist.com/",
    imgWrapperClasses: "bg-[#C0F1DA]",
  },
]

export default function Portfolios() {
  return (
    <section className="pt-8 pb-14 border-t border-black border-opacity-10 border-dashed">
      <motion.div
        className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 content-center"
        variants={container}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {portfolios.map(portfolio => <PortfolioItem
          portfolio={portfolio}
          key={portfolio.title}
        />)}
      </motion.div>
    </section>
  );
}

interface ItemProps {
  onOpenModal?: (event: any ) => void;
  portfolio: {
    title: string;
    img: string;
    icon?: string;
    link: string;
    variant?: "variant1" | "variant2" | "variant3";
    imgWrapperClasses?: string;
  }
}

function PortfolioItem({
  onOpenModal,
  portfolio
}: ItemProps) {

  const {title,
    img,
    icon,
    link,
    imgWrapperClasses = "bg-[#CFE5E7]"} = portfolio;

  const openInfoModal = (event: any) => {
    event.preventDefault();
    onOpenModal({
      title,
      img,
      icon,
      link,
    });
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      className="group max-w-lg mx-auto"
      variants={item}
    >
      <article className="border border-black border-opacity-20 rounded-2xl bg-white bg-opacity-50 flex flex-col h-full group-hover:shadow transition-shadow overflow-clip">
        <div
          className={`${imgWrapperClasses} p-4 xl:p-6 xl:pb-[26px] flex items-center justify-center border-b border-black border-opacity-10`}
        >
          <img
            src={img}
            alt={`Captura de pantalla de la página de inicio de ${title}`}
            className="aspect-video w-full object-cover rounded-lg bg-white mb-[2] group-hover:-translate-y-1 transition-transform group-hover:duration-300"
          />
        </div>
        <div className="flex items-center justify-between p-4 xl:px-6 xl:pb-6 xl:pt-5">
          <div className="flex items-center gap-2 md:gap-3">
            {icon && (
              <img
                src={icon}
                alt={`Logo de ${title}`}
                className="rounded-lg border border-black border-opacity-10 w-8 h-8 object-cover"
              />
            )}
            <h1 className="text-md lg:text-xl font-medium font-headings">
              {title}
            </h1>
          </div>
          <FiInfo className="opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-200 rounded-full w-8 h-8 p-2 shrink-0" onClick={openInfoModal} />
        </div>
      </article>
    </motion.a>
  );
}
