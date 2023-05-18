import { FC, ReactNode } from "react";
import classnames from "classnames";

import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
  classNames: string;
  color: "primary";
  upper: boolean;
};

export const Button: FC<Partial<Props>> = ({ children, classNames, color, upper }) => {
  return (
    <button
      className={classnames(styles.button, classNames, {
        [styles.primary]: color === "primary",
        [styles.upper]: upper,
      })}
    >
      {children}
    </button>
  );
};
