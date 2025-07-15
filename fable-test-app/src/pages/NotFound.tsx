import React from 'react';
import { Link } from 'react-router-dom';

// Components (internal)
import { DateModified, Heading, Text } from '../components';

const NotFound: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Page could not be found</Heading>
      <Text>Check you've entered the correct web address or  <Link className="link-default" to="/">go back to the homepage</Link>.</Text>

      <DateModified>2025-07-15</DateModified>
    </section>
  )
};

export default NotFound;