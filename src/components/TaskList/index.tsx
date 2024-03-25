import style from './TaskList.module.scss';
import Item from "./Item";

export default function TaskList() {
  const tasks = [
    {
      title: 'React',
      duration: '01:30:00'
    },
    {
      title: 'TypeScript',
      duration: '01:00:00'
    }
  ]

  return (
    <aside className={style.toDoList}>
      <h2>Estudos do dia</h2>

      <ul>
        {
          tasks.map((item, index) => (
            <Item task={{
              id: index, 
              ...item
            }}/>
          ))
        }
      </ul>
    </aside>
  );
}