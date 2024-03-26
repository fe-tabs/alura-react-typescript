import { ITask } from '../../../types/task';
import style from '../TaskList.module.scss';

interface ItemProps extends ITask{
  selectTask: (task: ITask) => void;
}

export default function Item({ 
  id,
  title,
  duration,
  selected,
  completed,
  selectTask
 }: ItemProps) {
  return (
    <li 
      className={`
        ${style.item} 
        ${selected ? style.itemSelected : ''} 
        ${completed ? style.itemCompleted : ''}
      `} 
      onClick={() => !completed && selectTask({
      id,
      title,
      duration,
      selected,
      completed,
    })}>
      <h3>{title}</h3>
      <span>{duration}</span>
      {completed && <span className={style.completed} aria-label='Tarefa Completa'></span>}
    </li>
  );
}