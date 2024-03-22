import React from "react";
import Button from "../Button";

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="">Adicionar um novo Estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar?"
          />
        </div>

        <div>
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