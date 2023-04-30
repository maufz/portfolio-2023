export default function Header() {
  return <header>
    <div className="relative h-48 bg-teal-300 bg-[url(https://media.giphy.com/media/l4KihuqeuJEi9qLSM/giphy.gif)] bg-center bg-fixed after:absolute after:inset-0 after:backdrop-blur after:border-b after:border-black after:border-opacity-10"></div>
    <div className="relative border-b border-black border-opacity-10 border-dashed">
      <div className="max-w-2xl mx-auto px-3 flex items-center">
        <img src="profile.jpg" className="w-auto h-[120px] rounded-full mt-[-60px] inline-block border-2 border-white mr-4" alt="" />
        <div className="flex items-center gap-3">
          <a href="#"><img src="akar-icons_twitter.svg" alt="" /></a>
          <a href="#"><img src="akar-icons_linkedin.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </header>
}