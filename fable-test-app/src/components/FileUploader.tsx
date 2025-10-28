import React from 'react';
import { GcdsFileUploader } from "@cdssnc/gcds-components-react";

interface FileUploaderProps {
  hint?: string;
  label: string;
  name: string;
  onChange?: (e: any) => void;
  uploaderId: string;
  value?: string[] | undefined;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = React.memo(({
  hint,
  label,
  name,
  onChange,
  uploaderId,
  validateOn,
  required,
  value,
  className
}) => (
  <GcdsFileUploader
    uploaderId={uploaderId}
    label={label}
    hint={hint}
    name={name}
    value={value}
    validateOn={validateOn}
    onChange={onChange}
    required={required}
    className={className}
  ></GcdsFileUploader>
));

export default FileUploader;