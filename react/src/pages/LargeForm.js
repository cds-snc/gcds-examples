import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import {
  GcdsInput,
  GcdsSelect,
  GcdsCheckbox,
  GcdsRadio,
  GcdsFieldset,
  GcdsButton,
  GcdsErrorSummary
} from '@cdssnc/gcds-components-react'

const sharedAttributes = {
  required: true,
  validateOn: "submit"
};

export default function LargeForm() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');
  const [check, setCheck] = useState(0);
  const [radio, setRadio] = useState('');

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (text.trim() !== '' && email.trim !== '' && select !== "" && check > 0 && radio !== '') {
      navigate('/',
        {state: {success: 'delivery'}}
      );
    }
  };

  return (
    <div>
      <Helmet>
        <title>Cupcake delivery</title>
      </Helmet>

      <h1 className="mt-500 mb-200">Cupcake delivery</h1>
      <p className="mb-400">Text talking about cupcakes</p>

      <form noValidate onSubmit={submit}>
        <GcdsErrorSummary></GcdsErrorSummary>

        <GcdsFieldset
          legend='Your information'
          hint='Enter your name and email address to create an account.'
          fieldsetId='user'
        >
          <GcdsInput
            inputId='name'
            label='Full name'
            {...sharedAttributes}
            value={text}
            onGcdsChange={(e) => setText(e.target.value)}
          ></GcdsInput>

          <GcdsInput
            inputId='email'
            label='Email Address'
            type='email'
            {...sharedAttributes}
            value={email}
            onGcdsChange={(e) => setEmail(e.target.value)}
          ></GcdsInput>
        </GcdsFieldset>

        <GcdsFieldset
          legend='Order information'
          hint='Let us know more details about which cupcakes you want.'
          fieldsetId='order'
        >
          <GcdsSelect
            selectId='select'
            label='How many cupcakes'
            defaultValue='Please select an option'
            {...sharedAttributes}
            value={select}
            onGcdsSelectChange={(e) => setSelect(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
          </GcdsSelect>

          <GcdsFieldset
            legend='Cupcake types'
            fieldsetId='fieldset1'
            hint="Select at least one"
            {...sharedAttributes}
          >
            <GcdsCheckbox
              checkboxId='box1'
              label='Chocolate'
              name='check'
              value='box1'
              onGcdsChange={(e) => {e.target.checked ? setCheck(oldValue => oldValue + 1) : setCheck(oldValue => oldValue - 1);}}
            ></GcdsCheckbox>
            <GcdsCheckbox
              checkboxId='box2'
              label='Lemon'
              name='check'
              value='box2'
              onGcdsChange={(e) => {e.target.checked ? setCheck(oldValue => oldValue + 1) : setCheck(oldValue => oldValue - 1);}}
            ></GcdsCheckbox>
            <GcdsCheckbox
              checkboxId='box3'
              label='Strawberry'
              name='check'
              value='box3'
              onGcdsChange={(e) => {e.target.checked ? setCheck(oldValue => oldValue + 1) : setCheck(oldValue => oldValue - 1);}}
            ></GcdsCheckbox>
            <GcdsCheckbox
              checkboxId='box4'
              label='Vanilla classic'
              name='check'
              value='box4'
              onGcdsChange={(e) => {e.target.checked ? setCheck(oldValue => oldValue + 1) : setCheck(oldValue => oldValue - 1);}}
            ></GcdsCheckbox>
          </GcdsFieldset>

          <GcdsFieldset
            legend='Delivery method'
            fieldsetId='fieldset2'
            {...sharedAttributes}
          >
            <GcdsRadio
              radioId='radio1'
              label='Bike'
              name='radio'
              value='radio1'
              onGcdsRadioChange={(e) => setRadio(e.target.value)}
            ></GcdsRadio>
            <GcdsRadio
              radioId='radio2'
              label='Unicorn'
              name='radio'
              value='radio2'
              onGcdsRadioChange={(e) => setRadio(e.target.value)}
            ></GcdsRadio>
            <GcdsRadio
              radioId='radio3'
              label='Paper plane'
              name='radio'
              value='radio3'
              onGcdsRadioChange={(e) => setRadio(e.target.value)}
            ></GcdsRadio>
          </GcdsFieldset>
        </GcdsFieldset>

        <div className='mt-500'>
          <GcdsButton
            type='submit'
          >
            Submit
          </GcdsButton>
        </div>
      </form>
    </div>
  )
}