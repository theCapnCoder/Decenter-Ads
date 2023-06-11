import { FC } from "react";
import classnames from "classnames";

import "./input.scss";
import { useField } from "formik";
import { DropDown } from "../../assets/img/DropDown";
import { DropDownList } from "./DropDownList/DropDownList";

type BaseProps = {
  name: string;
  type: string;
};

type Props = {
  autoFocus: boolean;
  select: boolean;
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  readOnly: boolean;
  required: boolean;
  placeholder: string;
  items: string[];
};

export const Input: FC<BaseProps & Partial<Props>> = ({
  name,
  type,
  autoFocus,
  select,
  disabled,
  error,
  fullWidth,
  readOnly,
  required,
  placeholder,
  items,
}) => {
  const [field, meta, helpers] = useField({ name, type });

  const handleChange = (element: string) => {
    helpers.setValue(element);
  };

  return (
    <div className="UiInputBase">
      <div className="UiInput">
        <input
          className={classnames({
            "Ui-error": error,
            "Ui-fullWidth": fullWidth,
          })}
          placeholder={placeholder}
          autoFocus={autoFocus}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          type={type}
          {...field}
        ></input>

        {select && items && <DropDownList items={items} onChange={handleChange} />}
      </div>

      {meta.error && meta.touched ? (
        <p className="Ui-error">{meta.error}</p>
      ) : null}
    </div>
  );
};
