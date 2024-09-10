import React from 'react';
import { GcdsCheckbox } from "@cdssnc/gcds-components-react";

interface CheckboxProps {
  hint?: string;
  label: string;
  name: string;
  onInput?: (e: any) => void;
  checkboxId: string;
  value?: string;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  className?: string;
  checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = React.memo(({
  hint,
  label,
  name,
  onInput,
  checkboxId,
  validateOn,
  required,
  value,
  className,
  checked
}) => (
  <GcdsCheckbox
    checkboxId={checkboxId}
    label={label}
    hint={hint}
    name={name}
    value={value}
    validateOn={validateOn}
    onInput={onInput}
    required={required}
    className={className}
    checked={checked}
  ></GcdsCheckbox>
));

export default Checkbox;