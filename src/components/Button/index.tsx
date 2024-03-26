import React, { ReactNode } from "react";
import style from'./Button.module.scss';

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode | undefined;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    const { type = "button" } = this.props;
    
    return (
      <button className={style.button} type={type}>
        {this.props.children}
      </button>
    );
  }
}
