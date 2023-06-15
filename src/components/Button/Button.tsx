import { FC, ReactNode } from "react";
import classnames from "classnames";

import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
  classNames: string;
  color: "primary";
  onClick: () => void;
  size: "small" | "medium" | "large";
  upper: boolean;
};

export const Button: FC<Partial<Props>> = ({
  children,
  classNames,
  color,
  onClick,
  size,
  upper,
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, classNames, {
        [styles.primary]: color === "primary",
        [styles.upper]: upper,
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
    >
      {children}
    </button>
  );
};
