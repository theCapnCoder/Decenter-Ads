import { FC } from "react";
import classnames from "classnames";

import "./input.scss";
import { useField } from "formik";

type BaseProps = {
  name: string;
  type: string;
};

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
  placeholder,
}) => {
  const [field, meta, helpers] = useField({ name, type });

  return (
    <div className="UiInputBase">
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
        {...field}
      ></input>

      {meta.error && meta.touched ? (
      <p className="Ui-error">{meta.error}</p>
      ) : null}
    </div>
  );
};
