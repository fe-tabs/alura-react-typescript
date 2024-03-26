import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss';
import { timetoSeconds } from "../../common/utils/time";

interface TimerProps {
  selected: ITask | undefined;
}

export default function Timer(props: TimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(props.selected?.duration) {
      setTime(timetoSeconds(props.selected.duration));
    }
  }, [props.selected]);

  function startTimer(time: number = 0) {
    setTimeout(() => {
      if(time > 0) {
        setTime(time - 1);
        return startTimer(time - 1);
      }
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>
        Escolha um card e inicie o cronômetro
      </p>

      <div className={style.clockWrapper}>
        <Clock time={time}/>
      </div>

      <Button onClick={() => startTimer(time)}>
        Iniciar
      </Button>
    </div>
  );
}