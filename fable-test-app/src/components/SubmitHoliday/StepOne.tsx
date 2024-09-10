import { forwardRef, useEffect } from 'react';
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
  Checkbox,
  RadioGroup,
  Stepper
} from '../../components';
import { provinces } from '../../utils/constants';

import { GcdsLink, GcdsErrorSummary } from '@cdssnc/gcds-components-react';

interface StepOneProps {
  formdata: {
    holidayName: string,
    newHoliday: string,
    holidayDate: string,
    learnOfHoliday: string,
    holidayType: {
      federal: boolean,
      national: boolean,
      other: boolean
    },
    otherHoliday: string,
    province: string,
    image: string[] | null,
  };
  handleInputChange: (e: any) => void;
  focusHeading: boolean;
};

const StepOne = forwardRef<HTMLGcdsStepperElement, StepOneProps>(( props, heading) => {

  const { formdata, handleInputChange, focusHeading } = props;

  const newHolidayOptions = [
    { "label": "Yes", "id": "radio1", "value": "yes", "checked": formdata.newHoliday === "yes"},
    { "label": "No", "id": "radio2", "value": "no", "checked": formdata.newHoliday === "no"},
    { "label": "Not sure", "id": "radio3", "value": "notsure", "checked": formdata.newHoliday === "notsure"}
  ];

  useEffect(() => {
    // only focus the stepper heading when returning from step 2
    if(heading && typeof heading !== "function" && heading.current && focusHeading) {
      setTimeout(() => {
        heading.current?.focus();
      }, 150);
    }
  }, []);

  return (
    <>
      <Stepper
        tag="h2"
        currentStep={1}
        totalSteps={2}
        ref={heading}
        tabIndex={-1}
      >
        About this holiday
      </Stepper>

      <GcdsErrorSummary listen />

      <Fieldset
        legend="General holiday information"
        fieldsetId="holdayInformation"
      >
        <Input
          inputId="holidayName"
          label="Name of holiday"
          name="holidayName"
          required
          size={20}
          className="mt-400 mb-300"
          validateOn="submit"
          value={formdata.holidayName}
          onInput={handleInputChange}
        />

        <Fieldset
          legend="Is this a new holiday (created within the past year)?"
          fieldsetId="newHoliday"
          className="mb-300"
          validateOn="submit"
          required
        >
          <RadioGroup
            name="newHoliday"
            options={newHolidayOptions}
            onGcdsChange={handleInputChange}
          >
          </RadioGroup>
        </Fieldset>

        <DateInput
          legend="When will this holiday occur?"
          hint="Choose the month, then enter the day and year."
          name="holidayDate"
          format="full"
          validateOn="submit"
          className="mb-300"
          required
          value={formdata.holidayDate}
          onInput={handleInputChange}
        >
        </DateInput>

        <Textarea
          label="How did you learn of this holiday?"
          textareaId="textarea"
          name="learnOfHoliday"
          value={formdata.learnOfHoliday}
          onInput={handleInputChange}
        />
      </Fieldset>

      <Fieldset
        legend="Type of holiday"
        fieldsetId="holidayType"
        className="mt-500"
      >
        <Fieldset
          legend="What type of holiday is this?"
          hint="Select all that apply"
          fieldsetId="typeofholiday"
          validateOn="submit"
          required
          className="mt-400"
        >
          <Checkbox
            checkboxId="federal"
            label="Federal"
            name="holidayType"
            value="federal"
            {...(formdata.holidayType.federal ? {checked: true} : {})}
            onInput={handleInputChange}
          >
          </Checkbox>
          <Checkbox
            checkboxId="national"
            label="National"
            name="holidayType"
            value="national"
            {...(formdata.holidayType.national ? {checked: true} : {})}
            onInput={handleInputChange}
          >
          </Checkbox>
          <Checkbox
            checkboxId="other"
            label="Other (specific provinces and/or territories)"
            name="holidayType"
            value="other"
            {...(formdata.holidayType.other ? {checked: true} : {})}
            onInput={handleInputChange}
          >
          </Checkbox>
        </Fieldset>
        <Details
          detailsTitle="What are federal holidays?"
          className="mb-300"
        >
          {/* The page this will link to hasn't been created yet */}
          <Text marginBottom="0">
            If your job is regulated by the federal government, you get federal holidays instead of the provincial holidays. Find out more about <GcdsLink href="/federal-and-provincial-holidays">who gets federal holidays</GcdsLink>.
          </Text>
        </Details>

        {formdata.holidayType.other &&
          <Select
            selectId="select-province"
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
          uploaderId="image"
          name="image"
          className="mb-300"
          {...(formdata.image ? {value: formdata.image} : {})}
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