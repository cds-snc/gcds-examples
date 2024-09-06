import React from 'react';

// Components (internal)
import { DateModified, Heading, Text } from '../components';
import { GcdsCard, GcdsGrid } from '@cdssnc/gcds-components-react';

const About: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">About this app</Heading>

      <Text>
        This app was built using GC Design System styles and components.
      </Text>

      <Heading tag="h2">Learn more about the GC Design System</Heading>

      <GcdsGrid
        columnsTablet="1fr 1fr"
      >
        <GcdsCard
          cardTitle="Figma library"
          description="View all of our styles and components to use in your designs."
          cardTitleTag="h3"
          badge="Design"
          href="https://www.figma.com/design/mh2maMG2NBtk41k1O1UGHV/GC-Design-System?node-id=4-1006&node-type=CANVAS&t=YFNAbrqORUhggvuC-0"
          img-src="/figma.png"
          img-alt=""
        />
        <GcdsCard
          cardTitle="Documentation site"
          description="View all of our styles and components along with guidance on how to use them."
          cardTitleTag="h3"
          badge="Guidance"
          href="https://design-system.alpha.canada.ca"
          img-src="/docs.png"
          img-alt=""
        />
        <GcdsCard
          cardTitle="GitHub repo"
          description="View our code in Github for all of our components."
          cardTitleTag="h3"
          badge="Code"
          href="https://github.com/cds-snc/gcds-components"
          img-src="github.png"
          img-alt=""
        />
      </GcdsGrid>


      <Heading tag="h2">Special thanks to Paul Craig</Heading>

      <Text>
        Paul Craig is the original creator of this site...
      </Text>

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default About;