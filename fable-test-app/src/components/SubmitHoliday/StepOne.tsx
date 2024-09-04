import { forwardRef, useEffect } from 'react';
import { Text } from '../../components';

import {
  GcdsButton,
  GcdsDateInput,
  GcdsFieldset,
  GcdsInput,
  GcdsRadioGroup,
  GcdsStepper,
  GcdsTextarea,
  GcdsCheckbox,
  GcdsDetails,
  GcdsSelect,
  GcdsFileUploader,
  GcdsLink,
  GcdsErrorSummary
}
from '@cdssnc/gcds-components-react';

interface StepOneProps {
  formdata: {
    holidayname: string,
    newholiday: string,
    holidaydate: string,
    learnofholiday: string,
    holidaytype: {
      federal: boolean,
      national: boolean,
      other: boolean
    },
    otherholiday: string,
    province: string,
    image: string[] | null,
  };
  handleInputChange: (e: any) => void;
  focusHeading: boolean;
};

const StepOne = forwardRef<HTMLGcdsStepperElement, StepOneProps>(( props, heading) => {

  const { formdata, handleInputChange, focusHeading } = props;

  const newHolidayOptions = [
    { "label": "Yes", "id": "radio1", "value": "yes", "checked": formdata.newholiday === "yes"},
    { "label": "No", "id": "radio2", "value": "no", "checked": formdata.newholiday === "no"},
    { "label": "Not sure", "id": "radio3", "value": "notsure", "checked": formdata.newholiday === "notsure"}
  ];

  const provinces: any = {
    AB: "Alberta",
    BC: "British Columbia",
    MB: "Manitoba",
    NB: "New Brunswick",
    NL: "Newfoundland and Labrador",
    NS: "Nova Scotia",
    NT: "Northwest Territories",
    NU: "Nunavut",
    ON: "Ontario",
    PE: "Prince Edward Island",
    QC: "Québec",
    SK: "Saskatchewan",
    YT: "Yukon"
  };

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
      <GcdsStepper
        tag="h2"
        currentStep={1}
        totalSteps={2}
        ref={heading}
        tabIndex={-1}
      >
        About this holiday
      </GcdsStepper>

      <GcdsErrorSummary listen />

      <GcdsFieldset
        legend="General holiday information"
        fieldsetId="holdayInformation"
      >
        <GcdsInput
          inputId="holidayname"
          label="Name of holiday"
          name="holidayname"
          required
          size={20}
          className="mt-400 mb-300"
          validateOn="submit"
          value={formdata.holidayname}
          onInput={handleInputChange}
        />

        <GcdsFieldset
          legend="Is this a new holiday (created within the past year)?"
          fieldsetId="newHoliday"
          className="mb-300"
          validateOn="submit"
          required
        >
          <GcdsRadioGroup
            name="newholiday"
            options={newHolidayOptions}
            onGcdsChange={handleInputChange}
          >
          </GcdsRadioGroup>
        </GcdsFieldset>

        <GcdsDateInput
          legend="When will this holiday occur?"
          hint="Choose the month, then enter the day and year."
          name="holidaydate"
          format="full"
          validateOn="submit"
          className="mb-300"
          required
          value={formdata.holidaydate}
          onInput={handleInputChange}
        >
        </GcdsDateInput>

        <GcdsTextarea
          label="How did you learn of this holiday?"
          textareaId="textarea"
          name="learnofholiday"
          value={formdata.learnofholiday}
          onInput={handleInputChange}
        />
      </GcdsFieldset>

      <GcdsFieldset
        legend="Type of holiday"
        fieldsetId="holidayType"
        className="mt-500"
      >
        <GcdsFieldset
          legend="What type of holiday is this?"
          hint="Select all that apply"
          fieldsetId="typeofholiday"
          validateOn="submit"
          required
          className="mt-400"
        >
          <GcdsCheckbox
            checkboxId="federal"
            label="Federal"
            name="holidaytype"
            value="federal"
            {...(formdata.holidaytype.federal ? {checked: true} : {})}
            onInput={handleInputChange}
          >
          </GcdsCheckbox>
          <GcdsCheckbox
            checkboxId="national"
            label="National"
            name="holidaytype"
            value="national"
            {...(formdata.holidaytype.national ? {checked: true} : {})}
            onInput={handleInputChange}
          >
          </GcdsCheckbox>
          <GcdsCheckbox
            checkboxId="other"
            label="Other (specific provinces and/or territories)"
            name="holidaytype"
            value="other"
            {...(formdata.holidaytype.other ? {checked: true} : {})}
            onInput={handleInputChange}
          >
          </GcdsCheckbox>
        </GcdsFieldset>
        <GcdsDetails
          detailsTitle="What are federal holidays?"
          className="mb-300"
        >
          {/* The page this will link to hasn't been created yet */}
          <Text marginBottom="0">
            If your job is regulated by the federal government, you get federal holidays instead of the provincial holidays. Find out more about <GcdsLink href="#">who gets federal holidays</GcdsLink>.
          </Text>
        </GcdsDetails>

        {formdata.holidaytype.other &&
          <GcdsSelect
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
          </GcdsSelect>
        }

        <GcdsFileUploader
          label="Upload an image of this holiday"
          uploaderId="image"
          name="image"
          className="mb-300"
          {...(formdata.image ? {value: formdata.image} : {})}
          onChange={handleInputChange}
        />
      </GcdsFieldset>

      <GcdsButton
        type="submit"
      >
        Next step
      </GcdsButton>
    </>
  )
});

export default StepOne;