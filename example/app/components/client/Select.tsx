'use client';

import { GcdsSelect, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Select: FC = () => (
  <div>
    <GcdsHeading tag="h2">Select</GcdsHeading>
    
    <GcdsSelect label="Select" name="select" defaultValue="Select another">
      <option value="red">Red</option>
      <option value="blue">blue</option>
      <option value="green">green</option>
    </GcdsSelect>
  </div>
);