import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

export default class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="">Adicionar um novo Estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar?"
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
            max="01:30:00"
            required
          />
        </div>

        <Button />
      </form>
    );
  }
}