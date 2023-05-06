import { useState, useEffect } from "react"

export default function Header() {
  const states = ['h-24 lg:h-44', 'h-96'];
  const [stateIndex, setStateIndex] = useState(0);
  const coverState = states[stateIndex];
  const handleCoverClick = () => {
    setStateIndex(prev => (prev + 1) % states.length);
  }

  return <header>
    <div className={`relative ${coverState} bg-gradient-to-b from-teal-400 to-cyan-600 after:absolute after:inset-0 after:backdrop-blur after:border-b -after:border-black after:border-opacity-10 transition-all`} onClick={handleCoverClick}></div>
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