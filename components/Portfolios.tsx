import { motion } from "framer-motion";
import { container, item } from "../utils/nested-animations";
import type { Portfolio, PortfolioFetchResponse } from "../types/portfolios";

export default function Portfolios({ portfolios }: { portfolios: PortfolioFetchResponse }) {
  console.log(portfolios);
  return (
    <section className="pt-8 pb-14 border-t border-black border-opacity-10 border-dashed">
      <motion.div
        className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 content-center"
        variants={container}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {portfolios.data.map(portfolio => {
          let portfolioData = portfolio.attributes;
          return (
            <PortfolioItem
              key={portfolio.id}
              title={portfolioData.Name}
              img={process.env.NEXT_PUBLIC_STRAPI_URL! + portfolioData.thumbnail?.data.attributes.url}
              icon={process.env.NEXT_PUBLIC_STRAPI_URL! + portfolioData.icon?.data.attributes.url}
              link={portfolioData.link}
            />
          );
        })}
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

function PortfolioItem(props: ItemProps) {
  const { title, img, icon, link, variant = "variant3" } = props;

  if (variant == "variant2") return <PortfolioItemVariant2 {...props} />;
  if (variant == "variant3") return <PortfolioItemVariant3 {...props} />;

  return (
    <motion.a href={link} target="_blank" variants={item}>
      <article className="p-6 border border-black border-opacity-20 rounded-2xl bg-white bg-opacity-50 flex flex-col gap-4 h-full hover:shadow transition-shadow">
        <img
          src={img}
          alt={`Captura de pantalla de la página de inicio de ${title}`}
          className={`aspect-[3/2] w-full object-cover rounded-lg border border-black border-opacity-10 bg-white`}
        />
        <div className="flex items-center gap-3">
          {icon && (
            <img
              src={icon}
              className="rounded-lg border border-black border-opacity-10 w-8 h-8 object-cover"
            />
          )}
          <h1 className="text-xl font-medium font-headings">{title}</h1>
        </div>
      </article>
    </motion.a>
  );
}

function PortfolioItemVariant2({ title, img, icon, link }: ItemProps) {
  return (
    <a href={link} target="_blank">
      <article className="border border-black border-opacity-20 rounded-2xl bg-white bg-opacity-50 flex flex-col gap-4 h-full hover:shadow transition-shadow">
        <img
          src={img}
          alt=""
          className="aspect-[3/2] w-full object-cover rounded-t-2xl border border-black border-opacity-10 bg-white"
        />
        <div className="flex items-center gap-3 px-4 pb-5">
          {icon && (
            <img
              src={icon}
              className="rounded-lg border border-black border-opacity-10 w-8 h-8 object-cover"
            />
          )}
          <h1 className="text-xl font-medium font-headings">{title}</h1>
        </div>
      </article>
    </a>
  );
}

function PortfolioItemVariant3({
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
            className="aspect-video w-full object-cover rounded-lg bg-white mb-[2] group-hover:-translate-y-1 transition-transform group-hover:duration-300"
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
          <h1 className="text-md lg:text-xl font-medium font-headings">
            {title}
          </h1>
        </div>
      </article>
    </motion.a>
  );
}
