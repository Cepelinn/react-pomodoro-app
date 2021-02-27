import React, { useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ sessionLength }) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  const formatedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
  return(
  <div>
    <h2>Time Left</h2>
    <p>{formatedTimeLeft}</p>
  </div>);
}

export default TimeLeft;
