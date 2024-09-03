"use client";

import { GcdsSelect } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";
import { FC } from "react";

interface SelectProps {
    name: string;
    id: string;
    label: string;
    hint?: string;
    children?: any;
    defaultValue?: string;
}

export const Select: FC<SelectProps> = ({id, name, label, hint, defaultValue, children}) => {
    return (
        <GcdsWrapper>
            <GcdsSelect
                name={name}
                selectId={id}
                label={label}
                hint={hint}
                defaultValue={defaultValue}
            >
                {children}
            </GcdsSelect>
        </GcdsWrapper>
    )
}