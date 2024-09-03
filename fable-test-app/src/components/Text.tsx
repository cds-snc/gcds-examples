import React from 'react';
import { GcdsText } from "@cdssnc/gcds-components-react";

interface TextProps {
  children: React.ReactNode;
  size?: "body" | "caption";
}

const Text: React.FC<TextProps> = React.memo(({ size = "body", children }) => (
  <GcdsText size={size}>
    {children}
  </GcdsText>
));

export default Text;