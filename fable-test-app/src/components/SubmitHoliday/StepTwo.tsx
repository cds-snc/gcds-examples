import { forwardRef, useEffect } from 'react';
import { Text } from '../../components';

import {
  GcdsButton,
  GcdsInput,
  GcdsStepper,
  GcdsErrorSummary
}
from '@cdssnc/gcds-components-react';

interface StepOneProps {
  formdata: {
    fullname: string,
    email: string,
  };
  handleInputChange: (e: any) => void;
  previousStep: (e: any) => void;
};

const StepTwo = forwardRef<HTMLGcdsStepperElement, StepOneProps>(( props, heading) => {

  const { formdata, handleInputChange, previousStep } = props;

  useEffect(() => {
    if(heading && typeof heading !== "function" && heading.current) {
      setTimeout(() => {
        heading.current?.focus();
      }, 150);
    }
  }, []);

  return (
    <>
    <GcdsStepper
      tag="h2"
      currentStep={2}
      totalSteps={2}
      ref={heading}
      tabIndex={-1}
    >
      Contact information
    </GcdsStepper>

    <Text>
      We may want to contact you if we need any more information, or to let you know that we"ve successfully added your holiday to our app!
    </Text>

    <GcdsErrorSummary listen />

    <GcdsInput
      inputId="fullname"
      label="First and last name"
      name="fullname"
      validateOn="submit"
      type="text"
      required
      value={formdata.fullname}
      onInput={handleInputChange}
    />
    <GcdsInput
      inputId="email"
      label="Email address"
      name="email"
      type="email"
      validateOn="submit"
      required
      value={formdata.email}
      onInput={handleInputChange}
    />

    <GcdsButton
      buttonRole="secondary"
      className="me-500"
      onGcdsClick={previousStep}
    >
      Previous step
    </GcdsButton>

    <GcdsButton
      type="submit"
    >
      Next step
    </GcdsButton>
  </>
  );
});

export default StepTwo;