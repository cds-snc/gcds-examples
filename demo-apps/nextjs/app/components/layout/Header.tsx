/* eslint-disable @next/next/no-img-element */
"use client";

import {
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
  GcdsHeader,
  GcdsNavLink,
  GcdsSearch,
  GcdsTopNav,
} from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";
import { PhaseBanner } from "@/app/components/layout/PhaseBanner";
import React, { FC } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/plants", label: "Plants" },
  { href: "/plant-identification", label: "Plant identification" },
  { href: "/report-invasive-plants", label: "Report invasive plants" },
];

export const Header: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = usePathname()?.split("/")[1];

  const isCurrentPath = (href: string) => href === pathname;

  // @ts-ignore
  return (
    <header>
      <GcdsWrapper>
        {/* TO DO: Add logic for language toggle */}
        <GcdsHeader langHref="/francais" skipToHref="#">
          <PhaseBanner />
          {/* using GcdsLink instead of <a> causes some style issues, it's not centering the text properly even with the classes */}
          <a
            href="/"
            slot="signature"
            className="d-flex align-items-center link-default"
          >
            <img
              src="/pine-logo.png"
              alt="The logo features a simple illustration of a tree."
              className="me-225"
              width="75"
              height="75"
            />
            <p>Forest heroes</p>
          </a>
          <GcdsTopNav slot="menu" label="Site" alignment="right">
            {navItems.map((item, index) => (
              <GcdsNavLink
                href={item.href}
                key={index}
                current={isCurrentPath(item.href) ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(item.href);
                }}
              >
                {item.label}
              </GcdsNavLink>
            ))}
          </GcdsTopNav>
          {pathname !== "/" && pathname !== "/en" && pathname !== "/fr" && (
            <GcdsBreadcrumbs slot="breadcrumb" hide-canada-link>
              <GcdsBreadcrumbsItem href="/">Home</GcdsBreadcrumbsItem>
              {pathname.includes("/plants") && (
                <GcdsBreadcrumbsItem href="/plants">Plants</GcdsBreadcrumbsItem>
              )}
            </GcdsBreadcrumbs>
          )}
          <GcdsSearch
            action="/searchresults"
            method="post"
            name="searchbox"
            searchId="searchbox"
            placeholder="this site"
            slot="search"
          ></GcdsSearch>
        </GcdsHeader>
      </GcdsWrapper>
    </header>
  );
};
