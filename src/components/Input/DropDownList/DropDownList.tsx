import { FC, useEffect, useRef, useState } from "react";

import styles from "./dropDownList.module.scss";
import { DropDown } from "../../../assets/img/DropDown";

type Props = {
  onChange: (value: string) => void;
  items: string[];
};

export const DropDownList: FC<Props> = ({ onChange, items }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const blockRef = useRef<HTMLDivElement | null>(null);

  const handleChange: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const selectElement = event.currentTarget.textContent;
    setOpenDropdown(false);

    if (selectElement) {
      onChange(selectElement);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        blockRef.current &&
        !blockRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.baseDropDown} ref={blockRef}>
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
              <li key={index} onClick={handleChange}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
