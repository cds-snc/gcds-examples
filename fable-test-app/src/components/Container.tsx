import React from 'react';
import { GcdsContainer } from "@cdssnc/gcds-components-react";

// Define spacing values for margin + padding
type SpacingValues = "0" | "50" | "100" | "150" | "200" | "250" | "300" | "400" | "450" | "500" | "550" | "600" | "700" | "800" | "900" | "1000";

interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
  centered?: boolean;
  id: string;
  mainContainer?: boolean;
  margin?: SpacingValues;
  padding?: SpacingValues;
  size?: "full" | "xl" | "lg" | "md" | "sm" | "xs";
  tag?: string;
}

const Container: React.FC<ContainerProps> = React.memo(({
  border = false,
  centered = false,
  id,
  mainContainer = false,
  margin,
  padding,
  size = "full",
  tag = "div",
  children
}) => (
  <GcdsContainer
    tag={tag}
    border={border}
    centered={centered}
    id={id}
    mainContainer={mainContainer}
    margin={margin}
    padding={padding}
    size={size}
  >
    {children}
  </GcdsContainer>
));

export default Container;