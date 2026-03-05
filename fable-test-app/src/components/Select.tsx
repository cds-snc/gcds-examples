import React from "react";
import { GcdsSelect } from "@gcds-core/components-react";

interface SelectProps {
  children: React.ReactNode;
  hint?: string;
  label: string;
  hideLabel?: boolean;
  name: string;
  onInput?: (e: any) => void;
  selectId: string;
  value?: string;
  defaultValue?: string;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
}

const Select: React.FC<SelectProps> = React.memo(
  ({
    children,
    hint,
    label,
    hideLabel,
    name,
    onInput,
    selectId,
    defaultValue,
    validateOn,
    required,
    value,
  }) => (
    <GcdsSelect
      selectId={selectId}
      label={label}
      hideLabel={hideLabel}
      hint={hint}
      name={name}
      value={value}
      defaultValue={defaultValue}
      validateOn={validateOn}
      onInput={onInput}
      required={required}
    >
      {children}
    </GcdsSelect>
  ),
);

export default Select;
