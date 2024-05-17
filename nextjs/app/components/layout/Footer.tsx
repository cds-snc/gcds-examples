'use client';

import { GcdsFooter } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Footer: FC = () => {
  const contextualLinks = JSON.stringify({ "Plants": "/plants","Pests": "#", "Seeds": "#"})
  return (
      <GcdsFooter
        display="full"
        contextualHeading="Additional content"
        contextualLinks={contextualLinks}
      >
      </GcdsFooter>
  )
};