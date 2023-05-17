interface Knowledge {
  text: string;
  icon?: string;
  url?: string;
  classes?: string;
}

import { motion } from "framer-motion";

import {item, quickContainer} from "../utils/nested-animations";

const knowledge: Knowledge[] = [
  {
    text: "React",
    icon: "fa-brands_react.svg",
    url: "?",
  },
  {
    text: "Vue",
    icon: "fa-brands_vuejs.svg",
    url: "?",
  },
  {
    text: "Svelte",
    icon: "carbon_logo-svelte.svg",
    url: "?",
  },
  {
    text: "PHP",
    icon: "fa6-brands_php.svg",
    url: "?",
  },
  {
    text: "Wordpress",
    icon: "ic_baseline-wordpress.svg",
    url: "?",
  },
  {
    text: "Tailwind CSS",
    icon: "mdi_tailwind.svg",
    url: "?",
  },
  {
    text: "Bootstrap",
    icon: "ri_bootstrap-fill.svg",
    url: "?",
  },
  {
    text: "GSAP",
  },
];

export default function Knowledge() {
  return (
    <motion.div
      className="flex gap-2 md:gap-4 flex-wrap mb-10 md:mb-14"
      variants={quickContainer}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {knowledge.map((item) => (
        <KnowledgeItem
          icon={item.icon}
          text={item.text}
          url={item.url}
          key={item.text}
          className={item.classes}
        />
      ))}
      <KnowledgeItem text="Y más..." className="text-black text-opacity-80" />
    </motion.div>
  );
}

interface KnowledgeItemProps {
  text: string;
  icon?: string;
  url?: string;
  className?: string;
}

function KnowledgeItem({ text, icon, url, className }: KnowledgeItemProps) {
  return (
    <motion.div
      variants={item}
      className={`
      ${className}
      flex items-center gap-1 sm:gap-2 rounded-2xl border border-black border-opacity-20 px-4 py-3 bg-white bg-opacity-50
      hover:shadow transition-shadow
      `}
    >
      {icon && <img src={icon} alt={`Logo de ${text}`} />} {text}
    </motion.div>
  );
}
