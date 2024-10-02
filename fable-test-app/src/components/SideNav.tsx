import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  GcdsNavGroup,
  GcdsNavLink,
  GcdsSideNav
} from "@cdssnc/gcds-components-react";

const navLinks = [
  {
    groupLabel: "View holidays",
    links: [
      { href: "/view-holidays/nationwide", label: "Nationwide" },
      { href: "/view-holidays/federal", label: "Federal" },
      { href: "/view-holidays/alberta", label: "Alberta" },
      { href: "/view-holidays/british-columbia", label: "British Columbia" },
      { href: "/view-holidays/manitoba", label: "Manitoba" },
      { href: "/view-holidays/new-brunswick", label: "New Brunswick" },
      { href: "/view-holidays/newfoundland-and-labrador", label: "Newfoundland and Labrador" },
      { href: "/view-holidays/nova-scotia", label: "Nova Scotia" },
      { href: "/view-holidays/northwest-territories", label: "Northwest Territories" },
      { href: "/view-holidays/nunavut", label: "Nunavut" },
      { href: "/view-holidays/ontario", label: "Ontario" },
      { href: "/view-holidays/prince-edward-island", label: "Prince Edward Island" },
      { href: "/view-holidays/quebec", label: "Quebec" },
      { href: "/view-holidays/saskatchewan", label: "Saskatchewan" },
      { href: "/view-holidays/yukon", label: "Yukon" },
    ],
  },
  {
    groupLabel: "Holiday information",
    links: [
      { href: "/federal-and-provincial-holidays", label: "Federal and provincial holidays" },
      { href: "/optional-holidays", label: "Optional holidays" },
    ],
  }
];

const SideNav: React.FC = () => {
  const { pathname } = useLocation();
  const isCurrentPath = (href: string) => pathname.includes(href);

  return (
    <GcdsSideNav label="Canada holidays" className="lg:bg-light">
      {navLinks.map((group, index) => (
        <GcdsNavGroup key={index} openTrigger={group.groupLabel} menuLabel={group.groupLabel} open>
          {group.links.map((item) => (
            <GcdsNavLink
              href={item.href}
              key={item.href}
              current={isCurrentPath(item.href)}
            >
              {item.label}
            </GcdsNavLink>
          ))}
        </GcdsNavGroup>
      ))}

      <GcdsNavLink href="/about" current={isCurrentPath("/about")}>
        About this app
      </GcdsNavLink>
      <GcdsNavLink href="/submit-a-holiday" current={isCurrentPath("/submit-a-holiday")}>
        Submit a holiday
      </GcdsNavLink>
    </GcdsSideNav>
  );
};

export default SideNav;