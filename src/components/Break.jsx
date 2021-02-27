import React from 'react';
import { useState } from 'react';
import moment from 'moment'

const Break = () => {
  const [breakLength, setBreakLength] = useState(300);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  }

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60);
  }

  const breakLengthInMintes = moment.duration(breakLength, 's').minutes();

  return (
    <div>
      <h2>This is Break component</h2>
      <div>
        <button onClick={decrementBreakLengthByOneMinute}>dec</button>
        <p id='breakLength'>{breakLengthInMintes}</p>
        <button onClick={incrementBreakLengthByOneMinute}>inc</button>
      </div>
    </div>
  );
}

export default Break;
