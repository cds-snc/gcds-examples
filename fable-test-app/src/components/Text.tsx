import React from 'react';
import { GcdsText } from "@cdssnc/gcds-components-react";

type MarginValue = "0" | "50" | "100" | "150" | "200" | "250" | "300" | "400" | "450" | "500" | "550" | "600" | "700" | "800" | "900" | "1000";

interface TextProps {
  children: React.ReactNode;
  marginBottom?: MarginValue;
  marginTop?: MarginValue;
  size?: "body" | "caption";
  textRole?: "light" | "primary" | "secondary";
}

const Text: React.FC<TextProps> = React.memo(({
  children,
  marginBottom = "400",
  marginTop = "0",
  size = "body",
  textRole = "primary"
}) => (
  <GcdsText
    marginBottom={marginBottom}
    marginTop={marginTop}
    size={size}
    textRole={textRole}
  >
    {children}
  </GcdsText>
));

export default Text;