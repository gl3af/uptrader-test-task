import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues } from "react-hook-form";
import Select, { ActionMeta, GroupBase, OptionsOrGroups } from "react-select";
import "./style.scss";

type SelectGroupProps = {
  id: string;
  label: string;
  onChange: (newValue: any, actionMeta: ActionMeta<any>) => void;
  options: OptionsOrGroups<any, GroupBase<any>>;
  value: any;
  errors: FieldErrors<FieldValues> | undefined;
  defaultValue?: any;
};

export default function SelectGroup({
  id,
  label,
  onChange,
  options,
  value,
  errors,
  defaultValue,
}: SelectGroupProps) {
  return (
    <div className="select-group">
      <label htmlFor={id} className="select-group__label">
        {label}
      </label>
      <Select
        id="priority"
        onChange={onChange}
        options={options}
        value={value}
        defaultValue={defaultValue}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "grey" : "grey",
            backgroundColor: "inherit",
          }),
        }}
      />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => (
          <p className="input-group__error">{message}</p>
        )}
      />
    </div>
  );
}
