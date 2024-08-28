import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
  GcdsHeader,
  GcdsNavLink,
  GcdsPhaseBanner,
  GcdsTopNav
} from "@cdssnc/gcds-components-react";

const navLinks = [
  {href: "/view-holidays", label: "View holidays"},
  {href: "/about", label: "About"},
  {href: "/submit-a-holiday", label: "Submit a holiday"},
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const isCurrentPath = (href: string): boolean => href === pathname;

  return (
    <GcdsHeader langHref="#" skipToHref="#main-content">
      <GcdsPhaseBanner bannerRole="primary" slot="banner">
        {/* TO DO: Replace with new icon component when it's ready */}
        <span slot="banner-icon-left">&#9757;</span>
        <p slot="banner-text">
          <small>This prototype is intended for the accessibility testing of GC Design System.</small>
        </p>
      </GcdsPhaseBanner>
      <GcdsTopNav label="Main navigation" alignment="right" slot="menu">
        <GcdsNavLink href="/" slot="home">Canada holidays</GcdsNavLink>
        {navLinks.map((item) => (
          <GcdsNavLink
            href={item.href}
            key={item.href}
            current={isCurrentPath(item.href) ? "true" : undefined}
          >
            {item.label}
          </GcdsNavLink>
        ))}
      </GcdsTopNav>
      {pathname !== "/" && (
        <GcdsBreadcrumbs hideCanadaLink slot="breadcrumb">
          <GcdsBreadcrumbsItem href="/">Canada holidays</GcdsBreadcrumbsItem>
        </GcdsBreadcrumbs>
      )}
    </GcdsHeader>
  );
};

export default Header;