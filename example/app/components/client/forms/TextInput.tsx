'use client';

import { GcdsInput } from '@cdssnc/gcds-components-react-ssr'
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
        <GcdsInput
            name={name}
            input-id={id}
            label={label}
            hint={hint}
        >
            {children}
        </GcdsInput>
    )
}