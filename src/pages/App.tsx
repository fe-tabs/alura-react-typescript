import React, { useState } from 'react';
import Form from '../components/Form';
import Timer from '../components/Timer';
import TaskList from '../components/TaskList';
import style from './App.module.scss';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <TaskList tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;
