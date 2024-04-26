'use client';
import {
    GcdsHeader,
    GcdsBreadcrumbs,
    GcdsBreadcrumbsItem,
    GcdsTopNav,
    GcdsNavLink
} from '@cdssnc/gcds-components-react-ssr'
import React, { FC } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import {PhaseBanner} from "@/app/components/client/PhaseBanner";
import Image from "next/image";
import {NavLink} from "@/app/components/client/NavLink";


export const Header: FC = () => {
    const pathname = usePathname();
    const locale = usePathname()?.split("/")[1];

    const lang = locale === "fr" ? "fr" : "en";
    const langToggleHref = lang === "fr" ? pathname?.replace("/fr", "/en") : (pathname === "/" ? "/fr" : pathname?.replace("/en", "/fr"));

    console.log('current locale is', locale, lang)
    console.log('langToggle is', langToggleHref)
    console.log(pathname)

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/plants", label: "Plants" },
        { href: "/plant-identification-request", label: "Plant identification" },
        { href: "/invasive-plants", label: "Invasive plants" }
    ];

    return (
        <GcdsHeader
            langHref={langToggleHref}
            skipToHref="#"
        >
            <PhaseBanner />
            <Link slot="signature" href="/" className="d-flex align-items-center link-default" >
                <Image
                    src="/pine-logo.png"
                    alt="The logo features a cupcake with a determined facial expression and a superhero cape, exuding an enthusiastic and adventurous personality."
                    className="me-300"
                    width="75"
                    height="75"
                />
                <p>Forest heroes</p>
            </Link>
            <GcdsTopNav slot="menu" label="Site" alignment="right">
                {navItems.map((item, index) => {
                    let current = {}
                    if (item.href === pathname) {
                        current = { current: true }
                    }

                    // @ts-ignore
                    /* we need passHref for custom components and legacyBehavior to not render an additional <a> tag */
                    return (
                        <Link href={item.href} legacyBehavior key={index}>
                            <NavLink
                                href={item.href}
                                key={index}
                                {...current}
                            >
                                {item.label}
                            </NavLink>
                        </Link>
                    );
                })}
            </GcdsTopNav>
            {pathname !== '/' &&
                <GcdsBreadcrumbs slot="breadcrumb" hide-canada-link>
                    <GcdsBreadcrumbsItem href="/">
                        Home
                    </GcdsBreadcrumbsItem>
                    {pathname.includes('/plants') &&
                        <GcdsBreadcrumbsItem href="/plants">
                            Plants
                        </GcdsBreadcrumbsItem>
                    }

                </GcdsBreadcrumbs>
            }
        </GcdsHeader>
    );
};