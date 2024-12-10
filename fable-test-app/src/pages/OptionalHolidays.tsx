import React from 'react';

// Components (internal)
import { DateModified, Heading, Text } from '../components';

const OptionalHolidays: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Optional holidays in Canada</Heading>
      <Text>Optional holidays are commonly observed but not legally mandated. Businesses may choose to opt-in to optional holidays but they don't have to. If your workplace doesn't observe an optional holiday, it is treated just like any other work day.</Text>

      <Heading tag="h2">Examples of optional holidays</Heading>
      <ul className='list-disc'>
        <li>
          <Text marginBottom='100'>The August Civic Holiday is not a statutory holiday in Ontario, but many businesses still give their employees the day off.</Text>
        </li>
        <li>
          <Text>Boxing Day is only a statutory holiday in Ontario. For all other provinces in Canada, Boxing Day is an optional holiday.</Text>
        </li>
      </ul>

      <Heading tag="h3">How are statutory holidays different from optional holidays?</Heading>
      <Text>Statutory holidays are government-legislated and they are mandatory. On a statutory holiday, your employer is legally required to:</Text>
      <ul className='list-disc'>
        <li>
          <Text marginBottom='100'>give you the day off, or</Text>
        </li>
        <li>
          <Text>pay you more for working on the holiday</Text>
        </li>
      </ul>
      <Text>Employers may observe one or more optional holidays as well, but they are not obligated to do anything. Legally speaking, optional holidays are just normal workdays.</Text>

      <Heading tag="h2">Why do employers observe optional holidays?</Heading>
      <Text>Employers might observe optional holidays for various reasons:</Text>
      <ul className='list-disc'>
        <li>
          <Text marginBottom='100'>If you are unionized, your collective agreement may include optional holidays not legislated by your province</Text>
        </li>
        <li>
          <Text marginBottom='100'>Some businesses shut down on days that schools and post offices are closed</Text>
        </li>
        <li>
          <Text>Businesses may have traditionally observed an optional holiday, and it is now an expectation</Text>
        </li>
      </ul>
      <Text>Whatever the case may be, optional holidays are never guaranteed. Always check with your employer to make sure if optional holidays apply to you.</Text>

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default OptionalHolidays;