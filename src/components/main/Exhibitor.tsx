export default function Exhibitor() {
  return (
    <div>
      {/* 항목 부분 */}
      <div className='font-pretentard flex flex-col items-center py-4 mt-20'>
        <h1>참여 업체</h1>
        <h2>LINE-UP</h2>
      </div>
      {/* 표그리기 */}
      <div className='flex gap-5 justify-center'>
        <div className='relative aspect-square flex-col'>
          <div className='flex object-contain items-center bg-black w-64 h-80'>
            <img src='/png_layer/Logo_KCS.png' alt='' className='mb-15' />
          </div>
          <div className='absolute bottom-0 w-full text-center items-center bg-neutral-900/80 text-orange-600 text-2xl font-bold font-poppins leading-8 py-4'>
            <a href='https://smartstore.naver.com/whiskynavi'>김창수위스키</a>
          </div>
        </div>
        <div className='flex relative aspect-square flex-col'>
          <div className='flex justify-center bg-white w-64 h-80'>
            <img src='/png_layer/Logo_Danong.png' alt='' className='object-contain w-[60%] h-[90%]' />
          </div>
          <div className='absolute bottom-0 w-full text-center items-center bg-neutral-900/80 text-orange-600 text-2xl font-bold font-poppins leading-8 py-4'>
            <a href='https://smartstore.naver.com/whiskynavi'>다농바이오</a>
          </div>
        </div>
        <div className=' flex relative aspect-square flex-col'>
          <div className='flex justify-center bg-white w-64 h-80'>
            <img src='/png_layer/Logo_Hwasim.png' alt='' className='object-contain h-[90%]' />
          </div>
          <div className='absolute bottom-0 w-full text-center items-center bg-neutral-900/80 text-orange-600 text-2xl font-bold font-poppins leading-8 py-4'>
            <a href='https://smartstore.naver.com/whiskynavi'>화심주조</a>
          </div>
        </div>
        <div className='flex relative aspect-square flex-col'>
          <div className='flex justify-center bg-black w-64 h-80'>
            <img src='/png_layer/Logo_Whiskynavi.png' alt='' className='object-contain h-[80%]' />
          </div>
          <div className='absolute bottom-0 w-full text-center items-center bg-neutral-900/80 text-orange-600 text-2xl font-bold font-poppins leading-8 py-4'>
            <a href='https://smartstore.naver.com/whiskynavi'>위스키내비</a>
          </div>
        </div>
        <div className='flex relative aspect-square flex-col'>
          <div className='flex justify-center bg-stone-600 w-64 h-80'>
            <img src='/png_layer/Logo_On.png' alt='' className='object-contain absolute top-0' />
          </div>
          <div className='absolute bottom-0 w-full text-center items-center bg-neutral-900/80 text-orange-600 text-2xl font-bold font-poppins leading-8 py-4'>
            <a href='https://smartstore.naver.com/whiskynavi'>온증류소</a>
          </div>
        </div>
      </div>
    </div>
  );
}
