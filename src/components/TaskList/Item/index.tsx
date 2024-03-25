import style from '../TaskList.module.scss';

interface ItemProps {
  task: {
    id: number;
    title: string;
    duration: string;
  }
}

export default function Item({ task }: ItemProps) {
  return (
    <li key={task.id} className={style.item}>
      <h3>{task.title}</h3>
      <span>{task.duration}</span>
    </li>
  );
}