import useRemainTime from '../../hooks/useRemainTime';

export default function Ticket() {
  // 시간을 배열로 집어넣기
  const { days, hours, minutes, seconds } = useRemainTime();
  const dday = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds },
  ];

  return (
    <div className='flex flex-col items-center mt-30'>
      <span className='font-poppins text-4xl text-[#EA5514] font-bold py-4'>CARNIVAL START IN</span>
      {/* <span>Timer</span> */}
      <div className='flex gap-x-10 py-6'>
        {dday.map((time) => (
          <div key={time.label} className='flex flex-col'>
            <span className='font-poppins text-7xl font-bold text-center'>{String(time.value).padStart(2, '0')}</span>
            <span className='font-roboto text-2xl text-center font-semibold'>{time.label}</span>
          </div>
        ))}
      </div>

      <button className='w-37 h-13 font-pretentard bg-[#EA5514] text-black text-[20px] font-medium m-4'>
        <a href='https://smartstore.naver.com/whiskynavi '>티켓 구매</a>
      </button>
    </div>
  );
}
