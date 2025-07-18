import React from 'react';
import { GcdsSrOnly } from "@cdssnc/gcds-components-react";

interface ContainerProps {
    children: React.ReactNode;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h5" | "h6" | "span" | "p";
}

const SrOnly: React.FC<ContainerProps> = React.memo(({
    children,
    tag
}) => (
    <GcdsSrOnly tag={tag}> {children} </GcdsSrOnly>
));

export default SrOnly;