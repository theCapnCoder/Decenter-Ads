import { FC } from "react";
import classNames from "classnames";
import styles from "./modal.module.scss";

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
};

export const Modal: FC<Props> = ({ active, setActive, children }) => {
  return (
    <div
      className={classNames(styles.modal, { [styles.active]: active })}
      onClick={() => setActive(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
