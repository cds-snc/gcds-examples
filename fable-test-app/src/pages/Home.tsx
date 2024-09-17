import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components (internal)
import { DateModified, Heading, NextHoliday, Text, Button } from '../components';
import { holidayObject } from '../utils/constants';

const Home: React.FC = () => {
  const currentDate = new Date("2024-02-13").getTime();
  const [nextFederal, setNextFederal] = useState<holidayObject>();
  const [nextNationwide, setNextNationwide] = useState<holidayObject>();

  useEffect(() => {
    axios.get('https://canada-holidays.ca/api/v1/holidays')
    .then(({ data }) => {

      // Assign next federal holiday
      let fedAssigned = false;
      let nationwideAssigned = false;
      data.holidays.map((holiday: holidayObject) => {
        const holidayDate = new Date (holiday.date).getTime();
        
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

      <Button
        buttonRole="primary"
        type="link"
        href="/view-holidays/nationwide"
        className="mb-500"
      >
        View all holidays
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

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default Home;