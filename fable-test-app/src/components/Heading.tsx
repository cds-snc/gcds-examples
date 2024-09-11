import React from 'react';
import { GcdsHeading } from "@cdssnc/gcds-components-react";

type MarginValue = "0" | "50" | "100" | "150" | "200" | "250" | "300" | "400" | "450" | "500" | "550" | "600" | "700" | "800" | "900" | "1000";

interface HeadingProps {
  children: React.ReactNode;
  marginBottom?: MarginValue;
  marginTop?: MarginValue;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = React.memo(({ tag = "h1", children, marginBottom = "400", marginTop }) => {
  // Set marginTop based on the tag
  // const marginTop = tag === "h1" ? "0" : "500";

  return (
    <GcdsHeading
      tag={tag}
      marginBottom={marginBottom}
      marginTop={marginTop ? marginTop : tag === "h1" ? "0" : "500"}
    >
      {children}
    </GcdsHeading>
  );
});

export default Heading;