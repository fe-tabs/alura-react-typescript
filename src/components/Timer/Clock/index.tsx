import style from './Clock.module.scss';

export default function Clock() {
  return(
    <>
      <span className={style.clockDigit}>0</span>
      <span className={style.clockDigit}>0</span>
      <span className={style.clockSeparator}>:</span>
      <span className={style.clockDigit}>0</span>
      <span className={style.clockDigit}>0</span>
    </>
  );
}