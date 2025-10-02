import React, { useEffect } from 'react';
import {
  Text,
  Select,
  Details,
  Button,
  Input,
  DateInput,
  Textarea,
  Fieldset,
  FileUploader,
  RadioGroup,
  Stepper,
  Checkboxes,
  Radios
} from '../../components';
import { provinces } from '../../utils/constants';

import { GcdsLink, GcdsErrorSummary } from '@cdssnc/gcds-components-react';

interface StepOneProps {
  formdata: {
    holidayName: string,
    newHoliday: string,
    holidayDate: string,
    learnOfHoliday: string,
    holidayType: Array<string>,
    otherHoliday: string,
    province: string,
    image: string[] | null,
  };
  handleInputChange: (e: any) => void;
  focusHeading: boolean;
};

const StepOne: React.FC<StepOneProps> = ((props) => {

  const { formdata, handleInputChange, focusHeading } = props;

  const newHolidayOptions = [
    { "label": "Yes", "id": "radio1", "value": "yes" },
    { "label": "No", "id": "radio2", "value": "no" },
    { "label": "Not sure", "id": "radio3", "value": "notsure" }
  ];

  useEffect(() => {
    // only focus the stepper heading when returning from step 2
    if (focusHeading) {
      setTimeout(() => {
        document.querySelector('gcds-stepper')?.focus();
      }, 150);
    }
  }, []);

  return (
    <>
      <Stepper
        tag="h2"
        currentStep={1}
        totalSteps={2}
        tabIndex={-1}
        className="mb-600"
      >
        About this holiday
      </Stepper>

      <GcdsErrorSummary listen />

      <Fieldset
        legend="General holiday information"
        legendSize='h3'
      >
        <Input
          inputId="holidayName"
          label="Name of holiday"
          name="holidayName"
          required
          size={20}
          className="mt-300 mb-225"
          validateOn="submit"
          value={formdata.holidayName}
          onInput={handleInputChange}
        />

        <Radios
          legend="Is this a new holiday (created within the past year)?"
          name="newHoliday"
          options={newHolidayOptions}
          onInput={handleInputChange}
          validateOn="submit"
          value={formdata.newHoliday}
          required
        ></Radios>

        <DateInput
          legend="When will this holiday occur?"
          hint="Choose the month, then enter the day and year."
          name="holidayDate"
          format="full"
          validateOn="submit"
          className="mb-225"
          required
          value={formdata.holidayDate}
          onInput={handleInputChange}
        >
        </DateInput>

        <Textarea
          label="How did you learn of this holiday?"
          textareaId="learnOfHoliday"
          name="learnOfHoliday"
          value={formdata.learnOfHoliday}
          onInput={handleInputChange}
        />
      </Fieldset>

      <Fieldset
        legend="Type of holiday"
        legendSize='h3'
        className="mt-600"
      >
        {/* Implementation of new gcds-checkboxes component */}
        <Checkboxes
          legend="What type of holiday is this?"
          hint="Select all that apply"
          name="holidayType"
          validateOn="submit"
          value={formdata.holidayType}
          required
          onInput={handleInputChange}
          options={[
            {
              label: "Federal",
              id: "federal",
              value: "federal"
            },
            {
              label: "National",
              id: "national",
              value: "national"
            },
            {
              label: "Other",
              id: "other",
              value: "other"
            }
          ]}
        ></Checkboxes>

        <Details
          detailsTitle="What are federal holidays?"
          className="mb-225"
        >
          {/* The page this will link to hasn't been created yet */}
          <Text marginBottom="0">
            If your job is regulated by the federal government, you get federal holidays instead of the provincial holidays. Find out more about <GcdsLink href="/federal-and-provincial-holidays">who gets federal holidays</GcdsLink>.
          </Text>
        </Details>

        {formdata.holidayType.includes('other') &&
          <Select
            selectId="province"
            label="If this holiday occurs in a specific province or territory, select the location."
            name="province"
            hint="If this question does not apply, select 'Does not apply'."
            defaultValue="Select option"
            validateOn="submit"
            required
            value={formdata.province}
            onInput={handleInputChange}
          >
            {Object.keys(provinces).map(key => (
              <option key={key} value={key}>
                {provinces[key]}
              </option>
            ))}
          </Select>
        }

        <FileUploader
          label="Upload an image of this holiday"
          uploaderId="holidayImage"
          name="image"
          className="mb-225"
          {...(formdata.image ? { value: formdata.image } : {})}
          onChange={handleInputChange}
        />
      </Fieldset>

      <Button
        type="submit"
        buttonRole="primary"
      >
        Next step
      </Button>
    </>
  )
});

export default StepOne;