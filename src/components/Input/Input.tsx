import { FC } from "react";
import classnames from "classnames";

import './input.scss'
import { useField } from "formik";

type BaseProps = {
  name: string,
  type: string,
}

type Props = {
  autoFocus: boolean;
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  readOnly: boolean;
  required: boolean;
  placeholder: string;
};

export const Input: FC<BaseProps & Partial<Props>> = ({
  name,
  type,
  autoFocus,
  disabled,
  error,
  fullWidth,
  readOnly,
  required,
  placeholder
}) => {

  console.log(name, type)
  const [field, meta, helpers] = useField({name, type})
  

  return (
    <input
      className={classnames("UiInputBase", {
        "Ui-error": error,
        "Ui-fullWidth": fullWidth,
      })}
      placeholder={placeholder}
      autoFocus={autoFocus}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      {...field}
    ></input>
  );
};
