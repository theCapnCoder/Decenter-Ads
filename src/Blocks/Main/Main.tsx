import React from "react";
import Button from "../../components/Button";
import logo from "../../assets/img/logo.png";
import vid from "../../assets/img/vid.png";

import styles from "./main.module.scss";
import { Modal } from "../../components/Modal/Modal";
import Form from "../Form";

export const Main = () => {
  const [modalActive, setModalActive] = React.useState(false);

  const toggleModal = () => {
    setModalActive((prev) => !prev);
  };

  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.divider}></div>

        <div>
          <div className={styles.vidWrapper}>
            <img src={vid} alt="videoweek" />
          </div>
        </div>
      </div>
      <h1 className={styles.smVisible}>
        Headline Headline Headline Headline Headline
      </h1>
      <h1 className={styles.lgVisible}>Headline Headline Headline Headline</h1>
      <h3 className={styles.smVisible}>
        Description Description Description Description Description Description
        Description Description Description Description Description Description
      </h3>
      <h3 className={styles.lgVisible}>
        Description Description Description Description Description Description
        Description Description Description Description Description Description
      </h3>
      <div className={styles.buttonWrapper}>
        <Button classNames={styles.smVisible} onClick={toggleModal}>
          Book your spot
        </Button>
        <Button classNames={styles.lgVisible} onClick={toggleModal}>
          Join us at Cannes
        </Button>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <Form />
      </Modal>
    </div>
  );
};
