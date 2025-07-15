import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Components (internal)
import { DateModified, Heading, NextHoliday, Text, Button } from '../components';
import { holidayObject } from '../utils/constants';

const Home: React.FC = () => {
  const currentDate = new Date().getTime();
  const [nextFederal, setNextFederal] = useState<holidayObject>();
  const [nextNationwide, setNextNationwide] = useState<holidayObject>();

  useEffect(() => {
    axios.get('https://canada-holidays.ca/api/v1/holidays')
      .then(({ data }) => {

        // Assign next federal holiday
        let fedAssigned = false;
        let nationwideAssigned = false;
        data.holidays.map((holiday: holidayObject) => {
          const holidayDate = new Date(holiday.date).getTime();

          if (holiday.federal === 1) {
            if (!fedAssigned && holidayDate > currentDate) {
              fedAssigned = true;
              setNextFederal(holiday);
            }
          }

          if (!nationwideAssigned && holidayDate > currentDate) {
            nationwideAssigned = true;
            setNextNationwide(holiday);
          }
        });
      })
      .catch(error => {
        console.error("There was an error fetching the holidays!", error);
      });
  }, []);

  return (
    <section>
      <Heading tag="h1">Canada holidays</Heading>
      <Text>
        This app shows all Canadian holidays and uses GC Design System.
      </Text>

      <Heading tag="h2">Notice a holiday missing?</Heading>
      <Text>
        You can submit a holiday for review. Before submitting an entry, please take a moment to view <Link to="/view-holidays/nationwide">all of the holidays</Link> in our data set. If the holiday in question is still missing after review, you can fill out a quick 2 page form and submit.
      </Text>

      <Button
        buttonRole="start"
        type="link"
        href="/submit-a-holiday"
        className="mb-500"
      >
        Submit your holiday
      </Button>

      <NextHoliday
        display='homepage'
        nextHoliday={{ date: nextFederal?.date as string, nameEn: nextFederal?.nameEn as string }}
        federal
      />

      <NextHoliday
        display="homepage"
        nextHoliday={{ date: nextNationwide?.date as string, nameEn: nextNationwide?.nameEn as string }}
        provincesObservedIn={nextNationwide?.provinces}
      />

      <DateModified>2025-07-15</DateModified>
    </section>
  )
};

export default Home;