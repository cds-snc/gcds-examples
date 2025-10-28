import React from 'react';
import { GcdsContainer } from "@cdssnc/gcds-components-react";
import { SpacingValues } from '../utils/constants';

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