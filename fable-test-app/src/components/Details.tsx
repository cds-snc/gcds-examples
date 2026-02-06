import React from "react";
import { GcdsDetails } from "@gcds-core/components-react";

interface DetailsProps {
  children: React.ReactNode;
  detailsTitle: string;
  open?: boolean;
  className?: string;
}

const Details: React.FC<DetailsProps> = React.memo(
  ({ children, detailsTitle, open = false, className }) => (
    <GcdsDetails detailsTitle={detailsTitle} open={open} className={className}>
      {children}
    </GcdsDetails>
  ),
);

export default Details;
