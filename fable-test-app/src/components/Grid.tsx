import React from 'react';
import { GcdsGrid } from "@cdssnc/gcds-components-react";

type ContentValues =
  | "center"
  | "end"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "start"
  | "stretch";

interface GridProps {
  children?: React.ReactNode;
  alignItems?: "baseline" | "center" | "end" | "start" | "stretch";
  columns?: string;
  columnsDesktop?: string;
  columnsTablet?: string;
  container?: "full" | "xl" | "lg" | "md" | "sm" | "xs";
  centered?: boolean,
  display?: "grid" | "inline-grid" | undefined,
  equalRowHeight?: boolean,
  justifyContent?: ContentValues;
  justifyItems?: "center" | "end" | "start" | "stretch";
  placeContent?: ContentValues;
  placeItems?: "center" | "end" | "start" | "stretch";
  tag?: "article"
    | "aside"
    | "div"
    | "dl"
    | "main"
    | "nav"
    | "ol"
    | "section"
    | "ul";
}

const Grid: React.FC<GridProps> = React.memo(({
  columns,
  columnsDesktop,
  columnsTablet,
  container,
  centered,
  display,
  equalRowHeight,
  justifyContent,
  justifyItems,
  placeContent,
  placeItems,
  tag = "div",
  children
}) => (
  <GcdsGrid
    columns={columns}
    columnsDesktop={columnsDesktop}
    columnsTablet={columnsTablet}
    container={container}
    centered={centered}
    display={display}
    equalRowHeight={equalRowHeight}
    justifyContent={justifyContent}
    justifyItems={justifyItems}
    placeContent={placeContent}
    placeItems={placeItems}
    tag={tag}
  >
    {children}
  </GcdsGrid>
));

export default Grid;