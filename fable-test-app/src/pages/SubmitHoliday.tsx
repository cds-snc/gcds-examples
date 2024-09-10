import React from 'react';

// Components (internal)
import { DateModified, Heading, Text } from '../components';

const SubmitHoliday: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Submit a holiday</Heading>
      <Text>
        This is a form you can use to submit a holiday that we're missing. There's a few steps involved to showcase our form components.
      </Text>

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default SubmitHoliday;