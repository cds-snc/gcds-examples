import React from 'react';

// Components (internal)
import { DateModified, Heading } from '../components';

const About: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">About this app</Heading>

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default About;