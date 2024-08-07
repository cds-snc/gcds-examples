'use client';

import { GcdsButton } from '@cdssnc/gcds-components-react-ssr'
import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client'
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
                buttonId={id}
                buttonRole="primary"
                name={name}
                type="submit"
            >
                {children}
            </GcdsButton>
        </GcdsWrapper>
    )
}