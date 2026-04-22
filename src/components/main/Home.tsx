export default function Home() {
  return (
    <div className='relative w-full h-full flex flex-col items-center'>
      <div className='absolute inset-0 aspect-[16/9] bg-[url(/png_layer/Cask_home.png)] bg-cover bg-no-repeat bg-center -z-10 mx-10'></div>
      {/* <img src='/png_layer/CaskCarnival_Logo.png' alt='카니발 로고' className='w-1/5 opacity-100' /> */}
      <img src='/png_layer/CaskCarnival_Logo.png' alt='카니발 로고' className='w-60 h-72 opacity-100 mt-30' />
      <p className='font-poppins font-bold text-5xl text-[#EA5514] text-center py-6'>CASK CARNIVAL IS COMING!</p>
      <p className='font-pretentard font-semibold text-center text-3xl'>
        2025.11.01(토) - 02(일) <br /> JBK 컨벤션홀
      </p>
      <p className='font-pretentard font-semibold text-center text-2xl text-gray-400'>
        서울특별시 강남구 봉은사로 619, B1층
      </p>
      <br />
      <div className='flex font-pretentard font-semibold text-4xl text-right py-4'>
        <p className='px-4'>
          1부 / 3부 <br /> 2부 / 4부
        </p>
        <p className='text-right'>
          10AM ~ 2PM <br /> 3PM ~ 7PM
        </p>
      </div>
    </div>
  );
}
