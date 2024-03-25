import React, { ReactNode } from "react";
import style from'./Button.module.scss';

interface ButtonProps {
  children: ReactNode | undefined;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button className={style.button}>
        {this.props.children}
      </button>
    );
  }
}
