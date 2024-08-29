import React from 'react';
import { GcdsHeading } from "@cdssnc/gcds-components-react";

interface HeadingProps {
  children: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = React.memo(({ tag = "h1", children }) => (
  <GcdsHeading tag={tag}>
    {children}
  </GcdsHeading>
));

export default Heading;