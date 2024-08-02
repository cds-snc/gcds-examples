'use client';

export type ContainerProps = {
    id: string,
    size?: "full" | "xl" | "lg" | "md" | "sm" | "xs" | undefined,
    border?: any,
    tag?: string | undefined,
    centered?: string | undefined,
    padding?: string | undefined,
    children?: any
};
import React from 'react';

export const Container: React.FC<ContainerProps> = (props) => {
    return (
        <main className="container-xl mx-auto xl:px-0 sm:px-500 p-400">
            {props.children}
        </main>
    );
    // TODO: This is documentation for a known issue at the moment.
    // Issues with hydration w/SSR, doesn't work if we use GcdsContainer here
    //      Warning: Expected server HTML to contain a matching <main> in <gcds-container>.
    //<Page>
    //   <main>
    // return (
    //     <GcdsContainer container-id={props.id} size={props.size} {...props.border} tag={props.tag} centered={props.centered} padding={props.padding}>
    //         {props.children}
    //     </GcdsContainer>
    // );
};