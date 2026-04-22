export default function Header() {
  return (
    <header className='flex w-full items-center justify-between px-10 py-4 flex-nowrap whitespace-nowrap gap-30'>
      {/* <header className='flex w-360 h-188 bg-neutral-900/30'> */}
      <h1 className='flex w-80 h-14 justify-start text-white text-4xl font-normal font-black-han leading-[53.47px] px-5'>
        CASK CARNIVAL
      </h1>
      {/* <h1 className='flex py-4 px-10 font-black-han font-normal text-4xl leading-[134%]'>CASK CARNIVAL</h1> */}
      <nav className='flex text-center justify-start items-center'>
        {/* <ul className='flex gap-20 py-4 px-2 font-poppins text-3xl font-medium'> */}
        <ul className='flex gap-30 py-4 font-poppins text-3xl font-normal'>
          <li className='text-orange-600 font-medium'>홈</li>
          <li>티켓</li>
          <li>강연</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
