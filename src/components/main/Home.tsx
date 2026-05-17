export default function Home({ ref }: { ref: React.Ref<HTMLElement> }) {
  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh w-full flex-col items-center overflow-hidden"
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <img
          src="/png_layer/Cask_home.png"
          alt="홈 배경"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* 비네팅 효과 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
        radial-gradient(circle at top left, rgba(18,18,18,0.6) 0px, transparent 120px),
        radial-gradient(circle at top right, rgba(18,18,18,0.6) 0px, transparent 120px),
        radial-gradient(circle at bottom left, rgba(18,18,18,0.6) 0px, transparent 120px),
        radial-gradient(circle at bottom right, rgba(18,18,18,0.6) 0px, transparent 120px),
        linear-gradient(to right, rgba(18,18,18,0.6) 0px, transparent 120px, transparent calc(100% - 42px), rgba(18,18,18,0.6) 100%),
        linear-gradient(to bottom, rgba(18,18,18,0.6) 0px, transparent 120px, transparent calc(100% - 42px), rgba(18,18,18,0.6) 100%)
      `,
        }}
      />

      {/* 메인 컨텐츠 */}

      <img
        src="/png_layer/CaskCarnival_Logo.png"
        alt="카니발 로고"
        className="mt-30 h-36 w-30 opacity-100 xl:mt-40 xl:h-72 xl:w-60"
      />
      <div className="justify-center">
        <p className="font-poppins py-8 text-center text-3xl font-bold text-[#EA5514] xl:text-5xl">
          CASK CARNIVAL IS COMING!
        </p>
        <p className="font-pretendard py-2 text-center text-3xl leading-[53.47px] font-semibold">
          2025.11.01(토) - 02(일) <br /> JBK 컨벤션홀
        </p>
        <p className="font-pretendard py-2 text-center text-2xl leading-[53.47px] font-semibold text-gray-400">
          서울특별시 강남구 봉은사로 619, B1층
        </p>
        <br />
        <div className="font-pretendard flex justify-center gap-10 py-2 text-4xl leading-15 font-semibold">
          <p className="px-4">
            1부 / 3부 <br /> 2부 / 4부
          </p>
          <p className="text-right">
            10AM ~ 2PM <br /> 3PM ~ 7PM
          </p>
        </div>
      </div>
    </section>
  );
}
