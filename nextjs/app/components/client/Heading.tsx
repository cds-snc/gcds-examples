'use client';

import { GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

interface HeadingProps {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    children?: any;
}
export const Heading: FC<HeadingProps> = ({tag, children}) => {
    return (
        <GcdsHeading
            tag={tag ? tag : "h1"}
        >
            {children}
        </GcdsHeading>
    )
}