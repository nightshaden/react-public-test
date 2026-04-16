export default function Header() {
  return (
    <header className='flex w-full items-center '>
      <h1 className='flex py-4 px-10 font-black-han font-normal text-[40px] leading-[134%]'>CASK CARNIVAL</h1>
      <nav className='flex px-30'>
        <ul className='flex gap-20 py-4 px-2 rounded-2xl font-poppins text-[25px]'>
          <li className='text-[#EA5514]'>홈</li>
          <li>티켓</li>
          <li>강연</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
