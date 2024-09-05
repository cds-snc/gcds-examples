import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { GcdsLink } from "@cdssnc/gcds-components-react";

interface StyledLinkProps extends LinkProps {
  children: React.ReactNode;
  external?: boolean;
  href?: string;
}

const StyledLink: React.FC<StyledLinkProps> = React.memo(({
  children,
  external,
  href,
  to,
  ...rest
}) => {
  // Render external link
  if (external) {
    return (
      <GcdsLink href={href} external={external} {...rest}>
        {children}
      </GcdsLink>
    );
  }

  // Render internal link
  return (
    <GcdsLink as={Link} href={to} {...rest}>
      {children}
    </GcdsLink>
  );
});

export default StyledLink;