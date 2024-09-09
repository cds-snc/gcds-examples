import React from 'react';
import { GcdsSelect } from "@cdssnc/gcds-components-react";

interface SelectProps {
  children: React.ReactNode;
  hint: string;
  label: string;
  name: string;
  onInput: (e: any) => void;
  selectId: string;
  value: string;
}

const Select: React.FC<SelectProps> = React.memo(({
  children,
  hint,
  label,
  name,
  onInput,
  selectId,
  value
}) => (
  <GcdsSelect
    selectId={selectId}
    label={label}
    hint={hint}
    name={name}
    value={value}
    onInput={onInput}
  >
    {children}
  </GcdsSelect>
));

export default Select;