import React from 'react';
import { useLocation } from 'react-router-dom';
import { GcdsBreadcrumbs, GcdsBreadcrumbsItem, GcdsHeader } from "@cdssnc/gcds-components-react";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <GcdsHeader langHref="#" skipToHref="#main-content">
      {pathname !== "/" && (
        <GcdsBreadcrumbs hideCanadaLink slot="breadcrumb">
          <GcdsBreadcrumbsItem href="/">Canada holidays</GcdsBreadcrumbsItem>
        </GcdsBreadcrumbs>
      )}
    </GcdsHeader>
  );
};

export default Header;