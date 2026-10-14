import React from "react";
import { GcdsFileUploader } from "@gcds-core/components-react";

interface FileUploaderProps {
  hint?: string;
  label: string;
  name: string;
  onChange?: (e: any) => void;
  onInput?: (e: any) => void;
  uploaderId: string;
  value?: string[] | undefined;
  validateOn?: "blur" | "submit" | "other";
  required?: boolean;
  className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = React.memo(
  ({
    hint,
    label,
    name,
    onChange,
    onInput,
    uploaderId,
    validateOn,
    required,
    value,
    className,
  }) => (
    <GcdsFileUploader
      uploaderId={uploaderId}
      label={label}
      hint={hint}
      name={name}
      value={value?.length ? value : []}
      validateOn={validateOn}
      onChange={onChange}
      onInput={onInput}
      required={required}
      className={className}
    ></GcdsFileUploader>
  ),
);

export default FileUploader;
