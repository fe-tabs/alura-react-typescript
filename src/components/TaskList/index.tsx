import style from './TaskList.module.scss';
import Item from "./Item";
import { ITask } from '../../types/task';

interface TaskListProps {
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}

export default function TaskList(props: TaskListProps) {
  return (
    <aside className={style.toDoList}>
      <h2>Estudos do dia</h2>

      <ul>
        {
          props.tasks.map((task, index) => (
            <Item
              key={task.id}
              {...task}
              selectTask={props.selectTask}
            />
          ))
        }
      </ul>
    </aside>
  );
}