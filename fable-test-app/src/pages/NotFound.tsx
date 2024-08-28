import React from 'react';

// Components (internal)
import { DateModified, Heading, Text } from '../components';

const NotFound: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Page could not be found</Heading>
      <Text>Check you've entered the correct web address.</Text>

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default NotFound;