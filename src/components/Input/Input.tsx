import { FC } from "react";
import classnames from "classnames";

import './input.scss'

type Props = {
  autoFocus: boolean;
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  readOnly: boolean;
  required: boolean;
  placeholder: string;
};

export const Input: FC<Partial<Props>> = ({
  autoFocus,
  disabled,
  error,
  fullWidth,
  readOnly,
  required,
  placeholder
}) => {
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
    ></input>
  );
};
