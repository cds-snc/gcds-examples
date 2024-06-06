'use client';

import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client'
import { GcdsButton } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

interface SubmitButtonProps {
    name: string;
    id: string;
    children?: any;
}
export const SubmitButton: FC<SubmitButtonProps> = ({id, name, children}) => {
    return (
        <GcdsWrapper>
            <GcdsButton
                name={name}
                button-id={id}
                type="submit"
                button-role="primary"
            >
                {children}
            </GcdsButton>
        </GcdsWrapper>
    )
}