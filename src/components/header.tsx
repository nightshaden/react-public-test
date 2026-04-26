export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full flex-nowrap bg-black/70 px-8 py-2 whitespace-nowrap backdrop-blur-lg">
      <div className="flex w-full max-w-480 items-center justify-between">
        <h1 className="font-black-han flex h-14 w-80 justify-start px-5 text-4xl leading-[53.47px] font-normal text-white">
          CASK CARNIVAL
        </h1>
        <nav className="hidden items-end justify-end-safe text-center xl:flex">
          <ul className="font-poppins flex gap-30 py-4 text-3xl font-normal">
            <li className="font-medium text-orange-600">홈</li>
            <li>티켓</li>
            <li>강연</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
