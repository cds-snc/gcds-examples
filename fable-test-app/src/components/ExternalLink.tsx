import React from 'react';
import { GcdsLink } from "@cdssnc/gcds-components-react";

interface LinkProps {
  children: React.ReactNode;
  external?: boolean;
  href?: string;
}

const ExternalLink: React.FC<LinkProps> = React.memo(({
  children,
  external,
  href ='',
}) => {
  // Check if the component should render an external link
  if (external && href) {
    return (
      <GcdsLink href={href} external={external}>
        {children}
      </GcdsLink>
    );
  }

  // Log an error message if 'external' is false, indicating misuse of the component
  console.error("Only use the ExternalLink component for external links. For internal links, use the React Router Link component.");
  return null;
});

export default ExternalLink;