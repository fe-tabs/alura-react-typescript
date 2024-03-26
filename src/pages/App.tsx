import React, { useState } from 'react';
import Form from '../components/Form';
import Timer from '../components/Timer';
import TaskList from '../components/TaskList';
import style from './App.module.scss';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(tasks => tasks.map((task) => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function completeTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(tasks => tasks.map(task => {
        if(selected.id === task.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }

        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <TaskList 
        tasks={tasks}
        selectTask={selectTask}
      />
      <Timer 
        selected={selected}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
