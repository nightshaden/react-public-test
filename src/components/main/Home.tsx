export default function Home() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <img
          src="/png_layer/Cask_home.png"
          alt="홈 배경"
          className="h-full w-full object-cover object-center px-4"
        />
      </div>
      <img
        src="/png_layer/CaskCarnival_Logo.png"
        alt="카니발 로고"
        className="mt-40 h-72 w-60 opacity-100"
      />
      <p className="font-poppins py-8 text-center text-5xl font-bold text-[#EA5514]">
        CASK CARNIVAL IS COMING!
      </p>
      <p className="font-pretentard py-2 text-center text-3xl leading-[53.47px] font-semibold">
        2025.11.01(토) - 02(일) <br /> JBK 컨벤션홀
      </p>
      <p className="font-pretentard py-2 text-center text-2xl leading-[53.47px] font-semibold text-gray-400">
        서울특별시 강남구 봉은사로 619, B1층
      </p>
      <br />
      <div className="font-pretentard flex gap-10 py-2 text-right text-4xl leading-15 font-semibold">
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
