import { useState } from "react";

export default function ExhibitorMobile() {
  type ExhibitorItem = {
    id: number; // 식별용 아이디
    name: string; // 이름
    href: string; // 링크
    logoSrc: string; // 불러올 이미지
    bgClassName: string; // 칸 내부 백그라운드 옵션
    containerClassName: string; // 칸 외부 옵션
    imgClassName: string; // 이미지 세부 css
  };

  // 캐러셀로 묶을거라서 아예 map으로 돌리는게 나을듯?
  const exhibitors: ExhibitorItem[] = [
    {
      id: 1,
      name: "김창수위스키",
      href: "https://smartstore.naver.com/whiskynavi",
      logoSrc: "/png_layer/Logo_KCS.png",
      bgClassName: "bg-black",
      containerClassName: "flex items-center object-contain",
      imgClassName: "mb-15",
    },
    {
      id: 2,
      name: "다농바이오",
      href: "https://smartstore.naver.com/whiskynavi",
      logoSrc: "/png_layer/Logo_Danong.png",
      bgClassName: "bg-white",
      containerClassName: "flex justify-center ml-2",
      imgClassName: "h-[90%] w-[60%] object-contain",
    },
    {
      id: 3,
      name: "화심주조",
      href: "https://smartstore.naver.com/whiskynavi",
      logoSrc: "/png_layer/Logo_Hwasim.png",
      bgClassName: "bg-white",
      containerClassName: "flex justify-center",
      imgClassName: "h-[90%] object-contain",
    },
    {
      id: 4,
      name: "위스키내비",
      href: "https://smartstore.naver.com/whiskynavi",
      logoSrc: "/png_layer/Logo_Whiskynavi.png",
      bgClassName: "bg-black",
      containerClassName: "flex justify-center",
      imgClassName: "h-[80%] object-contain",
    },
    {
      id: 5,
      name: "온증류소",
      href: "https://smartstore.naver.com/whiskynavi",
      logoSrc: "/png_layer/Logo_On.png",
      bgClassName: "bg-stone-600",
      containerClassName: "flex justify-center",
      imgClassName: "absolute top-0 object-contain",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = exhibitors.length;

  // 이전과 다음 Index 계산
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <section>
      {/* 항목 부분 */}
      <div className="font-pretendard mt-20 flex flex-col items-center py-4">
        <h1>참여 업체</h1>
      </div>
      {/* 캐러셀 부분 */}
      <div
        className="relative mx-auto w-80 overflow-hidden"
        style={{ height: "340px" }}
      >
        {exhibitors.map((item, index) => {
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
                className={`relative h-80 w-64 overflow-hidden ${item.bgClassName} ${item.containerClassName}${isCenter ? "shadow-[0_8px_32px_rgba(0,0,0,0.8)]" : ""}`}
              >
                <img
                  src={item.logoSrc}
                  alt={item.name}
                  className={item.imgClassName}
                />
                <div className="font-poppins absolute bottom-0 w-full bg-neutral-900/80 py-4 text-center text-2xl leading-8 font-bold text-orange-600">
                  {item.name}
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
