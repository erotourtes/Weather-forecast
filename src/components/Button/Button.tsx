import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  type?: "outlined" | "filled";
  color?: string;
  onClick?: () => void;
}

const Button = ({ type = "filled", children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles[type]}`}>
      {children}
    </button>
  );
};

export default Button;
