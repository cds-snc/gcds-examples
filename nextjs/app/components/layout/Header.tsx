/* eslint-disable @next/next/no-img-element */
"use client";
import {
    GcdsBreadcrumbs,
    GcdsBreadcrumbsItem,
    GcdsHeader,
    GcdsIcon,
    GcdsLink,
    GcdsPhaseBanner,
    GcdsSearch,
    GcdsTopNav,
    GcdsNavLink,
} from "@cdssnc/gcds-components-react-ssr";
import {GcdsWrapper} from '@cdssnc/gcds-components-react-ssr/client'
import {TopNav} from "@/app/components/layout/TopNav";
import React, {FC} from "react";
import {usePathname, useRouter} from "next/navigation";


export const Header: FC = () => {
    const pathname = usePathname();
    const locale = usePathname()?.split("/")[1];

    const router = useRouter();

    const lang = locale === "fr" ? "fr" : "en";
    const langToggleHref =
        lang === "fr"
            ? pathname?.replace("/fr", "/en")
            : pathname === "/"
                ? "/fr"
                : pathname?.replace("/en", "/fr");

    const navItems = [
        {href: "/", label: "Home"},
        {href: "/plants", label: "Plants"},
        {href: "/plant-identification", label: "Plant identification"},
        {href: "/report-invasive-plants", label: "Report invasive plants"},
    ];

    /**
     * Don't wrap GCDS components inside a tag or a component, they won't work and will cause hydration issues.
     * To use the header component, use GCDS components directly, if you wrap them in a component or a tag, they won't work.
     */
    // @ts-ignore
    return (
        <GcdsWrapper>
            <GcdsHeader langHref={langToggleHref} skipToHref="#">
                {/*
                This won't work, at the moment you'll need to use the gcds component directly here.
                <PhaseBanner />
            */}
                <GcdsPhaseBanner slot="banner">
                    <GcdsIcon
                        slot="banner-icon-left"
                        name="play-circle"
                        size="text"
                        label="Play icon featuring a right-facing triangle within a circle with a rightward arrowhead. It signifies the action of starting or resuming audio or video playback."
                    />
                    <p slot="banner-text">
                        Stay tuned for our new plant series coming out soon.
                    </p>
                </GcdsPhaseBanner>
                {/* using GcdsLink instead of <a> causes some style issues, it's not centering the text properly even with the classes */}
                <a href="/" slot="signature" className="d-flex align-items-center link-default">
                    <img
                        src="/pine-logo.png"
                        alt="The logo features a cupcake with a determined facial expression and a superhero cape, exuding an enthusiastic and adventurous personality."
                        className="me-300"
                        width="75"
                        height="75"
                    />
                    <p>Forest heroes</p>
                </a>
                {/*</a>*/}
                {/* We can't nest our own custom components inside GCDS components */}
                {/* example: <TopNav navItems={navItems} pathname={pathname}/>*/}
                {/*<GcdsTopNav slot="menu" label="Site" alignment="right">*/}
                {/*  {navItems.map((item, index) => {*/}
                {/*    let current = {};*/}
                {/*    if (item.href === pathname) {*/}
                {/*      current = { current: true };*/}
                {/*    }*/}
                {/*    // Here is a workaround for navigation because you can't use the NextJS <Link> component inside a GCDS Component*/}
                {/*    // Errors out:*/}
                {/*    /**/}
                {/*    app-index.js:33 Warning: Extra attributes from the server: current*/}
                {/*    at gcds-nav-link*/}
                {/*    at _c (webpack-internal:///(app-pages-browser)/../../gcds-components-ssr/packages/react-ssr/dist/esm/gcds-nav-link.js:23:11)*/}
                {/*    at gcds-top-nav*/}
                {/*    at _c (webpack-internal:///(app-pages-browser)/../../gcds-components-ssr/packages/react-ssr/dist/esm/gcds-top-nav.js:19:11)*/}
                {/*    at gcds-header*/}
                {/*    */}
                {/*    return (*/}
                {/*      <GcdsNavLink*/}
                {/*        key={index}*/}
                {/*        {...current}*/}
                {/*        onClick={() => router.push(item.href)}*/}
                {/*      >*/}
                {/*        {item.label}*/}
                {/*      </GcdsNavLink>*/}
                {/*    );*/}
                {/*  })}*/}
                {/*</GcdsTopNav>*/}
                {/* This causes a hydration mismatch*/}
                {/*{(pathname !== "/" && pathname !== "/en/" && pathname !== "/fr/") && (*/}
                {/*    <GcdsBreadcrumbs slot="breadcrumb" hide-canada-link>*/}
                {/*         <GcdsBreadcrumbsItem href="/">Home</GcdsBreadcrumbsItem>*/}
                {/*         {pathname.includes("/plants") && (*/}
                {/*             <GcdsBreadcrumbsItem href="/plants">Plants</GcdsBreadcrumbsItem>*/}
                {/*         )}*/}
                {/*    </GcdsBreadcrumbs>*/}
                {/*)}*/}
                {/*<GcdsSearch*/}
                {/*    action="/searchresults"*/}
                {/*    method="post"*/}
                {/*    name="searchbox"*/}
                {/*    searchId="searchbox"*/}
                {/*    placeholder="Search this site"*/}
                {/*    slot="search"*/}
                {/*></GcdsSearch>*/}
            </GcdsHeader>
        </GcdsWrapper>
    );
};
