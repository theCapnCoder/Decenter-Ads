import logo from "../../assets/img/logo_big.png";
import socialImg from "../../assets/img/social.png";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" />
      </div>
      <h3 className={styles.title}>One-stop advertising tech platform</h3>
      <div className={styles.socialWrapper}>
        <img src={socialImg} alt="social" />
      </div>
      <div className={styles.address}>
        <h3>
          Address: 60 Paya Lebar Road, #04-51, Paya Lebar Square, Singapore
          409051
        </h3>
        <div>
          <h3>Phone: +6591731742</h3>
          <h3>Email: support@decenterads.com</h3>
        </div>
      </div>
    </footer>
  );
};
