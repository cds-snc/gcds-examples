'use client';

import { GcdsFieldset, GcdsRadioGroup } from '@cdssnc/gcds-components-react-ssr'
import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client'
import { FC } from 'react';

interface RadioObject {
    id: string;
    value: string;
    label: string;
    hint?: string;
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
}

interface RadioGroupProps {
    name: string;
    id: string;
    options: string | RadioObject[] | undefined;
    legend: string;
    hint?: string;
    required?: boolean;
}
// @ts-ignore
export const RadioGroup: FC<RadioGroupProps> = ({ name,id, options, legend, hint, required}) => {
    const optionalAttributes = {}

    if (hint) {
        // @ts-ignore
        optionalAttributes['hint'] = hint
    }

    if (required) {
        // @ts-ignore
        optionalAttributes['required'] = required
    }

    return (
        // The options needs to be stringified to be passed to the component
        <GcdsWrapper>
            <GcdsFieldset
                fieldsetId={id}
                legend={legend}
                {...optionalAttributes}
            >
                <GcdsRadioGroup
                    name={name}
                    options={JSON.stringify(options)}
                >
                </GcdsRadioGroup>
            </GcdsFieldset>
        </GcdsWrapper>
    )
}