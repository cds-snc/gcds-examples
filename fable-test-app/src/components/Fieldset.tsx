import React from 'react';
import { GcdsFieldset } from "@cdssnc/gcds-components-react";

interface InputProps {
  hint?: string;
  legend: string;
  legendSize: "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

const Fieldset: React.FC<InputProps> = React.memo(({
  hint,
  legend,
  legendSize,
  className,
  children
}) => (
  <GcdsFieldset
    legend={legend}
    legendSize={legendSize}
    hint={hint}
    className={className}
  >
    {children}
  </GcdsFieldset>
));

export default Fieldset;