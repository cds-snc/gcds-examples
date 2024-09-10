import React from 'react';
import { GcdsDetails } from "@cdssnc/gcds-components-react";

interface DetailsProps {
  children: React.ReactNode;
  detailsTitle: string;
  open?: boolean;
}

const Details: React.FC<DetailsProps> = React.memo(({ children, detailsTitle, open = false }) => (
  <GcdsDetails detailsTitle={detailsTitle} open={open}>
    {children}
  </GcdsDetails>
));

export default Details;