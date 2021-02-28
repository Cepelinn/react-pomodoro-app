import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({
  timeLeft,
  handleStartStopClick,
  sessionStartStopLabel,
  handleResetButtonClick
}) => {

  const formatedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
  return (
    <div className="container container-main">
      <h2 className="title">Time Left</h2>
      <div className="main-block">
        <p>{formatedTimeLeft}</p>
        <button className="btn stdBtn" onClick={handleStartStopClick}>{sessionStartStopLabel}</button>
        <button className="btn stdBtn" onClick={handleResetButtonClick}>Reset</button>
      </div>
    </div>);
}

export default TimeLeft;
