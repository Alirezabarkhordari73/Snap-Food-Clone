import React from "react";

import { useCountdown } from "../../Hooks/useCountDown";
import ShowCounter from "./ShowCounter";
import ExpiredNotice from "./ExpiredNotice";

const CountDownTimer = ({ targetDate, textColor }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        color={textColor}
      />
    );
  }
};

export default CountDownTimer;
