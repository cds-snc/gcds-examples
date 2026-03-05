import React from "react";

// Components (internal)
import { DateModified, Heading, Text, Card, Grid } from "../components";

const About: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">About this app</Heading>

      <Text>
        This app was built using GC Design System styles and components.
      </Text>

      <Heading tag="h2">Learn more about the GC Design System</Heading>

      <Grid columnsDesktop="1fr 1fr" columnsTablet="1fr 1fr">
        <Card
          className="mb-300"
          cardTitle="Figma library"
          description="View all of our styles and components to use in your designs."
          cardTitleTag="h3"
          badge="Design"
          href="https://www.figma.com/design/mh2maMG2NBtk41k1O1UGHV/GC-Design-System?node-id=4-1006&node-type=CANVAS&t=YFNAbrqORUhggvuC-0"
          imgSrc="/figma.png"
          imgAlt=""
        />
        <Card
          className="mb-300"
          cardTitle="Documentation site"
          description="View all of our styles and components along with guidance on how to use them."
          cardTitleTag="h3"
          badge="Guidance"
          href="https://design-system.canada.ca"
          imgSrc="/docs.png"
          imgAlt=""
        />
        <Card
          className="mb-300"
          cardTitle="GitHub repo"
          description="View our code in Github for all of our components."
          cardTitleTag="h3"
          badge="Code"
          href="https://github.com/cds-snc/gcds-components"
          imgSrc="/github.png"
          imgAlt=""
        />
      </Grid>

      <Heading tag="h2">Special thanks to Paul Craig</Heading>

      <Text>Paul Craig is the original creator of this site...</Text>

      <DateModified>2025-07-16</DateModified>
    </section>
  );
};

export default About;
