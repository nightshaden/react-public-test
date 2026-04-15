export default function Footer() {
  return (
    <footer>
      <div className='w-full flex justify-between'>
        {/* 상단부분 */}
        <div className='flex flex-col text-[Roboto]'>
          <h2 className='flex py-2 px-8 text-[35px]'>Contact</h2>
          <div className='flex flex-row py-2 px-2'>
            <div className='flex flex-col py-4 px-6 gap-2 text-[20px]'>
              <span>Intagram</span>
              <span className='text-[#EA5514]'>@caskcarnival</span>
            </div>
            <div className='flex flex-col py-4 px-10 gap-2 text-[20px]'>
              <span>Email</span>
              <span className='text-[#EA5514]'>lsy9785@whiskynavi.com</span>
            </div>
          </div>
        </div>
        <div className='flex items-end'>
          <span className='flex text-center font-[Black_Han_Sans] text-[35px] leading-[134%] text-[#EA5514] py-4 px-2'>
            CASK <br></br>CARNIVAL
          </span>
          <img src='/png/cask_carnival_logo.png' alt='Cask Carnival Logo' className='w-[134px] py-6' />
        </div>
      </div>
      <div className='h-[51px] items-center py-4 px-2 flex justify-between bg-[#EA5514] text-white text-[Roboto] text-[14px]'>
        {/* 하단 부분 */}
        <span>Copyright &copy; 2025 &middot; Whiskynavi</span>
        <span>Terms & Conditions for Event &middot; Privacy Policy &middot; Terms of Use</span>
      </div>
    </footer>
  );
}
