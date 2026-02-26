import React from "react";
import { GcdsButton } from "@gcds-core/components-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button" | "link" | "reset";
  buttonId?: string;
  buttonRole: "primary" | "secondary" | "danger" | "start";
  size: "regular" | "small";
  onGcdsClick?: (e: any) => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = React.memo(
  ({
    children,
    className,
    type,
    buttonId,
    buttonRole,
    size = "regular",
    onGcdsClick,
    href,
  }) => (
    <GcdsButton
      type={type}
      buttonId={buttonId}
      buttonRole={buttonRole}
      size={size}
      className={className}
      onGcdsClick={onGcdsClick}
      href={href}
    >
      {children}
    </GcdsButton>
  ),
);

export default Button;
