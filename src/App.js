import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import {useState, useEffect} from 'react';

function App() {
  const [sessionLength, setSessionLength] = useState(1500);
  const [breakLength, setBreakLength] = useState(300);
  const [currentSessionType, setCurrentSessionType] = useState("Session");
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
          if (currentSessionType === "Session") {
            setCurrentSessionType("Break");
            setTimeLeft(breakLength);
          } else if ( currentSessionType === "Break") {
            setCurrentSessionType("Session");
            setTimeLeft(sessionLength);
          } 
        });
      }, 1000);
    setIntervalId(newIntervalId);
    }
  }


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

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  }

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60);
  }

  const handleResetButtonClick = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSessionLength(1500);
    setBreakLength(300);
    setTimeLeft(1500);
  }

  return (
    <div className="App">
      <Break 
        breakLength = {breakLength}
        decrementBreakLengthByOneMinute = {decrementBreakLengthByOneMinute}
        incrementBreakLengthByOneMinute = {incrementBreakLengthByOneMinute}
      />
      <TimeLeft 
        timeLeft={timeLeft}
        handleStartStopClick={handleStartStopClick}
        sessionStartStopLabel={isStarted ? 'Stop' : 'Start'}
      />
      <Session
        sessionLength = {sessionLength}
        decrementSessionLengthByOneMinute = {decrementSessionLengthByOneMinute}
        incrementSessionLengthByOneMinute = {incrementSessionLengthByOneMinute}
      />
      <button onClick={handleResetButtonClick}>Reset</button>
    </div>
  );
}

export default App;
