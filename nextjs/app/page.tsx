
'use client';
import { GcdsHeading } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from '@cdssnc/gcds-components-react-ssr/client';

import { Heading } from './components/client/Heading';
export default function Home() {
  return (
    <main>
      <div>
      <Heading>GCDS components in NextJS</Heading>

        <p>
          This is an example app that demonstrates how to use GCDS components in NextJS.
        </p>
      </div>
    </main>
  );
}
