import { forwardRef, useEffect } from 'react';

import { GcdsButton } from '@cdssnc/gcds-components-react';

const Success = forwardRef<HTMLGcdsStepperElement>((_, heading) => {

  useEffect(() => {
    if(heading && typeof heading !== "function" && heading.current) {
      setTimeout(() => {
        heading.current?.focus();
      }, 50);
    }
  }, []);

  return (
    <>
      {/* <GcdsNotice
        noticeTitle="Your holiday request was submitted."
        type="success"
        ref={heading}
      >
        <Text marginBottom="0">
          We hope to add this holiday to our app soon.
        </Text>
      </GcdsNotice> */}

      <GcdsButton
        buttonRole="secondary"
        className="me-500"
        type="link"
        href="/"
      >
        Back to homepage
      </GcdsButton>
      
      <GcdsButton
        type="link"
        href="/submit-a-holiday"
      >
        Submit another holiday
      </GcdsButton>
    </>
  );
});

export default Success;