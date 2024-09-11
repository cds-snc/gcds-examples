import { forwardRef, useEffect } from 'react';
import { Text, Button, Input, Stepper } from '../../components';

import { GcdsErrorSummary } from '@cdssnc/gcds-components-react';

interface StepTwoProps {
  formdata: {
    fullname: string,
    email: string,
  };
  handleInputChange: (e: any) => void;
  previousStep: (e: any) => void;
};

const StepTwo = forwardRef<HTMLGcdsStepperElement, StepTwoProps>(( props, heading) => {

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
    <Stepper
      tag="h2"
      currentStep={2}
      totalSteps={2}
      ref={heading}
      tabIndex={-1}
    >
      Contact information
    </Stepper>

    <Text>
      We may want to contact you if we need any more information, or to let you know that we"ve successfully added your holiday to our app!
    </Text>

    <GcdsErrorSummary listen />

    <Input
      inputId="fullname"
      label="First and last name"
      name="fullname"
      validateOn="submit"
      type="text"
      required
      value={formdata.fullname}
      onInput={handleInputChange}
    />
    <Input
      inputId="email"
      label="Email address"
      name="email"
      type="email"
      validateOn="submit"
      required
      value={formdata.email}
      onInput={handleInputChange}
    />

    <Button
      buttonRole="secondary"
      className="me-500"
      onGcdsClick={previousStep}
      type="button"
    >
      Previous step
    </Button>

    <Button
      type="submit"
      buttonRole="primary"
    >
      Next step
    </Button>
  </>
  );
});

export default StepTwo;