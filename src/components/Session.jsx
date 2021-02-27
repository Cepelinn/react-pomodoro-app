import React from 'react';
import moment from 'moment'

const Session = ({
 sessionLength,
  incrementSessionLengthByOneMinute,
  decrementSessionLengthByOneMinute
}) => {
  const sessionLengthInMintes = moment.duration(sessionLength, 's').minutes();

  return (
    <div>
      <h2>This is Session component</h2>
      <div>
        <button onClick={decrementSessionLengthByOneMinute}>dec</button>
        <p id='SessionLength'>{sessionLengthInMintes}</p>
        <button onClick={incrementSessionLengthByOneMinute}>inc</button>
      </div>
    </div>
  );
}

export default Session;
