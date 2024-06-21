'use client';

import {GcdsNavLink, GcdsTopNav} from '@cdssnc/gcds-components-react-ssr'
import React, { FC } from 'react';
import {useRouter} from "next/navigation";
import {GcdsWrapper} from '@cdssnc/gcds-components-react-ssr/client'

interface NavItem {
    href: string;
    label: string;
}

interface TopNavProps {
    navItems: NavItem[];
    pathname: string;
}

export const TopNav: FC<TopNavProps> = ({navItems, pathname}) => {
    const router = useRouter();
    console.log(navItems);
    return (
        // <div>Testing</div>
        <GcdsWrapper>
            <GcdsTopNav slot="menu" label="Site" alignment="right">
                {navItems.map((item, index) => {
                    let current = {};
                    if (item.href === pathname) {
                        current = { current: true };
                    }
                    // This is a workaround for navigation because you can't use the NextJS <Link> component inside a GCDS Component
                    return (
                        <GcdsNavLink
                            key={index}
                            {...current}
                            onClick={() => router.push(item.href)}
                        >
                            {item.label}
                        </GcdsNavLink>
                    );
                })}
            </GcdsTopNav>
        </GcdsWrapper>
    )
};