import React from "react";
import { GcdsText } from "@gcds-core/components-react";
import { SpacingValues } from "../utils/constants";

interface TextProps {
  children: React.ReactNode;
  marginBottom?: SpacingValues;
  marginTop?: SpacingValues;
  size?: "body" | "small";
  textRole?: "light" | "primary" | "secondary";
  ariaLive?: "off" | "polite" | "assertive";
}

const Text: React.FC<TextProps> = React.memo(
  ({
    children,
    marginBottom = "300",
    marginTop = "0",
    size = "body",
    textRole = "primary",
    ariaLive = undefined,
  }) => (
    <GcdsText
      marginBottom={marginBottom}
      marginTop={marginTop}
      size={size}
      textRole={textRole}
      aria-live={ariaLive}
      role={ariaLive ? "status" : undefined}
    >
      {children}
    </GcdsText>
  ),
);

export default Text;
