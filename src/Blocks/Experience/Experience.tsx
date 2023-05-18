import { FC } from "react";

import styles from "./experience.module.scss";

type Props = {
  title: string;
  text: string;
};

export const Experience: FC<Partial<Props>> = ({ title, text }) => {
  return (
    <div className={styles.experience}>
      <h2>{title || "Experience Cannes Lions with Ogury"}</h2>
      <h4>
        {" "}
        {text ||
          "From thought-provoking content, to refreshing cocktails and whimsical stand up comedy sets, we have designed an inspiring program to celebrate the return of Cannes Lions Festival of Creativity 2022."}
      </h4>
    </div>
  );
};
