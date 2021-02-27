import React, { useState, useEffect } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ sessionLength }) => {
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const isStarted = intervalId !== null;

  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() =>{
        setTimeLeft(prevTimeLeft =>{
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          return prevTimeLeft;
        });
      }, 1000);
    setIntervalId(newIntervalId);
    }
  }

  const formatedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
  return(
  <div>
    <h2>Time Left</h2>
    <p>{formatedTimeLeft}</p>
    <button onClick={handleStartStopClick}>{isStarted ? 'Stop' : 'Start'}</button>
  </div>);
}

export default TimeLeft;
