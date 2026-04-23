import useRemainTime from "../../hooks/useRemainTime";

export default function Ticket() {
  // 시간을 배열로 집어넣기
  const { days, hours, minutes, seconds } = useRemainTime();
  const dday = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: hours },
    { label: "MINUTES", value: minutes },
    { label: "SECONDS", value: seconds },
  ];

  return (
    <div className="mt-30 flex flex-col items-center">
      <span className="font-poppins py-4 text-4xl font-bold text-[#EA5514]">
        CARNIVAL START IN
      </span>
      {/* <span>Timer</span> */}
      <div className="flex gap-x-10 py-6">
        {dday.map((time) => (
          <div key={time.label} className="flex flex-col">
            <span className="font-poppins text-center text-7xl font-bold">
              {String(time.value).padStart(2, "0")}
            </span>
            <span className="font-roboto text-center text-2xl font-semibold">
              {time.label}
            </span>
          </div>
        ))}
      </div>

      <button className="font-pretentard m-4 h-13 w-37 bg-[#EA5514] text-[20px] font-medium text-black">
        <a href="https://smartstore.naver.com/whiskynavi ">티켓 구매</a>
      </button>
    </div>
  );
}
