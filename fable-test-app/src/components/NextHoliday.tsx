import React from 'react';
import { Text } from '../components';

interface NextHolidayProps {
  display?: 'banner' | 'table';
  isCurrentHoliday? : boolean;
  nextHoliday: {
    date: string;
    nameEn: string;
  } | null;
}

const NextHoliday: React.FC<NextHolidayProps> = ({
  display = 'banner',
  isCurrentHoliday = false,
  nextHoliday
}) => {
  // Calculate days until the next holiday
  const calcNextHoliday = (dateString: string) => {
    const today = new Date();
    const holidayDate = new Date(dateString);

    return Math.floor((holidayDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
  };

  const daysToNextHoliday = nextHoliday ? calcNextHoliday(nextHoliday.date) : null;

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
        <strong>Next holiday is {nextHoliday.nameEn} — that's {daysToNextHoliday} days away</strong>
      </Text>
    </div>
  ) : isCurrentHoliday ? (
      <img
        className="d-inline-block me-150"
        src="/icons/icon-calendar.svg"
        alt="Calendar icon with a clock in the bottom right corner."
      />
  ) : null;
};

export default NextHoliday;