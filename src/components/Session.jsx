import React from 'react';
import moment from 'moment'

const Session = ({
 sessionLength,
  incrementSessionLengthByOneMinute,
  decrementSessionLengthByOneMinute
}) => {
  const sessionLengthInMintes = moment.duration(sessionLength, 's').minutes();

  return (
    <div className="container">
      <h2 className="title">Session</h2>
      <div className="main-block">
        <button className="btn decBtn" onClick={decrementSessionLengthByOneMinute}>dec</button>
        <p id='SessionLength'>{sessionLengthInMintes}</p>
        <button className="btn incBtn" onClick={incrementSessionLengthByOneMinute}>inc</button>
      </div>
    </div>
  );
}

export default Session;
