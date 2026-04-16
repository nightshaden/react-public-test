export default function Home() {
  return (
    <div className='relative w-full h-full flex flex-col items-center'>
      <div className='absolute inset-0 bg-[url(/png/cask_home.png)] opacity-30 -z-10'></div>
      <img src='/png/cask_carnival_logo.png' alt='카니발 로고' className='w-1/3 opacity-100' />
      <span className='text-[Poppins] font-bold text-[50px] text-[#EA5514] text-center py-6'>
        CASK CARNIVAL IS COMING!
      </span>
      <span className='text-[Pretendard] font-semibold text-center text-[30px]'>
        2025.11.01(토) - 02(일) <br /> JBK 컨벤션홀
      </span>
      <span className='text-[Pretendard] font-semibold text-center text-[20px] text-gray-400'>
        서울특별시 강남구 봉은사로 619, B1층
      </span>
      <br />
      <div className='flex text-[Pretendard] font-semibold text-[35px] text-right py-4'>
        <span className='px-4'>
          1부 / 3부 <br /> 2부 / 4부
        </span>
        <span className='text-right'>
          10AM ~ 2PM <br /> 3PM ~ 7PM
        </span>
      </div>
    </div>
  );
}
