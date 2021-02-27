import React from 'react';
import { useState } from 'react';
import moment from 'moment'

const Session = () => {
  const [SessionLength, setSessionLength] = useState(1500);

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = SessionLength - 60;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  }

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(SessionLength + 60);
  }

  const SessionLengthInMintes = moment.duration(SessionLength, 's').minutes();

  return (
    <div>
      <h2>This is Session component</h2>
      <div>
        <button onClick={decrementSessionLengthByOneMinute}>dec</button>
        <p id='SessionLength'>{SessionLengthInMintes}</p>
        <button onClick={incrementSessionLengthByOneMinute}>inc</button>
      </div>
    </div>
  );
}

export default Session;
