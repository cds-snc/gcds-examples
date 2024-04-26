'use client';

import { GcdsNavLink } from '@cdssnc/gcds-components-react-ssr'
import React  from 'react';

interface NavLinkProps {
    href: string,
    children: any,
    current?: boolean | "true" | "false" | undefined,
    innerRef?: React.Ref<any>
}

class NavLinkComponent extends React.Component<NavLinkProps> {
    render() {
        const { href, children, current, innerRef } = this.props;
        let currentProps = {};
        if (current === "true" || current === true) {
            currentProps = { current: true };
        }
        return (
            <GcdsNavLink href={href} {...currentProps} ref={innerRef}>
                {children}
            </GcdsNavLink>
        );
    }
}

export const NavLink = React.forwardRef<HTMLElement, NavLinkProps>((props, ref) => (
    <NavLinkComponent {...props} innerRef={ref} />
));