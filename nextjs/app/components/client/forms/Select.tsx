'use client';

import { GcdsSelect } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

interface GcdsSelectProps {
    name: string;
    id: string;
    label: string;
    hint?: string;
    children?: any;
    defaultValue?: string;
}
export const Select: FC<GcdsSelectProps> = ({id, name, label, hint, defaultValue, children}) => {
    const optionalAttributes = {}
    if (hint) {
        // @ts-ignore
        optionalAttributes['hint'] = hint
    }
    if (defaultValue) {
        // @ts-ignore
        optionalAttributes['defaultValue'] = defaultValue
    }
    return (
        <GcdsSelect
            name={name}
            selectId={id}
            label={label}
           {...optionalAttributes}
        >
            {children}
        </GcdsSelect>
    )
}