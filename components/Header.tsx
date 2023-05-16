import { useState, useEffect } from "react"
import dottedBg from "@/public/dotted-bg.png"
import { motion } from "framer-motion";

export default function Header() {
  const states = ['h-24 lg:h-44', 'h-96'];
  const [stateIndex, setStateIndex] = useState(0);
  const coverState = states[stateIndex];
  const handleCoverClick = () => {
    setStateIndex(prev => (prev + 1) % states.length);
  }

  return <header>
    <div style={{backgroundImage: `url(${dottedBg.src})`}} className={`${coverState} transition-all bg-teal-400 relative`} onClick={handleCoverClick}>
      <motion.div className="absolute top-0 left-0 w-full bg-[#F1F1F1]" initial={{height: '100%'}} animate={{height: 0}} transition={{duration: 0.5, delay: 0.2, type: 'spring'}}>

      </motion.div>
    </div>
    <div className="relative border-b border-black border-opacity-10 border-dashed">
      <div className="max-w-2xl mx-auto px-3 flex items-center">
        <img src="profile.webp" className="w-[120px] h-[120px] rounded-full mt-[-60px] inline-block border-2 border-white mr-2" alt="" />
        <div className="flex items-center gap-[2px]">
          <a href="https://github.com/maufz" className="p-2 hover:opacity-80 transition-opacity" target="_blank"><img src="mdi_github.svg" alt="" /></a>
          <a href="https://www.linkedin.com/in/mauro-fern%C3%A1ndez-6a3052198/" className="p-2 hover:opacity-80 transition-opacity" target="_blank"><img src="akar-icons_linkedin.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </header  >
}