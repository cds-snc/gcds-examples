import React from 'react';
import { GcdsText } from "@cdssnc/gcds-components-react";
import { SpacingValues } from '../utils/constants';

interface TextProps {
  children: React.ReactNode;
  marginBottom?: SpacingValues;
  marginTop?: SpacingValues;
  size?: "body" | "small";
  textRole?: "light" | "primary" | "secondary";
}

const Text: React.FC<TextProps> = React.memo(({
  children,
  marginBottom = "300",
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