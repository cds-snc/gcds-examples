import React from "react";
import { GcdsContainer } from "@cdssnc/gcds-components-react";
import { SpacingValues } from "../utils/constants";

interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
  alignment?: "start" | "center" | "end";
  id: string;
  layout?: "full" | "page";
  margin?: SpacingValues;
  padding?: SpacingValues;
  size?: "full" | "xl" | "lg" | "md" | "sm" | "xs";
  tag?: string;
}

const Container: React.FC<ContainerProps> = React.memo(
  ({
    border = false,
    alignment,
    id,
    layout,
    margin,
    padding,
    size = "full",
    tag = "div",
    children,
  }) => (
    <GcdsContainer
      tag={tag}
      alignment={alignment}
      border={border}
      id={id}
      layout={layout}
      margin={margin}
      padding={padding}
      size={size}
    >
      {children}
    </GcdsContainer>
  ),
);

export default Container;
