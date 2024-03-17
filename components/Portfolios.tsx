import { motion } from "framer-motion";
import { container, item } from "../utils/nested-animations";

export default function Portfolios() {
  return (
    <section className="pt-10 lg:pt-20 pb-14 border-t border-black border-opacity-10 border-dashed">
      <div className="container">
        <h2 className="h4 mb-6 lg:mb-12 text-center">Proyectos en los que he trabajado:</h2>
      </div>
      <motion.div
        className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 content-center"
        variants={container}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <PortfolioItem
          title="Ameba Creative Studio"
          img="portfolios/ameba-studio.jpg"
          icon="/ameba-logo.jpg"
          link="https://ameba.studio"
          imgWrapperClasses="bg-neutral-800"
        />
        <PortfolioItem
          title="Peregrinus"
          img="portfolios/peregrinus2.webp"
          icon="portfolios/peregrinus-icon.webp"
          link="https://peregrinus.com.uy"
        />
        <PortfolioItem
          title="Midinero"
          img="portfolios/midinero2.webp"
          icon="portfolios/midinero-icon.webp"
          link="https://midinero.com.uy"
          imgWrapperClasses="bg-[#C2E2FF]"
        />
        <PortfolioItem
          title="Innuy"
          img="portfolios/innuy2.webp"
          icon="portfolios/innuy-icon.webp"
          link="https://innuy.com"
          imgWrapperClasses="bg-[#FBD4B6]"
        />
        <PortfolioItem
          title="Blind Acting"
          img="portfolios/blind-acting.jpg"
          icon="portfolios/blind-acting-icon.jpg"
          link="https://blindacting.com"
          imgWrapperClasses="bg-neutral-200"
        />
        <PortfolioItem
          title="Seva.Love"
          img="portfolios/seva-love.webp"
          icon="portfolios/seva-love-icon.webp"
          link="https://seva.love"
          imgWrapperClasses="bg-[#D2C3EF]"
        />
        <PortfolioItem
          title="Edward & Associates"
          img="portfolios/edwards-associates.webp"
          icon="portfolios/edwards-associates-icon.svg"
          link="https://eandassociates.com/"
          imgWrapperClasses="bg-[#D0F1C0]"
        />
        <PortfolioItem
          title="Market Street Family Dental"
          img="portfolios/market-street-dental.webp"
          icon="portfolios/market-street-dental-icon.webp"
          link="https://troyildentist.com/"
          imgWrapperClasses="bg-[#C0F1DA]"
        />
      </motion.div>
    </section>
  );
}

interface ItemProps {
  title: string;
  img: string;
  icon?: string;
  link: string;
  variant?: "variant1" | "variant2" | "variant3";
  imgWrapperClasses?: string;
}

function PortfolioItem({
  title,
  img,
  icon,
  link,
  imgWrapperClasses = "bg-[#CFE5E7]",
}: ItemProps) {
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
            className="aspect-video w-full object-cover rounded-lg group-hover:-translate-y-1 transition-transform group-hover:duration-300"
          />
        </div>
        <div className="flex items-center gap-2 md:gap-3 p-4 xl:px-6 xl:pb-6 xl:pt-5">
          {icon && (
            <img
              src={icon}
              alt={`Logo de ${title}`}
              className="rounded-lg border border-black border-opacity-10 w-8 h-8 object-cover"
            />
          )}
          <h3 className="text-md lg:text-xl font-medium font-headings">
            {title}
          </h3>
        </div>
      </article>
    </motion.a>
  );
}
