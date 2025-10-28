import React from 'react';
import { GcdsHeading } from "@cdssnc/gcds-components-react";
import { SpacingValues } from '../utils/constants';

interface HeadingProps {
  children: React.ReactNode;
  marginBottom?: SpacingValues;
  marginTop?: SpacingValues;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = React.memo(({ tag = "h1", children, marginBottom = "300", marginTop }) => {
  // Set marginTop based on the tag
  // const marginTop = tag === "h1" ? "0" : "600";

  return (
    <GcdsHeading
      tag={tag}
      marginBottom={marginBottom}
      marginTop={marginTop ? marginTop : tag === "h1" ? "0" : "600"}
    >
      {children}
    </GcdsHeading>
  );
});

export default Heading;