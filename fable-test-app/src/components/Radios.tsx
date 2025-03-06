import React from 'react';
import { GcdsRadios } from "@cdssnc/gcds-components-react";

type RadioObject = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  checked?: boolean;
  disabled?: boolean;
};

interface RadioGroupProps {
  name: string;
  legend: string;
  onGcdsChange?: (e: any) => void;
  className?: string;
  required?: boolean;
  errorMessage?: string;
  validateOn?: "blur" | "submit" | "other" | undefined;
  options: string | RadioObject[];
  value?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = React.memo(({ name, onGcdsChange, legend, options, required, className , validateOn, errorMessage, value}) => (
  <GcdsRadios
    name={name}
    onGcdsChange={onGcdsChange}
    legend={legend}
    required={required}
    options={options}
    className={className}
    errorMessage={errorMessage}
    validateOn={validateOn}
    value={value}
  >
  </GcdsRadios>
));

export default RadioGroup;