import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function Form({ setTasks }: FormProps) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("00:00");
  
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(tasks => [
      ...tasks, 
      {
        id: uuidv4(),
        title,
        duration,
        selected: false,
        completed: false
      }
    ]);
    setTitle("");
    setDuration("00:00");
  }
  
  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="">Adicionar um novo Estudo</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="">Duração</label>
        <input
          type="time"
          name="duration"
          id="duration"
          step="1"
          min="00:00:00"
          max="04:00:00"
          value={duration}
          onChange={event => setDuration(event.target.value)}
          required
        />
      </div>

      <Button type="submit">
        Adicionar
      </Button>
    </form>
  );
}