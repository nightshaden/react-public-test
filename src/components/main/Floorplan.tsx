export default function Floorplan() {
  return (
    <div className='flex flex-col mt-20'>
      <h1>부스배치도</h1>
      <h2>FLOOR PLAN</h2>
      <img src='/png_layer/floorplan.png' alt='' className='items-center justify-center py-10 px-20' />
      <div className='grid justify-center text-nowrap gap-15 px-30 py-10 mt-10 grid-cols-5 text-2xl font-roboto font-bold leading-8'>
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
      <div className='flex justify-center'>
        <button className='flex mt-10 justify-center-safe items-center-safe w-64 h-12 bg-white'>
          <div className='text-neutral-900 text-2xl font-medium text-center'>Floor Plan 다운로드</div>
        </button>
      </div>
    </div>
  );
}
