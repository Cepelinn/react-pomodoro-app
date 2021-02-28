import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ timeLeft, handleStartStopClick, sessionStartStopLabel }) => {
  console.log(sessionStartStopLabel);

  const formatedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
  return(
  <div>
    <h2>Time Left</h2>
    <p>{formatedTimeLeft}</p>
    <button onClick={handleStartStopClick}>{sessionStartStopLabel}</button>
  </div>);
}

export default TimeLeft;
