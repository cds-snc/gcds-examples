import React, { useState } from 'react';

// Components (internal)
import {
  DateModified,
  Heading,
  Text,
  StepOne,
  StepTwo,
  Success
} from '../components';

const SubmitHoliday: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    holidayName: '',
    newHoliday: '',
    holidayDate: '',
    learnOfHoliday: '',
    holidayType: [],
    otherHoliday: '',
    province: '',
    image: null,
    fullname: '',
    email: ''
  });
  const [focusHeading, setFocusHeading] = useState(false);

  // Handle form inputs to set into state
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  };

  const previousStep = () => {
    setFocusHeading(true);
    setStep(step - 1);
    setTimeout(() => {
      document.querySelector('gcds-stepper')?.focus();
      setFocusHeading(false);
    }, 50);
  };

  // Errors array to check if all fields validated properly
  let errors: (EventTarget | null)[] = [];

  // Error handling
  document.addEventListener('gcdsError', (e) => {
    if (!errors.includes(e.target)) {
      errors.push(e.target);
    }
  })
  document.addEventListener('gcdsValid', (e) => {
    if (errors.includes(e.target)) {
      errors.splice(errors.indexOf(e.target), 1)
    }
  })

  return (
    <section>
      <Heading tag="h1">Submit a holiday</Heading>
      <Text marginBottom="600">
        This is a form you can use to submit a holiday that we're missing. There's a few steps involved to showcase our form components.
      </Text>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTimeout(() => {
            if (errors.length == 0) {
              setStep(step + 1);
            }
          }, 50);
        }}
      >
        {step === 1 ?
          <StepOne
            formdata={formData}
            focusHeading={focusHeading}
            handleInputChange={handleInputChange}
          />
        : 
        step === 2 ?
          <StepTwo
            formdata={formData}
            handleInputChange={handleInputChange}
            previousStep={previousStep}
          />
         :
          <Success />
        }
      </form>

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default SubmitHoliday;