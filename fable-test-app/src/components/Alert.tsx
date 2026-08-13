import React from "react";
import { GcdsAlert } from "@gcds-core/components-react";

interface AlertProps {
  children: React.ReactNode;
  alertRole?: "info" | "success" | "warning" | "danger";
  container?: "full" | "xl" | "lg" | "md" | "sm" | "xs";
  heading: string;
  hideCloseBtn?: boolean;
  hideRoleIcon?: boolean;
  isFixed?: boolean;
  className?: string;
  onGcdsDismiss?: (e: any) => void;
}

const Alert: React.FC<AlertProps> = React.memo(
  ({
    children,
    alertRole = "info",
    container,
    heading,
    hideCloseBtn = false,
    hideRoleIcon = false,
    isFixed = false,
    className,
    onGcdsDismiss,
  }) => (
    <GcdsAlert
      alertRole={alertRole}
      container={container}
      heading={heading}
      hideCloseBtn={hideCloseBtn}
      hideRoleIcon={hideRoleIcon}
      isFixed={isFixed}
      className={className}
      onGcdsDismiss={onGcdsDismiss}
    >
      {children}
    </GcdsAlert>
  ),
);

export default Alert;
