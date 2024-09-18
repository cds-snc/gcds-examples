import React from 'react';
import { GcdsFieldset } from "@cdssnc/gcds-components-react";

interface InputProps {
  hint?: string;
  legend: string;
  fieldsetId: string;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Fieldset: React.FC<InputProps> = React.memo(({
  hint,
  legend,
  fieldsetId,
  validateOn,
  required,
  className,
  children
}) => (
  <GcdsFieldset
    fieldsetId={fieldsetId}
    legend={legend}
    hint={hint}
    validateOn={validateOn}
    required={required}
    className={className}
  >
    {children}
  </GcdsFieldset>
));

export default Fieldset;