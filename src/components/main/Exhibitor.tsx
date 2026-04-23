export default function Exhibitor() {
  return (
    <div>
      {/* 항목 부분 */}
      <div className="font-pretentard mt-20 flex flex-col items-center py-4">
        <h1>참여 업체</h1>
        <h2>LINE-UP</h2>
      </div>
      {/* 표그리기 */}
      <div className="flex justify-center gap-5">
        <div className="relative aspect-square flex-col">
          <div className="flex h-80 w-64 items-center bg-black object-contain">
            <img src="/png_layer/Logo_KCS.png" alt="" className="mb-15" />
          </div>
          <div className="font-poppins absolute bottom-0 w-full items-center bg-neutral-900/80 py-4 text-center text-2xl leading-8 font-bold text-orange-600">
            <a href="https://smartstore.naver.com/whiskynavi">김창수위스키</a>
          </div>
        </div>
        <div className="relative flex aspect-square flex-col">
          <div className="flex h-80 w-64 justify-center bg-white">
            <img
              src="/png_layer/Logo_Danong.png"
              alt=""
              className="h-[90%] w-[60%] object-contain"
            />
          </div>
          <div className="font-poppins absolute bottom-0 w-full items-center bg-neutral-900/80 py-4 text-center text-2xl leading-8 font-bold text-orange-600">
            <a href="https://smartstore.naver.com/whiskynavi">다농바이오</a>
          </div>
        </div>
        <div className="relative flex aspect-square flex-col">
          <div className="flex h-80 w-64 justify-center bg-white">
            <img
              src="/png_layer/Logo_Hwasim.png"
              alt=""
              className="h-[90%] object-contain"
            />
          </div>
          <div className="font-poppins absolute bottom-0 w-full items-center bg-neutral-900/80 py-4 text-center text-2xl leading-8 font-bold text-orange-600">
            <a href="https://smartstore.naver.com/whiskynavi">화심주조</a>
          </div>
        </div>
        <div className="relative flex aspect-square flex-col">
          <div className="flex h-80 w-64 justify-center bg-black">
            <img
              src="/png_layer/Logo_Whiskynavi.png"
              alt=""
              className="h-[80%] object-contain"
            />
          </div>
          <div className="font-poppins absolute bottom-0 w-full items-center bg-neutral-900/80 py-4 text-center text-2xl leading-8 font-bold text-orange-600">
            <a href="https://smartstore.naver.com/whiskynavi">위스키내비</a>
          </div>
        </div>
        <div className="relative flex aspect-square flex-col">
          <div className="flex h-80 w-64 justify-center bg-stone-600">
            <img
              src="/png_layer/Logo_On.png"
              alt=""
              className="absolute top-0 object-contain"
            />
          </div>
          <div className="font-poppins absolute bottom-0 w-full items-center bg-neutral-900/80 py-4 text-center text-2xl leading-8 font-bold text-orange-600">
            <a href="https://smartstore.naver.com/whiskynavi">온증류소</a>
          </div>
        </div>
      </div>
    </div>
  );
}
