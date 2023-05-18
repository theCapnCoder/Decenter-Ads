import React from "react";

import styles from "./explore.module.scss";
import Experience from "../Experience";

const content = {
  title: "Explore this year's Creative Themes",
  text: "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
};

export const Explore = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.smVisible}>
        <Experience />
      </div>
      <div className={styles.lgVisible}>
        <Experience title={content.title} text={content.text} />
      </div>
    </div>
  );
};
