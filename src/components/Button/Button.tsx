import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  variant?: "outlined" | "filled";
  type?: "button" | "submit";
  color?: string;
  onClick?: () => void;
}

const Button = ({
  variant = "filled",
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
