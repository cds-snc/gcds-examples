import React, { useEffect } from 'react';
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

const StepTwo: React.FC<StepTwoProps> = ((props) => {

  const { formdata, handleInputChange, previousStep } = props;

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('gcds-stepper')?.focus()
    }, 150);
  }, []);

  return (
    <>
    <Stepper
      tag="h2"
      currentStep={2}
      totalSteps={2}
      tabIndex={-1}
      className="mb-600"
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
      className="me-600"
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