import { useEffect, useState } from 'react';
import { formatTime } from '../Utils';

export function MoleTimer({ duration, handleFinished }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinished();
    }
  }, [timeLeft, handleFinished]);

  useEffect(() => {
    let remaining;
    remaining = setInterval(
      () => setTimeLeft((previous) => previous - 1000),
      1000
    );
    return () => {
      clearInterval(remaining);
    };
  }, []);

  return formatTime(timeLeft);
}
