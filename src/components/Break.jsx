import React from 'react';
import moment from 'moment'

const Break = ({ 
  breakLength, 
  decrementBreakLengthByOneMinute, 
  incrementBreakLengthByOneMinute}) => {
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
