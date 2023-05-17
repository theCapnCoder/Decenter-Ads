import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
  color: "primary";
  upper: boolean;
};

export const Button: FC<Partial<Props>> = ({ children, color, upper }) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: color === "primary",
        [styles.upper]: upper,
      })}
    >
      {children}
    </button>
  );
};
