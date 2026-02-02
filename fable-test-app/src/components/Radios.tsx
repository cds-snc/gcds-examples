import React from 'react';
import { GcdsRadios } from "@cdssnc/gcds-components-react";

type RadioObject = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  checked?: boolean;
};

interface RadiosProps {
  hint?: string;
  legend: string;
  name: string;
  onInput?: (e: any) => void;
  value?: string;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  className?: string;
  options: string | RadioObject[];
}

const Radios: React.FC<RadiosProps> = React.memo(({
  hint,
  legend,
  name,
  onInput,
  validateOn,
  required,
  value,
  className,
  options
}) => (
  <GcdsRadios
    legend={legend}
    hint={hint}
    name={name}
    options={options}
    value={value}
    validateOn={validateOn}
    onInput={onInput}
    required={required}
    className={className}
  ></GcdsRadios>
));

export default Radios;