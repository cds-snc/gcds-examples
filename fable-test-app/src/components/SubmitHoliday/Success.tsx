import { useEffect } from 'react';

import { Button, Text } from '../../components';
import { GcdsNotice } from '@cdssnc/gcds-components-react';

const Success: React.FC = () => {

  useEffect(() => {

    setTimeout(() => {
      document.querySelector('gcds-notice')?.focus();
    }, 50);

  }, []);

  return (
    <>
      <GcdsNotice
        noticeTitle="Your holiday request was submitted."
        type="success"
        noticeTitleTag='h2'
        className='mb-600'
      >
        <Text marginBottom="0">
          We hope to add this holiday to our app soon.
        </Text>
      </GcdsNotice>

      <Button
        buttonRole="secondary"
        className="me-600"
        type="link"
        href="/"
      >
        Back to homepage
      </Button>
      
      <Button
        type="link"
        buttonRole="primary"
        href="/submit-a-holiday"
      >
        Submit another holiday
      </Button>
    </>
  );
};

export default Success;