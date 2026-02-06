import React from "react";
import { GcdsCheckboxes } from "@gcds-core/components-react";

type CheckObject = {
  id: string;
  label: string;
  value?: string;
  hint?: string;
  checked?: boolean;
};

interface CheckboxProps {
  hint?: string;
  legend: string;
  name: string;
  onInput?: (e: any) => void;
  value?: Array<string>;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  className?: string;
  options: string | CheckObject[];
}

const Checkboxes: React.FC<CheckboxProps> = React.memo(
  ({
    hint,
    legend,
    name,
    onInput,
    validateOn,
    required,
    value,
    className,
    options,
  }) => (
    <GcdsCheckboxes
      legend={legend}
      hint={hint}
      name={name}
      options={options}
      value={value}
      validateOn={validateOn}
      onInput={onInput}
      required={required}
      className={className}
    ></GcdsCheckboxes>
  ),
);

export default Checkboxes;
