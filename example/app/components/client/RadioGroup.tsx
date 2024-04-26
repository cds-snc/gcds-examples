'use client';

import { GcdsRadioGroup, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const RadioGroup: FC = () => (
  <div>
    <GcdsHeading tag="h2">Radio Button</GcdsHeading>

    <GcdsRadioGroup
      name="radiowc"
      options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"}, { "label": "Label 2", "id": "radio2", "value": "radio2"}, { "label": "Label 3", "id": "radio3", "value": "radio3"}]'
    >
    </GcdsRadioGroup>
  </div>
);