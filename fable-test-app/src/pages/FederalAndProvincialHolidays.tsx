import React from 'react';

// Components (internal)
import { DateModified, ExternalLink, Heading, Text } from '../components';

const FederalAndProvincialHolidays: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Federal and provincial holidays</Heading>
      <Text>Most Canadian workers get provincial holidays off, not federal ones.</Text>

      <Heading tag="h2">Who federal holidays apply to</Heading>
      <Text>All jobs in Canada are regulated by a provincial government or the federal government. If your job is regulated by the federal government, you get federal holidays instead of the provincial holidays.</Text>
      <Text>Approximately 6 % of Canadians work in federally-regulated industries. Some examples are:</Text>
      <ul className='list-disc'>
        <li>
          <Text marginBottom='100'>banks</Text>
        </li>
        <li>
          <Text marginBottom='100'>airlines</Text>
        </li>
        <li>
          <Text marginBottom='100'>post offices</Text>
        </li>
        <li>
          <Text>the federal civil service</Text>
        </li>
      </ul>
      <Text>You can check here for <ExternalLink href="https://www.canada.ca/en/services/jobs/workplace/federally-regulated-industries.html" external>the full list</ExternalLink>.</Text>

      <Heading tag="h2">Are provincial and federal holidays the same?</Heading>
      <Text>Sometimes provincial holidays are the same as federal holidays — like Christmas, or New Year's — but not always.</Text>
      <Text>For example, the province of Ontario does not observe Remembrance Day, which means on November 11, post offices are closed but schools are open.</Text>
      <Text>Ontario observes Family Day but the federal government does not. So that means on the third Monday in February, schools are closed but post offices will be open.</Text>

      <DateModified>2025-07-16</DateModified>
    </section>
  )
};

export default FederalAndProvincialHolidays;