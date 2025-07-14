import React from 'react';

// Components (internal)
import { DateModified, Heading, Text, Button } from '../components';

const SubmitHoliday: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Submit a holiday</Heading>
      <Text marginBottom="600">
        This is a form you can use to submit a holiday that we're missing. There's a few steps involved to showcase our form components.
      </Text>

      <Heading tag="h2">All holiday submissions are subject to review</Heading>
      <Text marginBottom="600">
        The holiday you submitted will need to be reviewed by team and added to the application if it meets all of the criteria we are looking for.      </Text>

  <Button
    type="link"
    buttonId="submitHolidayStart"
    buttonRole="primary"
    href='/submit-a-holiday-form'
  >
    Submit your holiday
  </Button>
      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default SubmitHoliday;