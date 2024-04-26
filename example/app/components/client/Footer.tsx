'use client';

import { GcdsFooter } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Footer: FC = () => (
  <div>    
    <GcdsFooter
      display="compact"
    >
    </GcdsFooter>
    <GcdsFooter
      display="full"
      contextualHeading="Additional content"
      contextualLinks='{ "Components": "#","Tokens": "#", "Foundations": "#"}'
    >
    </GcdsFooter>
  </div>
);