import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// Components (internal)
import { DateModified, Details, Heading, Select, Text } from '../components';
import { holidayData } from '../data/holidayData';
import { formatDate } from '../utils/utils';

// Define the type for the holiday data
interface Holiday {
  id: string;
  date: string;
  nameEn: string;
  optional?: boolean;
}

const ViewHolidays = () => {
  const { provinceId } = useParams<{ provinceId: string }>();

  // State variables
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [year, setYear] = useState<string>('2024');
  const [yearsList] = useState<string[]>(['2022', '2023', '2024', '2025', '2026']);
  const [nextHoliday, setNextHoliday] = useState<Holiday | null>(null);
  const [yearAnnouncement, setYearAnnouncement] = useState<string>('');

  // Ref for aria-live year announcement
  const yearAnnouncementRef = useRef<HTMLDivElement>(null);

  // Find data for current province/territory
  const province = holidayData.find(p => p.id === provinceId);

  useEffect(() => {
    if (province) {
      const endpointForYear = `${province.endpoint}&year=${year}`;

      axios.get(endpointForYear)
        .then(({ data }) => {
          const holidaysData = provinceId === 'federal' ? data.holidays : data.province.holidays;
          const nextHolidayData = provinceId === 'federal' ? data.nextHoliday : data.province.nextHoliday;

          setHolidays(holidaysData);
          setNextHoliday(nextHolidayData || null);

          // Update announcement text with the new year
          setYearAnnouncement(`Holidays updated to the year ${year}`);
        })
        .catch(error => {
          console.error("There was an error fetching the holidays!", error);
        });
    }
  }, [province, year, provinceId]);

  if (!province) {
    return <p>Province or territory not found.</p>;
  }

  // Calculate days until next holiday
  const calcNextHoliday = (dateString: string) => {
    const today = new Date();
    const holidayDate = new Date(dateString);

    return Math.floor((holidayDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
  };

  const daysToNextHoliday = nextHoliday ? calcNextHoliday(nextHoliday.date) : null;

  // Update the selected year
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  return (
    <section>
      <Heading tag="h1">{province.name} holidays</Heading>

      <Select
        selectId="select-province-year"
        label="Calendar year"
        hint="Select the year of holidays you want to view."
        name="province-year"
        value={year}
        onInput={handleYearChange}
      >
        {yearsList.map(yearOption => (
          <option key={yearOption} value={yearOption}>
            {yearOption}
          </option>
        ))}
      </Select>

      {nextHoliday && (
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
      )}

      <table className="mb-450">
        <thead>
          <tr className="text-left bb-sm b-default">
            <th className="py-300">
              <Heading tag="h4" marginBottom="0" marginTop="0">Day</Heading>
            </th>
            <th className="py-300">
              <Heading tag="h4" marginBottom="0" marginTop="0">Holiday</Heading>
            </th>
          </tr>
        </thead>
        <tbody>
          {holidays.map(holiday => (
            <tr key={holiday.id} className="bb-sm b-default">
              <td className="sm:pe-400 pe-0 sm:py-300 py-200">
                <span className="d-flex align-items-center">
                  {nextHoliday && holiday.id === nextHoliday.id ? (
                    <img
                      className="d-inline-block me-150"
                      src="/icons/icon-calendar.svg"
                      alt="Calendar icon with a clock in the bottom right corner."
                    />
                  ) : null}
                  <strong>{formatDate(holiday.date)}</strong>
                </span>
              </td>
              <td className="sm:pt-300 pt-0 sm:pb-300 pb-200">
                {holiday.nameEn} {holiday.optional ? ' (optional)' : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {provinceId === 'federal' ? (
        <Details detailsTitle="What are federal holidays?" open>
          <Text marginBottom="0">If your job is regulated by the federal government, you get federal holidays instead of the provincial holidays. Find out more about <Link className="link-default" to="/federal-and-provincial-holidays">who gets federal holidays</Link>.</Text>
        </Details>
      ) : (
        <Details detailsTitle="What are optional holidays?" open>
          <Text marginBottom="0">Optional holidays are commonly observed but not legally mandated. Businesses may choose to opt-in to optional holidays but they don't have to. Find out more about <Link className="link-default" to="/optional-holidays">optional holidays</Link>.</Text>
        </Details>
      )}

      <DateModified>2024-08-28</DateModified>

      {/* Hidden aria-live region for announcing year updates */}
      <p ref={yearAnnouncementRef} aria-live="polite" className="sr-only">
        {yearAnnouncement}
      </p>
    </section>
  );
};

export default ViewHolidays;