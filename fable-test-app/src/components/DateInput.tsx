import React from 'react';
import { GcdsDateInput } from "@cdssnc/gcds-components-react";

interface InputProps {
  hint?: string;
  legend: string;
  name: string;
  onInput?: (e: any) => void;
  value?: string;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  className?: string;
  format: "full" | "compact";
}

const Input: React.FC<InputProps> = React.memo(({
  hint,
  legend,
  name,
  onInput,
  validateOn,
  required,
  value,
  className,
  format
}) => (
  <GcdsDateInput
    legend={legend}
    hint={hint}
    name={name}
    value={value}
    validateOn={validateOn}
    onInput={onInput}
    required={required}
    className={className}
    format={format}
  ></GcdsDateInput>
));

export default Input;