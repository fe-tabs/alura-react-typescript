import React from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default class Form extends React.Component<FormProps> {
  state = {
    title: "",
    duration: "00:00" 
  };
  
  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks(tasks => [
      ...tasks, 
      {
        id: uuidv4(),
        ...this.state,
        selected: false,
        completed: false
      }
    ]);
    this.setState({
      title: "",
      duration: "00:00"
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="">Adicionar um novo Estudo</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={event => this.setState({
              ...this.state,
              title: event.target.value
            })}
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
            value={this.state.duration}
            onChange={event => this.setState({
              ...this.state,
              duration: event.target.value
            })}
            required
          />
        </div>

        <Button type="submit">
          Adicionar
        </Button>
      </form>
    );
  }
}