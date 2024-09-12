import React from 'react';
import { GcdsTextarea } from "@cdssnc/gcds-components-react";

interface TextareaProps {
  hint?: string;
  label: string;
  name: string;
  onInput?: (e: any) => void;
  textareaId: string;
  value?: string;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = React.memo(({
  hint,
  label,
  name,
  onInput,
  textareaId,
  validateOn,
  required,
  value,
  className
}) => (
  <GcdsTextarea
    textareaId={textareaId}
    label={label}
    hint={hint}
    name={name}
    value={value}
    validateOn={validateOn}
    onInput={onInput}
    required={required}
    className={className}
  ></GcdsTextarea>
));

export default Textarea;