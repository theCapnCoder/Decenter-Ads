import styles from "./advertising.module.scss";
import Button from "../../components/Button";

export const Advertising = () => {
  return (
    <div className={styles.advertising}>
      <div className={styles.card}>
        <h2>Let's achieve new heights in advertising with DecenterAds!</h2>
        <h4>Where innovation meets success. Let's make it happen!</h4>

        <div className={styles.smVisible}>
          <div className={styles.buttonWrapper}>
            <Button>Book your spot</Button>
          </div>
        </div>

        <div className={styles.lgVisible}>
          <div className={styles.buttonWrapper}>
            <Button>Join us at Cannes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
