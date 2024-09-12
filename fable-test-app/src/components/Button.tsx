import React from 'react';
import { GcdsButton } from "@cdssnc/gcds-components-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button" | "link" | "reset";
  buttonId?: string;
  buttonRole: "primary" | "secondary" | "danger";
  onGcdsClick?: (e: any) => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = React.memo(({ 
  children,
  className,
  type,
  buttonId,
  buttonRole,
  onGcdsClick,
  href
}) => (
  <GcdsButton
    type={type}
    buttonId={buttonId}
    buttonRole={buttonRole}
    className={className}
    onGcdsClick={onGcdsClick}
    href={href}
  >
    {children}
  </GcdsButton>
));

export default Button;