'use client';

import { GcdsButton } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

interface SubmitButtonProps {
    name: string;
    id: string;
    children?: any;
}
export const SubmitButton: FC<SubmitButtonProps> = ({id, name, children}) => {
    return (
        <GcdsButton
            name={name}
            button-id={id}
            type="submit"
            button-role="primary"
        >
            {children}
        </GcdsButton>
    )
}