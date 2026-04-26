export default function Floorplan() {
  return (
    <div className="mt-20 flex max-w-480 flex-col">
      <h1>부스배치도</h1>
      <h2>FLOOR PLAN</h2>
      <img
        src="/png_layer/floorplan.png"
        alt=""
        className="items-center justify-center px-20 py-10"
      />
      <div className="font-roboto mt-10 grid grid-cols-5 justify-center gap-10 px-30 py-10 text-xl leading-8 font-bold text-nowrap">
        <div>1. 위스키내비</div>
        <div>2. 더 위스키테일즈</div>
        <div>3. 위스키 에이지</div>
        <div>4. 위스키파인드</div>
        <div>5. 위스키머시기</div>
        <div>6. 위스키머시기</div>
        <div>7. 위스키머시기</div>
        <div>8. 위스키머시기</div>
        <div>9. 위스키머시기</div>
        <div>10. 위스키머시기</div>
        <div>11. 위스키머시기</div>
        <div>12. 위스키머시기</div>
        <div>13. 위스키머시기</div>
        <div>14. 위스키머시기</div>
        <div>15. 위스키머시기</div>
        <div>16. 위스키머시기</div>
        <div>17. 위스키머시기</div>
        <div>18. 위스키머시기</div>
        <div>19. 위스키머시기</div>
        <div>20. 위스키머시기</div>
        <div>21. 위스키머시기</div>
        <div>22. 위스키머시기</div>
        <div>23. 위스키머시기</div>
        <div>ⓘ Information</div>
      </div>
      <div className="flex justify-center">
        <button className="mt-10 flex h-12 w-64 items-center-safe justify-center-safe bg-white">
          <div className="text-center text-2xl font-medium text-neutral-900">
            Floor Plan 다운로드
          </div>
        </button>
      </div>
    </div>
  );
}
