import { useState, useEffect } from 'react';
import axios from 'axios';

// Components (internal)
import { DateModified, Heading, Select } from '../components';
import { formatDate } from '../utils/utils';

const ViewHolidaysNation = () => {
  // State variables
  const [holidays, setHolidays] = useState([]);
  const [year, setYear] = useState<string>('2024');
  const [yearsList] = useState<string[]>(['2022', '2023', '2024', '2025', '2026']);

  // Find data for current year
  useEffect(() => {
    const endpointForYear = `https://canada-holidays.ca/api/v1/holidays?year=${year}`;

    axios.get(endpointForYear)
      .then(({ data }) => {
        const formattedHolidays = mapHolidayData(data.holidays);
        setHolidays(formattedHolidays);
      })
      .catch(error => {
        console.error("There was an error fetching the holidays!", error);
      });
  }, [year]);

  const mapHolidayData = (holidays) => {
    const holidayMap = new Map();

    holidays.forEach(holiday => {
      const { date, nameEn, provinces, federal } = holiday;

      if (!holidayMap.has(date)) {
        holidayMap.set(date, []);
      }

      const existingHoliday = holidayMap.get(date).find(h => h.nameEn === nameEn);

      if (existingHoliday) {
        existingHoliday.provinces.push(...provinces.map(p => p.id));
      } else {
        holidayMap.get(date).push({
          nameEn,
          provinces: provinces.map(p => p.id),
          federal
        });
      }
    });

    return Array.from(holidayMap.entries()).flatMap(([date, holidays]) => {
      return holidays.map((holiday, index) => ({
        date: index === 0 ? formatDate(date) : '',
        name: holiday.nameEn,
        location: formatLocation(holiday.provinces, holiday.federal)
      }));
    });
  };

  // Format location to display National, Federal, or provinces
  // Rename PE to P.E.I.
  const formatLocation = (provinces, federal) => {
    if (provinces.length === 13) {
      return 'National';
    }

    let location = federal ? 'Federal' : '';

    location += provinces.length
      ? (location ? ', ' : '') + provinces.map(province =>
          province === 'PE' ? 'P.E.I.' : province
        ).join(', ')
      : '';

    return location || 'None';
  };

  return (
    <section>
      <Heading tag="h1">Nationwide holidays</Heading>

      <Select
        selectId="select-nationwide-year"
        label="Calendar year"
        hint="Select the year of holidays you want to view."
        name="nationwide-year"
        value={year}
        onInput={(e) => setYear(e.target.value)}
      >
        {yearsList.map(yearOption => (
          <option key={yearOption} value={yearOption}>
            {yearOption}
          </option>
        ))}
      </Select>

      <table className="mb-450">
        <thead>
          <tr className="text-left bb-sm b-default">
            <th className="py-300">
              <Heading tag="h4" marginBottom="0" marginTop="0">Day</Heading>
            </th>
            <th className="py-300">
              <Heading tag="h4" marginBottom="0" marginTop="0">Holiday</Heading>
            </th>
            <th className="py-300">
              <Heading tag="h4" marginBottom="0" marginTop="0">Location</Heading>
            </th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={index} className="bb-sm b-default">
                <td className="sm:pe-400 pe-0 sm:py-300 py-200">
                  <strong>{holiday.date}</strong>
                </td>
                <td className="sm:pe-400 pe-0 sm:pt-300 pt-0 sm:pb-300 pb-200">
                  {holiday.name}
                </td>
                <td className="sm:pt-300 pt-0 sm:pb-300 pb-200">{holiday.location}</td>
            </tr>
        ))}
        </tbody>
      </table>

      <DateModified>2024-08-28</DateModified>
    </section>
  );
};

export default ViewHolidaysNation;