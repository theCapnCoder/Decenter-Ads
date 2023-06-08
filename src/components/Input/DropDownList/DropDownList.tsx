import { FC, useState } from "react";

import styles from "./dropDownList.module.scss";
import { DropDown } from "../../../assets/img/DropDown";

type Props = {
  onChange: (value: string) => void;
};

export const DropDownList: FC<Props> = ({ onChange }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState("");

  // const handleChange = (e: any) => {
  //   // onChange(e.target.value);
  //   console.log(e.target.textContent);
  //   console.log('lol');
  // };

const handleChange = (event: HTMLLIElement)=> {
  const target = event.currentTarget;
};

const handleChange1: React.MouseEventHandler<HTMLLIElement> = (event)=> {
  const target = event.currentTarget;
}

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
            <li onClick={handleChange}>Html</li>
            <li onClick={handleChange1}>HtmlTest</li>
            <li onClick={() => setValue("Css")}>Css</li>
            <li onClick={() => setValue("JavaScript")}>JavaScript</li>
            <li onClick={() => setValue("React")}>React</li>
            {/* <li onClick={() => setValue("Html")}>Html</li>
            <li onClick={() => setValue("Css")}>Css</li>
            <li onClick={() => setValue("JavaScript")}>JavaScript</li>
            <li onClick={() => setValue("React")}>React</li> */}
          </ul>
        )}
      </div>
    </div>
  );
};
