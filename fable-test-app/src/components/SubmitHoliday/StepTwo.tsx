import React, { useEffect, useState } from "react";
import { Text, Button, Input, Stepper, Alert } from "../../components";

import { GcdsErrorSummary } from "@gcds-core/components-react";

interface StepTwoProps {
  formdata: {
    fullname: string;
    email: string;
  };
  handleInputChange: (e: any) => void;
  previousStep: (e: any) => void;
}

const StepTwo: React.FC<StepTwoProps> = (props) => {
  const { formdata, handleInputChange, previousStep } = props;
  const [alertVisible, setAlertVisible] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("gcds-stepper")?.focus();
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
        We may want to contact you if we need any more information, or to let
        you know that we"ve successfully added your holiday to our app!
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
        onGcdsClick={(ev) => {
          ev.preventDefault();
          setAlertVisible(alertVisible + 1);
        }}
      >
        Submit
      </Button>
      {alertVisible === 1 && (
        <Alert
          alertRole="danger"
          heading="We couldn't submit your holiday"
          hideCloseBtn={true}
          className="mt-500"
        >
          <p>
            Your internet connection dropped or timed out. Don't worry—your information hasn't been lost. Please wait a moment and try clicking Submit again.
          </p>
        </Alert>
      )}
      {alertVisible > 1 && (
        <Alert
          alertRole="success"
          heading="Success: Holiday submitted"
          className="mt-500"
        >
          <p>
            We've received your holiday submission, it will be added to our list of holidays within 24 hours.
          </p>
        </Alert>
      )}
    </>
  );
};

export default StepTwo;
