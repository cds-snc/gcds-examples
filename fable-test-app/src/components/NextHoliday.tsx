import React from 'react';
import { Text, Heading } from '../components';

import { Provinces } from '../utils/constants';

interface NextHolidayProps {
  display?: 'banner' | 'table' | 'homepage';
  isCurrentHoliday? : boolean;
  nextHoliday: {
    date: string;
    nameEn: string;
  } | null;
  federal?: boolean;
  provincesObservedIn?: Provinces[];
}

const NextHoliday: React.FC<NextHolidayProps> = ({
  display = 'banner',
  isCurrentHoliday = false,
  nextHoliday,
  federal,
  provincesObservedIn
}) => {
  // Calculate days until the next holiday
  const calcNextHoliday = (dateString: string) => {
    const today = new Date();
    const holidayDate = new Date(dateString);

    return Math.floor((holidayDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
  };

  // Get long version of date
  const formatDate = (dateString: string) => {
    const holidayDate = new Date(dateString);

    return `${holidayDate.toLocaleString('default', { month: 'long' })} ${holidayDate.getUTCDate()}`;
  };

  // Create formatted list of <abbr> elements for provinces
  const getObservedInProvinces = () => {
    if (provincesObservedIn) {
      if (provincesObservedIn.length === 1) {
        return <abbr title={provincesObservedIn[0].nameEn}>{provincesObservedIn[0].id}</abbr>;
      } else {
        return provincesObservedIn.map((value, i: number) => <span key={i}>
          {i === provincesObservedIn.length - 1 && " and "}
          <abbr title={value.nameEn}>{value.id}</abbr>{i != provincesObservedIn.length - 1 ? ", " : "."}
        </span>);
      }
    }
  };

  const daysToNextHoliday = nextHoliday ? calcNextHoliday(nextHoliday.date) : null;
  const dayOrDays = daysToNextHoliday === 1 ? 'day' : 'days';

  if (!nextHoliday) {
    return null;
  }

  return display === 'banner' ? (
    <div className="d-flex bg-primary md:align-items-center align-items-start text-light mb-450 md:px-450 px-250 py-200">
      <img
        className="d-inline-block me-400"
        src="/icons/icon-calendar.svg"
        alt="Calendar icon with a clock in the bottom right corner."
      />
      <Text textRole="light" marginBottom="0">
        <strong>Next holiday is {nextHoliday.nameEn} — that's {daysToNextHoliday} {dayOrDays} away</strong>
      </Text>
    </div>
  ) : isCurrentHoliday ? (
      <img
        className="d-inline-block me-150"
        src="/icons/icon-calendar.svg"
        alt="Calendar icon with a clock in the bottom right corner."
      />
  ) : display ==='homepage' ? (
    <section className={`pt-700 pb-700 mb-300 next-holiday-homepage ${federal ? `img-federal` : 'img-nonfederal'}`}>
      <div className="bg-light md:px-450 px-250 d-block pt-100 pb-500">
        <Heading tag="h2">
          {federal ?
            <span className="font-secondary">Next federal statutory holiday</span>
          :
            <span className="font-secondary">Next non-federal statutory holiday</span>
          }
        </Heading>
        <strong className="d-block mb-100 font-h4">
          {nextHoliday.nameEn}
        </strong>
        <div className="font-h5 font-medium">
          <time>
            {formatDate(nextHoliday.date)}
          </time>
          {!federal ? 
            <p className="d-inline font-h5 font-medium">
              &nbsp;- Observed in {getObservedInProvinces()}
            </p>
          :
            null
          }
        </div>
      </div>
      <div className="d-flex bg-primary md:align-items-center align-items-center text-light md:px-450 px-250 py-200">
        <Text textRole="light" marginBottom="0">
          <strong>That's in {daysToNextHoliday} {dayOrDays}!</strong>
        </Text>
        <img
          className="d-inline-block ms-400"
          src="/icons/icon-calendar.svg"
          alt="Calendar icon with a clock in the bottom right corner."
        />
      </div>
    </section>
  ) : null;
};

export default NextHoliday;