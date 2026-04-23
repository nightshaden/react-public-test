export default function MasterClass() {
  return (
    <div>
      <div className="mt-40 py-4">
        <h1>마스터클래스 & 테이스팅 세션</h1>
        <h2>Master Class & Tasting Session</h2>
      </div>
      {/* 시간표 */}
      <div className="flex justify-center gap-10 py-4">
        <div className="flex-col" id="left">
          <div className="justify-start py-5 text-center text-3xl leading-10 font-bold">
            11.01 (SAT)
          </div>
          <div className="flex justify-around gap-20 py-5" id="left_2row">
            <div className="justify-start text-center text-3xl leading-10 font-medium">
              LOUNGE A
            </div>
            <div className="justify-start text-center text-3xl leading-10 font-medium">
              LOUNGE B
            </div>
          </div>
          <div className="flex justify-start gap-10 py-5" id="left_3row">
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="left_3row_1box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Sakurao.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">Hitomi Kato</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  사쿠라오 증류소
                </p>
              </div>
            </div>
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="left_3row_2box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Heart_Brothers.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">Mark Abram</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  하트 브라더스
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-10 py-5" id="left_4row">
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="left_4row_1box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Whiskynavi.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">천 관 호</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  위스키내비
                </p>
              </div>
            </div>
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="left_4row_2box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Cask_Trade.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">Jordan Edwards</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  캐스크 트레이드
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-10 py-5" id="left_5row">
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="left_5row_1box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Campbelltoun_Loch.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">테이스팅 세션</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  캠벨타운 로호
                </p>
              </div>
            </div>
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="left_5row_2box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Hwasim_Oh.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">오 수 민</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  화심주조
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-10 py-5" id="left_6row">
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="left_6row_1box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Whiskynavi.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">천 관 호</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  위스키내비
                </p>
              </div>
            </div>
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="left_6row_2box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Dram_Mor.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">Kenny Macdonald</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  드램모어
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-40 flex-col py-40 text-center text-3xl leading-10 font-medium"
          id="center"
        >
          <div className="py-40">10:30</div>
          <div className="py-40">12:30</div>
          <div className="py-40">15:30</div>
          <div className="py-40">17:30</div>
        </div>

        <div className="flex-col" id="right">
          <div className="justify-start py-5 text-center text-3xl leading-10 font-bold">
            11.02 (SUN)
          </div>
          <div className="flex justify-around gap-20 py-5" id="right_2row">
            <div className="justify-start text-center text-3xl leading-10 font-medium">
              LOUNGE A
            </div>
            <div className="justify-start text-center text-3xl leading-10 font-medium">
              LOUNGE B
            </div>
          </div>
          <div className="flex justify-start gap-10 py-5" id="right_3row">
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="right_3row_1box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Hwasim_Hwang.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">황 동 민</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  화심주조
                </p>
              </div>
            </div>
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="right_3row_2box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Whiskynavi.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">천 관 호</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  위스키내비
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-10 py-5" id="right_4row">
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="right_4row_1box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_The_Whiskyfind.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">Odin Chou</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  더 위스키파인드
                </p>
              </div>
            </div>
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="right_4row_2box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Kuju_Distillery.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">Yu Takeishi</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  쿠주 증류소
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-10 py-5" id="right_5row">
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="right_5row_1box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Whiskyage.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">Rex Weng</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  위스키에이지
                </p>
              </div>
            </div>
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="right_5row_2box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Kameda_Distillery.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">Hiroyuki Doda</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  카메다 증류소
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-10 py-5" id="right_6row">
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="right_6row_1box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_Campbelltoun_Loch.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">테이스팅 세션</p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  캠벨타운 로호
                </p>
              </div>
            </div>
            <div
              className="relative aspect-square h-80 w-64 flex-col"
              id="right_6row_2box"
            >
              <div className="object-contain">
                <img src="/png_layer/MC_The_Singlecask.png" alt="" />
              </div>
              <div className="absolute bottom-0 w-full bg-neutral-900/80 py-2 text-center">
                <p className="text-2xl leading-7 font-black">
                  Vincent Flint-Hill
                </p>
                <p className="text-xl leading-6 font-medium text-orange-600">
                  더 싱글캐스크
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <hr className="w-[90%] text-orange-600" />
      </div>

      <div className="flex justify-center gap-50 py-10" id="lounge">
        <div className="flex-col items-center text-center">
          <div className="py-5 text-3xl leading-10 font-bold">LOUNGE A</div>
          <img src="/png_layer/lounge_a.png" alt="" className="py-5" />
          <div className="text-2xl leading-8 font-medium">
            서울특별시 강남구 영동대로112길 38,
            <br /> NCS빌딩 1층 카페촉
          </div>
        </div>
        <div className="flex-col items-center text-center">
          <div className="py-5 text-3xl leading-10 font-bold">LOUNGE B</div>
          <img src="/png_layer/lounge_b.png" alt="" className="py-5" />
          <div className="text-2xl leading-8 font-medium">
            서울특별시 강남구 봉은사로112길 12,
            <br /> 1층 iL coffee
          </div>
        </div>
      </div>
    </div>
  );
}
