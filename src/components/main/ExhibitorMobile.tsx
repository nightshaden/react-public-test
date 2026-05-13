export default function ExhibitorMobile() {
  type ExhibitorItem = {
    id: number;
    name: string;
    href: string;
    logoSrc: string;
    bgClassName: string;
    imgClassName: string;
  };

  const exhibitors: ExhibitorItem[] = [
    {
      id: 1,
      name: "김창수위스키",
      href: "https://smartstore.naver.com/whiskynavi",
      logoSrc: "/png_layer/Logo_KCS.png",
      bgClassName: "bg-black",
      imgClassName: "mb-15",
    },
    {
      id: 2,
      name: "다농바이오",
      href: "https://smartstore.naver.com/whiskynavi",
      logoSrc: "/png_layer/Logo_Danong",
      bgClassName: "bg-white",
      imgClassName: "h-[90%] w-[60%] object-contain",
    },
  ];

  const total = exhibitors.length;

  return (
    <section>
      {/* 항목 부분 */}
      <div className="font-pretendard mt-20 flex flex-col items-center py-4">
        <h1>참여 업체</h1>
        <h2>LINE-UP</h2>
      </div>
      {/* 캐러셀 부분 */}
      <div></div>
    </section>
  );
}
