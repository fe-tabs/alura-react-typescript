import React from "react";
import style from './TaskList.module.scss';

export default function TaskList() {
  const tasks = [
    {
      task: 'React',
      duration: '01:30:00'
    },
    {
      task: 'TypeScript',
      duration: '01:00:00'
    }
  ]

  return (
    <aside className={style.toDoList}>
      <h2>Estudos do dia</h2>

      <ul>
        {
          tasks.map((task, index) => (
            <li key={index} className={style.item}>
              <h3>{task.task}</h3>
              <span>{task.duration}</span>
            </li>
          ))
        }
      </ul>
    </aside>
  );
}