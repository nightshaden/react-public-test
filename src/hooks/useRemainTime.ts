import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
dayjs.extend(duration);

// 남은 시간 타이머
export default function useRemainTime() {
  const targetTime = "2026-06-30 00:00:00";
  const [remainTime, setRemainTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = dayjs(targetTime);
      const now = dayjs();
      const duration = targetDate.diff(now);

      if (duration < 0) {
        clearInterval(timer);
        setRemainTime(0);
      } else {
        setRemainTime(duration);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const remains = dayjs.duration(remainTime);

  return {
    days: Math.floor(remains.asDays()),
    hours: remains.hours(),
    minutes: remains.minutes(),
    seconds: remains.seconds(),
  };
}
