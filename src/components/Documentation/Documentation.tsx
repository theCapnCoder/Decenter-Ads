import sm1 from "./img/sm1.jpg";
import sm2 from "./img/sm2.jpg";
import sm3 from "./img/sm3.jpg";
import sm4 from "./img/sm4.jpg";
import sm5 from "./img/sm5.jpg";
import sm6 from "./img/sm6.jpg";
import sm7 from "./img/sm7.jpg";
import sm8 from "./img/sm8.jpg";
import sm9 from "./img/sm9.jpg";

import form from "./img/form.jpg";

import lg1 from "./img/lg1.jpg";
import lg2 from "./img/lg2.jpg";
import lg3 from "./img/lg3.jpg";
import lg4 from "./img/lg4.jpg";
import lg5 from "./img/lg5.jpg";
import lg6 from "./img/lg6.jpg";
import lg7 from "./img/lg7.jpg";
import lg8 from "./img/lg8.jpg";

import styles from "./documentation.module.scss";

export const Documentation = () => {
  const link = "#";

  return (
    <div className={styles.doc}>
      <div className={styles.box_doc}>
        <a className={styles.button_popup_doc} href="#popup1_doc">
          Documantation
        </a>
      </div>

      <div id="popup1_doc" className={styles.overlay_doc}>
        <div className={styles.popup_doc}>
          <h2>Techologies: </h2>
          <h3>TypeScript, Formik, Yup, React, SCSS, HTML</h3>
          <h2>Responsive Layout: NO</h2>
          <h3>Adaptive Layout: 1366px, 390px </h3>
          <h3>Implementation: Custom Input, Custom Modal, Custom Button</h3>
          <h4>Libraries: "formik", "yup", "gh-pages", "classnames" </h4>

          <div className={styles.buttonWrapper}>
            <a
              href="https://github.com/theCapnCoder/Decenter-Ads"
              rel="noreferrer"
              target="_blank"
            >
              <button>Git Hub</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/file/DTS9UMvWfWpK8EeYJD6pRS/%5BPublished%5D%5BEN%5D-%C2%ABDecenter-Ads%C2%BB?type=design&node-id=0-1"
            >
              <button>Figma</button>
            </a>
          </div>

          <a className={styles.close_doc} href={link}>
            &times;
          </a>
          <div className={styles.content_doc}>
            <div className={styles.divider}></div>
            <img src={sm1} alt="sm" />
            <img src={sm2} alt="sm" />
            <img src={sm3} alt="sm" />
            <img src={sm4} alt="sm" />
            <img src={sm5} alt="sm" />
            <img src={sm6} alt="sm" />
            <img src={sm7} alt="sm" />
            <img src={sm8} alt="sm" />
            <img src={sm9} alt="sm" />
            <div className={styles.divider}></div>
            <img src={form} alt="form" />
            <div className={styles.divider}></div>
            <div className={styles.maxFull}>
              <img src={lg1} alt="lg" />
              <img src={lg2} alt="lg" />
              <img src={lg3} alt="lg" />
              <img src={lg4} alt="lg" />
              <img src={lg5} alt="lg" />
              <img src={lg6} alt="lg" />
              <img src={lg7} alt="lg" />
              <img src={lg8} alt="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
