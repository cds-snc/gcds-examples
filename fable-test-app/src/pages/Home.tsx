import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components (internal)
import { DateModified, Heading, NextHoliday, Text, Button } from '../components';

type Provinces = {
  id: string;
  nameEn: string;
}

type holidayObject = {
  id: number;
  date: string;
  nameEn: string;
  nameFr: string;
  provinces: Provinces[];
  federal: number;
}

const Home: React.FC = () => {
  const currentDate = new Date().getTime();
  const [nextFederal, setNextFederal] = useState<holidayObject>();
  const [nextNationwide, setNextNationwide] = useState<holidayObject>();

  useEffect(() => {
    axios.get('https://canada-holidays.ca/api/v1/holidays')
    .then(({ data }) => {

      // Assign next federal holiday
      let fedAssigned = false;
      data.holidays.map((holiday: holidayObject) => {
        if (holiday.federal === 1) {
          const holidayDate = new Date (holiday.date).getTime();
          if (holidayDate > currentDate && !fedAssigned) {
            fedAssigned = true;
            setNextFederal(holiday);
          }
        }
      });

      // Assign next nationwide holiday
      let nationwideAssigned = false;
      data.holidays.map((holiday: holidayObject) => {
        const holidayDate = new Date (holiday.date).getTime();
        if (holidayDate > currentDate && !nationwideAssigned) {
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
        observedIn={nextNationwide?.provinces}
      />

      <DateModified>2024-08-28</DateModified>
    </section>
  )
};

export default Home;