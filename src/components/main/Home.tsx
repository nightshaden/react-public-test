export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <div className="absolute inset-0 -z-10 mx-10 aspect-[16/9] bg-[url(/png_layer/Cask_home.png)] bg-cover bg-center bg-no-repeat"></div>
      {/* <img src='/png_layer/CaskCarnival_Logo.png' alt='카니발 로고' className='w-1/5 opacity-100' /> */}
      <img
        src="/png_layer/CaskCarnival_Logo.png"
        alt="카니발 로고"
        className="mt-30 h-72 w-60 opacity-100"
      />
      <p className="font-poppins py-6 text-center text-5xl font-bold text-[#EA5514]">
        CASK CARNIVAL IS COMING!
      </p>
      <p className="font-pretentard text-center text-3xl font-semibold">
        2025.11.01(토) - 02(일) <br /> JBK 컨벤션홀
      </p>
      <p className="font-pretentard text-center text-2xl font-semibold text-gray-400">
        서울특별시 강남구 봉은사로 619, B1층
      </p>
      <br />
      <div className="font-pretentard flex py-4 text-right text-4xl font-semibold">
        <p className="px-4">
          1부 / 3부 <br /> 2부 / 4부
        </p>
        <p className="text-right">
          10AM ~ 2PM <br /> 3PM ~ 7PM
        </p>
      </div>
    </div>
  );
}
