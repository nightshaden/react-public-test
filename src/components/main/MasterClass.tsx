export default function MasterClass() {
  return (
    <div>
      <div className='mt-40 py-4'>
        <h1>마스터클래스 & 테이스팅 세션</h1>
        <h2>Master Class & Tasting Session</h2>
      </div>
      {/* 시간표 */}
      <div className='flex justify-center py-4 gap-10'>
        <div className='flex-col ' id='left'>
          <div className='text-center justify-start text-3xl font-bold leading-10'>11.01 (SAT)</div>
          <div className='flex gap-20' id='left_2row'>
            <div className='text-center justify-start text-3xl font-medium leading-10'>LOUNGE A</div>
            <div className='text-center justify-start text-3xl font-medium leading-10'>LOUNGE B</div>
          </div>
          <div className='flex gap-10 justify-start' id='left_3row'>
            <div className='relative aspect-square flex-col w-64 h-80' id='left_3row_1box'>
              <div className='object-contain'>
                <img src='/png_layer/MC_Sakurao.png' alt='' />
              </div>
              <div className='absolute bottom-0 w-full text-center bg-neutral-900/80'>
                <p className='text-2xl font-black leading-7'>Hitomi Kato</p>
                <p className='text-orange-600 text-xl font-medium leading-6'>사쿠라오 증류소</p>
              </div>
            </div>
            <div className='relative aspect-square flex-col w-64 h-80' id='left_3row_2box'>
              <div className='object-contain'>
                <img src='/png_layer/MC_Heart_Brothers.png' alt='' />
              </div>
              <div className='absolute bottom-0 w-full text-center bg-neutral-900/80'>
                <p className='text-2xl font-black leading-7'>Mark Abram</p>
                <p className='text-orange-600 text-xl font-medium leading-6'>하트 브라더스</p>
              </div>
            </div>
          </div>
        </div>
        <div id='center'>중앙</div>
        <div id='right'>오른쪽</div>
      </div>
      <hr />
      <div className='flex justify-center gap-20'>
        <div>LOUNGE A</div>
        <div>LOUNGE B</div>
      </div>
    </div>
  );
}
