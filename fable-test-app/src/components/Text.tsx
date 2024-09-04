import React from 'react';
import { GcdsText } from "@cdssnc/gcds-components-react";

interface TextProps {
  children: React.ReactNode;
  size?: "body" | "caption";
  marginTop?: "0" | "100" | "1000" | "150" | "200" | "250" | "300" | "400" | "450" | "50" | "500" | "550" | "600" | "700" | "800" | "900";
  marginBottom?: "0" | "100" | "1000" | "150" | "200" | "250" | "300" | "400" | "450" | "50" | "500" | "550" | "600" | "700" | "800" | "900";
}

const Text: React.FC<TextProps> = React.memo(({ size = "body", marginTop, marginBottom, children }) => (
  <GcdsText
    size={size}
    marginTop={marginTop}
    marginBottom={marginBottom}
  >
    {children}
  </GcdsText>
));

export default Text;