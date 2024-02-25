import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./Dialog.module.css";
import classNames from "classnames";

interface DialogProps extends PropsWithChildren {
  isOpen: boolean;
}

const Dialog = ({ children, isOpen }: DialogProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleResize = () => {
      if (isOpen && ref.current) {
        const curScroll = window.scrollY;
        ref.current.style.top = `${curScroll}px`;
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      ref.current.style.top = `${window.scrollY}px`;
      window.addEventListener("resize", handleResize);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, ref]);

  return (
    <div
      ref={ref}
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
