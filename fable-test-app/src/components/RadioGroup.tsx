import React from 'react';
import { GcdsRadioGroup } from "@cdssnc/gcds-components-react";

type RadioObject = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
};

interface RadioGroupProps {
  name: string;
  onGcdsChange?: (e: any) => void;
  className?: string;
  options: string | RadioObject[];
}

const RadioGroup: React.FC<RadioGroupProps> = React.memo(({ name, onGcdsChange, options, className }) => (
  <GcdsRadioGroup
    name={name}
    onGcdsChange={onGcdsChange}
    options={options}
    className={className}
  >
  </GcdsRadioGroup>
));

export default RadioGroup;