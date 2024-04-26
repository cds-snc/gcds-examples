'use client';

import { GcdsHeading } from '@cdssnc/gcds-components-react-ssr'

// export const Heading: FC = ({title}: {title: string}) => (
//     <GcdsHeading tag="h2">{title}</GcdsHeading>
// );

export const Heading = ({title}: {title: string}) => (
    <GcdsHeading tag="h1">{title}</GcdsHeading>
);