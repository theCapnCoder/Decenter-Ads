import map from "../../assets/img/map.jpg";
import mapMobile from "../../assets/img/map_mobile.jpg";

import styles from "./map.module.scss";

export const Map = () => {
  return (
    <div className={styles.map}>
      <div className={styles.box}>
        <picture>
          <source srcSet={mapMobile} type="image/jpg" media="(max-width:1366px)" />
          <source srcSet={map} type="image/jpg" />
          <img src={map} alt="map" />
        </picture>
      </div>
    </div>
  );
};
