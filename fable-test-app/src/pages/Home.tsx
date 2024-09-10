import React from 'react';

// Components (internal)
import { DateModified, Heading, Text } from '../components';

const Home: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Canada holidays</Heading>
      <Text>
        This app shows all Canadian holidays and uses GC Design System.
      </Text>

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default Home;