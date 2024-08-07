'use client';

import { GcdsInput } from '@cdssnc/gcds-components-react-ssr'
import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client'
import { FC } from 'react';

interface TextInputProps {
    name: string;
    id: string;
    label: string;
    hint: string;
    children?: any;
}
export const TextInput: FC<TextInputProps> = ({id, name, label, hint, children}) => {
    return (
        <GcdsWrapper>
            <GcdsInput
                name={name}
                inputId={id}
                label={label}
                hint={hint}
            >
                {children}
            </GcdsInput>
        </GcdsWrapper>
    )
}