import { PropsWithChildren } from "react";
import styles from "./Dialog.module.css";
import classNames from "classnames";

interface DialogProps extends PropsWithChildren {
  isOpen: boolean;
}

const Dialog = ({ children, isOpen }: DialogProps) => {
  return (
    <div
      className={classNames(styles.dialog, {
        [styles.open]: isOpen,
        [styles.close]: !isOpen,
      })}
    >
      {children}
    </div>
  );
};

export default Dialog;
