import useRemainTime from '../../hooks/useRemainTime';

export default function Ticket() {
  const { days, hours, minutes, seconds } = useRemainTime();
  const dday = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds },
  ];

  return (
    <div className='flex flex-col items-center' px-6>
      <span className='text-[Poppins] text-[40px] text-[#EA5514] font-bold py-4'>CARNIVAL START IN</span>
      {/* <span>Timer</span> */}
      <div className='flex gap-x-10 py-4'>
        {dday.map((time) => (
          <div key={time.label} className='flex flex-col'>
            <span className='text-[Poppins] text-[72px] font-bold'>{String(time.value).padStart(2, '0')}</span>
            <span className='text-[Roboto] text-[18px] text-center font-semibold'>{time.label}</span>
          </div>
        ))}
      </div>

      <button className='w-[150px] h-[51px] text-[Pretendard] bg-[#EA5514] text-black'>티켓 구매</button>
    </div>
  );
}
