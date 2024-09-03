import React from 'react';

// Components (internal)
import { DateModified, Heading } from '../components';

const ViewHolidays: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Nationwide holidays</Heading>

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default ViewHolidays;