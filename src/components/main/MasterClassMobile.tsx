import { useState } from "react";

export default function MasterClassMobile({
  ref,
}: {
  ref: React.Ref<HTMLElement>;
}) {
  type MasterClassItem = {
    id: number;
    name: string;
    nameClassName: string;
    company: string;
    companyClassName: string;
    imgSrc: string;
    imgClassName: string;
    classOptions: { day: string; time: string; room: string };
    classOptionsClassName: string;
    containerClassName: string;
  };

  const classes: MasterClassItem[] = [
    // Day 1
    {
      id: 1,
      name: "Hitomi Kato",
      nameClassName: "text-2xl leading-7 font-black",
      company: "사쿠라오 증류소",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Sakurao.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 1", time: "11:00 - 12:30", room: "ROOM A" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 2,
      name: "Mark Abram",
      nameClassName: "text-2xl leading-7 font-black",
      company: "하트 브라더스",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Hart_Brothers.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 1", time: "11:00 - 12:30", room: "ROOM B" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 3,
      name: "천 관 호",
      nameClassName: "text-2xl leading-7 font-black",
      company: "위스키내비",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Whiskynavi.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 1", time: "13:00 - 14:30", room: "ROOM A" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 4,
      name: "Jordan Edwards",
      nameClassName: "text-2xl leading-7 font-black",
      company: "캐스크 트레이드",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Cask_Trade.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 1", time: "13:00 - 14:30", room: "ROOM B" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 5,
      name: "테이스팅 세션",
      nameClassName: "text-2xl leading-7 font-black",
      company: "캠벨타운 로호호",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Campbelltoun_Loch.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 1", time: "16:00 - 17:30", room: "ROOM A" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 6,
      name: "오 수 민",
      nameClassName: "text-2xl leading-7 font-black",
      company: "화심주조",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Hwasim_Oh.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 1", time: "16:00 - 17:30", room: "ROOM B" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 7,
      name: "천 관 호",
      nameClassName: "text-2xl leading-7 font-black",
      company: "위스키내비",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Whiskynavi.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 1", time: "18:00 - 19:30", room: "ROOM A" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 8,
      name: "Kenny Macdonald",
      nameClassName: "text-2xl leading-7 font-black",
      company: "드램모어",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Dram_Mor.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 1", time: "18:00 - 19:30", room: "ROOM B" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },

    // Day 2
    {
      id: 9,
      name: "황 동 민",
      nameClassName: "text-2xl leading-7 font-black",
      company: "화심주조",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Hwasim_Hwang.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 2", time: "11:00 - 12:30", room: "ROOM A" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 10,
      name: "천 관 호",
      nameClassName: "text-2xl leading-7 font-black",
      company: "위스키내비",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Whiskynavi.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 2", time: "11:00 - 12:30", room: "ROOM B" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 11,
      name: "Odin Chou",
      nameClassName: "text-2xl leading-7 font-black",
      company: "더 위스키파인드",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_The_Whiskyfind.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 2", time: "13:00 - 14:30", room: "ROOM A" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 12,
      name: "Yu Takeishi",
      nameClassName: "text-2xl leading-7 font-black",
      company: "쿠주 증류소",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Kuju_Distillery.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 2", time: "13:00 - 14:30", room: "ROOM B" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 13,
      name: "Rex Weng",
      nameClassName: "text-2xl leading-7 font-black",
      company: "위스키에이지",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Whiskyage.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 2", time: "16:00 - 17:30", room: "ROOM A" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 14,
      name: "Hiroyuki Doda",
      nameClassName: "text-2xl leading-7 font-black",
      company: "카메다 증류소",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Kameda_Distillery.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 2", time: "16:00 - 17:30", room: "ROOM B" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 15,
      name: "테이스팅 세션",
      nameClassName: "text-2xl leading-7 font-black",
      company: "캠벨타운 로호",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_Campbelltoun_Loch.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 2", time: "18:00 - 19:30", room: "ROOM A" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
    {
      id: 16,
      name: "Vincent Flint-Hill",
      nameClassName: "text-2xl leading-7 font-black",
      company: "더 싱글캐스크",
      companyClassName: "text-xl leading-6 font-medium text-orange-600",
      imgSrc: "/png_layer/MC_The_Singlecask.png",
      imgClassName: "object-contain",
      classOptions: { day: "DAY 2", time: "18:00 - 19:30", room: "ROOM B" },
      classOptionsClassName:
        "py-2 text-center text-xl font-bold text-orange-600",
      containerClassName: "relative aspect-square h-80 w-64 flex-col",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = classes.length;

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <section ref={ref}>
      <div className="mt-40 py-4">
        <h1>마스터클래스 & 테이스팅</h1>
      </div>

      {/* 캐러셀 */}
      <div
        className="relative mx-auto w-80 overflow-hidden"
        style={{ height: "340px" }}
      >
        {classes.map((item, index) => {
          const offset = getOffset(index);
          if (Math.abs(offset) > 1) return null;

          const isCenter = offset === 0;

          return (
            <div
              key={item.id}
              className="absolute top-0 w-64 transition-all duration-400 ease-in-out"
              style={{
                left: "50%",
                transform: `translateX(calc(-50% + ${offset * 150}px)) scale(${isCenter ? 0.8 : 0.6})`,
                zIndex: isCenter ? 10 : 5,
                opacity: isCenter ? 1 : 0.65,
              }}
            >
              <div
                className={`absolute top-0 left-0 z-10 w-full ${item.classOptionsClassName}`}
              >
                <p>{item.classOptions.day}</p>
                <p>{item.classOptions.time}</p>
                <p>{item.classOptions.room}</p>
              </div>

              <div
                className={`overflow-hidden ${item.containerClassName} ${
                  isCenter ? "shadow-[0_8px_32px_rgba(0,0,0,0.8)]" : ""
                }`}
              >
                <div className="object-contain">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className={item.imgClassName}
                  />
                </div>
                <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                  <p className={item.nameClassName}>{item.name}</p>
                  <p className={item.companyClassName}>{item.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 버튼 */}
      <div className="flex justify-center gap-6">
        <button type="button" className="carousel-btn" onClick={goPrev}>
          ◀
        </button>
        <button type="button" className="carousel-btn" onClick={goNext}>
          ▶
        </button>
      </div>
    </section>
  );
}
