import { useState } from "react";

import styles from "./dropDownList.module.scss";
import { DropDown } from "../../../assets/img/DropDown";

export const DropDownList = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <DropDown />
      <div className={styles.baseDropDown}>
        {openDropdown && (
          <ul className={styles.dropdown}>
            <li onClick={() => setValue("Html")}>Html</li>
            <li onClick={() => setValue("Css")}>Css</li>
            <li onClick={() => setValue("JavaScript")}>JavaScript</li>
            <li onClick={() => setValue("React")}>React</li>
          </ul>
        )}
      </div>
    </div>
  );
};
