const knowledge = [
  {
    text: 'React',
    icon: 'fa-brands_react.svg',
    url: '?',
  },
  {
    text: 'Vue',
    icon: 'fa-brands_vuejs.svg',
    url: '?',
  },
  {
    text: 'Svelte',
    icon: 'carbon_logo-svelte.svg',
    url: '?',
  },
  {
    text: 'PHP',
    icon: 'fa6-brands_php.svg',
    url: '?',
  },
  {
    text: 'Wordpress',
    icon: 'ic_baseline-wordpress.svg',
    url: '?',
  },
  {
    text: 'Tailwind CSS',
    icon: 'mdi_tailwind.svg',
    url: '?',
  },
  {
    text: 'Bootstrap',
    icon: 'ri_bootstrap-fill.svg',
    url: '?',
  },
  {
    text: 'GSAP',
  },
]

export default function Knowledge() {
  return (
    <div className="flex gap-4 flex-wrap mb-14">
      {knowledge.map(item => <KnowledgeItem icon={item.icon} text={item.text} url={item.url} />)}
    </div>
  )
}


interface KnowledgeItemProps {
  text: string;
  icon?: string;
  url?: string;
}

function KnowledgeItem({ text, icon, url }: KnowledgeItemProps) {
  return (
    <div
      className="
      flex items-center gap-2 rounded-2xl border border-black border-opacity-20 px-4 py-3 bg-white bg-opacity-50
      hover:shadow transition-shadow
      "
    >
      {icon && <img src={icon} />} {text}
    </div>
  );
}