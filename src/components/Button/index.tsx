import { ReactNode } from "react";
import style from'./Button.module.scss';

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode | undefined;
  onClick?: () => void;
}

export default function Button({ type = "button", onClick, children }: ButtonProps){    
  return (
    <button onClick={onClick} className={style.button} type={type}>
      {children}
    </button>
  );
}
