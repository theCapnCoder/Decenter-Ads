import { FC, useState } from "react";

import styles from "./dropDownList.module.scss";
import { DropDown } from "../../../assets/img/DropDown";

type Props = {
  onChange: (value: string) => void;
  items: string[];
};


export const DropDownList: FC<Props> = ({ onChange, items }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState("");

  const handleChange: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const selectElement = event.currentTarget.textContent;

    if (selectElement) {
      onChange(selectElement);
    }
  };

  return (
    <div className={styles.baseDropDown}>
      <div
        className={styles.icon}
        onClick={() => setOpenDropdown((prev) => !prev)}
      >
        <DropDown />
      </div>
      <div>
        {openDropdown && (
          <ul className={styles.dropdown}>
            {items.map((item, index) => (
              <li key={index} onClick={handleChange}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
