import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import "./style.scss";

type InputGroupProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  errors?: FieldErrors<FieldValues>;
};

export const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ id, label, errors, ...props }, ref) => {
    return (
      <div className="input-group">
        {label && (
          <label htmlFor={id} className="input-group__label">
            {label}
          </label>
        )}
        <input ref={ref} id={id} className="input-group__input" {...props} />
        {errors && (
          <ErrorMessage
            errors={errors}
            name={id}
            render={({ message }) => (
              <p className="input-group__error">{message}</p>
            )}
          />
        )}
      </div>
    );
  }
);

export default InputGroup;
