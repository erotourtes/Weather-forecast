import { useEffect, useState } from "react";

// todo: separate concerns
const Timer = ({
  start: startOrigStr,
  end: endOrigStr,
}: {
  start: string;
  end: string;
}) => {
  const startOrig = new Date(startOrigStr);
  const endOrig = new Date(endOrigStr);

  const now = new Date().getTime();
  const isNotStarted = now < startOrig.getTime();
  const isEnded = now > endOrig.getTime();

  let time;
  let state = "";
  if (isNotStarted) {
    time = startOrig.getTime() - now;
    state = "Starts in";
  } else if (isEnded) {
    time = 0;
    state = "Ended";
  } else {
    time = endOrig.getTime() - now;
  }

  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    const S = 1000;
    let isCleaned = false;
    const id = setTimeout(() => {
      setCountdown(countdown - S);
      if (countdown <= 0) {
        setCountdown(0);
        clearInterval(id);
        isCleaned = true;
      }
    }, S);

    return () => void isCleaned && clearTimeout(id);
  }, [countdown]);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((countdown / (1000 * 60)) % 60);
  const seconds = Math.floor((countdown / 1000) % 60);

  const times = [
    [days, "Days"],
    [hours, "Hours"],
    [minutes, "Minutes"],
    [seconds, "Seconds"],
  ];

  return (
    <div className="w-full flex center column">
      <p className="state">{state}</p>

      <div className="time-row flex w-full space-evenly">
        {times.map(([value, unit], index) => (
          <div key={index} className="flex center column">
            <p className="time">{value}</p>
            <p className="unit">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
