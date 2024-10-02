import React from 'react';
import { GcdsInput } from "@cdssnc/gcds-components-react";

interface InputProps {
  hint?: string;
  label: string;
  name: string;
  onInput?: (e: any) => void;
  inputId: string;
  value?: string;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  size?: number;
  className?: string;
  type?: "text" | "email" | "number" | "password" | "search";
}

const Input: React.FC<InputProps> = React.memo(({
  hint,
  label,
  name,
  onInput,
  inputId,
  validateOn,
  required,
  value,
  size,
  className,
  type
}) => (
  <GcdsInput
    inputId={inputId}
    label={label}
    hint={hint}
    name={name}
    value={value}
    validateOn={validateOn}
    onInput={onInput}
    required={required}
    size={size}
    className={className}
    type={type}
  ></GcdsInput>
));

export default Input;