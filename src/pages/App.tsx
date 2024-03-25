import React from 'react';
import Form from '../components/Form';
import TaskList from '../components/TaskList';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <TaskList />
    </div>
  );
}

export default App;
