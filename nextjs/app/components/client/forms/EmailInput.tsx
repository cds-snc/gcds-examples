'use client';

import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client'
import { GcdsInput } from '@cdssnc/gcds-components-react-ssr';
import { FC } from 'react';

interface EmailInputProps {
    name: string;
    id: string;
    label: string;
    hint?: string;
    required?: boolean;
}
export const EmailInput: FC<EmailInputProps> = ({id, name, label, hint, required}) => {
    return (
        <GcdsWrapper>
            <GcdsInput
                name={name}
                input-id={id}
                label={label}
                hint={hint}
                type="email"
                autocomplete="email"
                required={required}
            >
            </GcdsInput>
        </GcdsWrapper>
    )
}