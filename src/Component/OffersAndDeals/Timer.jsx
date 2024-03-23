import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Min: Math.floor((difference / 1000 / 60) % 60),
        Sec: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className='timeSpan'>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div className="timer">
      <div className="timerText">
        <h4>Deals and Offer</h4>
        <p>Hygiene equipments</p>
      </div>
      <div className="timer-container">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>

    </div>
  );
};

export default Timer;
