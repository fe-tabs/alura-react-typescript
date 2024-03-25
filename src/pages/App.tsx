import React from 'react';
import Form from '../components/Form';
import Timer from '../components/Timer';
import TaskList from '../components/TaskList';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <TaskList />
      <Timer />
    </div>
  );
}

export default App;
