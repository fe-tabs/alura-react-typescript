import style from './Clock.module.scss';

interface ClockProps {
  time: number | undefined;
}

export default function Clock({ time = 0 }: ClockProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTens, minutesUnits] = String(minutes).padStart(2, "0");
  const [secondsTens, secondsUnits] = String(seconds).padStart(2, "0");

  return(
    <>
      <span className={style.clockDigit}>{minutesTens}</span>
      <span className={style.clockDigit}>{minutesUnits}</span>
      <span className={style.clockSeparator}>:</span>
      <span className={style.clockDigit}>{secondsTens}</span>
      <span className={style.clockDigit}>{secondsUnits}</span>
    </>
  );
}