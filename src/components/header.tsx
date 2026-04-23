export default function Header() {
  return (
    <header className="flex w-full flex-nowrap items-center justify-between gap-30 px-10 py-4 whitespace-nowrap">
      {/* <header className='flex w-360 h-188 bg-neutral-900/30'> */}
      <h1 className="font-black-han flex h-14 w-80 justify-start px-5 text-4xl leading-[53.47px] font-normal text-white">
        CASK CARNIVAL
      </h1>
      {/* <h1 className='flex py-4 px-10 font-black-han font-normal text-4xl leading-[134%]'>CASK CARNIVAL</h1> */}
      <nav className="flex items-center justify-start text-center">
        {/* <ul className='flex gap-20 py-4 px-2 font-poppins text-3xl font-medium'> */}
        <ul className="font-poppins flex gap-30 py-4 text-3xl font-normal">
          <li className="font-medium text-orange-600">홈</li>
          <li>티켓</li>
          <li>강연</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
