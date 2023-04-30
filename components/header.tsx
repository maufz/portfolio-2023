export default function Header() {
  return <header>
    <div className="relative h-24 lg:h-48 bg-teal-400 /bg-[url(https://media.giphy.com/media/l4KihuqeuJEi9qLSM/giphy.gif)] bg-center bg-fixed after:absolute after:inset-0 after:backdrop-blur after:border-b -after:border-black after:border-opacity-10"></div>
    <div className="relative border-b border-black border-opacity-10 border-dashed">
      <div className="max-w-2xl mx-auto px-3 flex items-center">
        <img src="profile.jpg" className="w-auto h-[120px] rounded-full mt-[-60px] inline-block border-2 border-white mr-2" alt="" />
        <div className="flex items-center gap-[2px]">
          <a href="#" className="p-2"><img src="mdi_github.svg" alt="" /></a>
          <a href="https://www.linkedin.com/in/mauro-fern%C3%A1ndez-6a3052198/" className="p-2" target="_blank"><img src="akar-icons_linkedin.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </header  >
}