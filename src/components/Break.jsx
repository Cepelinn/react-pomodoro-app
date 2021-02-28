import React from 'react';
import moment from 'moment'

const Break = ({ 
  breakLength, 
  decrementBreakLengthByOneMinute, 
  incrementBreakLengthByOneMinute}) => {
  const breakLengthInMintes = moment.duration(breakLength, 's').minutes();

  return (
    <div className="container">
      <h2 className="title">Break</h2>
      <div className="main-block">
        <button className="btn decBtn"onClick={decrementBreakLengthByOneMinute}>dec</button>
        <p id='breakLength'>{breakLengthInMintes}</p>
        <button className="btn incBtn"onClick={incrementBreakLengthByOneMinute}>inc</button>
      </div>
    </div>
  );
}

export default Break;
