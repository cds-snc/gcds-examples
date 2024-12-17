import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Components (internal)
import { DateModified, Heading, Select } from '../components';
import { formatDate, generateYearsList } from '../utils/utils';
import { API_BASE_URL } from '../utils/constants';

// Define the types
interface Holiday {
  date: string;
  nameEn: string;
  provinces: { id: string }[];
  federal: boolean;
}

interface MappedHoliday {
  date: string;
  name: string;
  location: string;
  duplicateDate: boolean;
}

const ViewHolidaysNationwide = () => {
  // Get the current year and calculate the year range
  const currentYear = new Date().getFullYear();
  const yearsList = generateYearsList(3);

  // State variables
  const [holidays, setHolidays] = useState<MappedHoliday[]>([]);
  const [year, setYear] = useState<string>(currentYear.toString())
  const [yearAnnouncement, setYearAnnouncement] = useState<string>('');

  // Ref for aria-live year announcement
  const yearAnnouncementRef = useRef<HTMLDivElement>(null);

  // Find data for current year
  useEffect(() => {
    const endpointForYear = `${API_BASE_URL}holidays?year=${year}`;

    axios.get<{ holidays: Holiday[] }>(endpointForYear)
      .then(({ data }) => {
        const formattedHolidays = mapHolidayData(data.holidays);
        setHolidays(formattedHolidays);

        // Update announcement text with the new year
        setYearAnnouncement(`Holidays updated to the year ${year}`);
      })
      .catch(error => {
        console.error("There was an error fetching the holidays!", error);
      });
  }, [year]);

  const mapHolidayData = (holidays: Holiday[]): MappedHoliday[] => {
    const holidayMap = new Map<string, { nameEn: string; provinces: string[]; federal: boolean }[]>();

    holidays.forEach(holiday => {
      const { date, nameEn, provinces, federal } = holiday;

      if (!holidayMap.has(date)) {
        holidayMap.set(date, []);
      }

      const existingHoliday = holidayMap.get(date)?.find(h => h.nameEn === nameEn);

      if (existingHoliday) {
        existingHoliday.provinces.push(...provinces.map(p => p.id));
      } else {
        holidayMap.get(date)?.push({
          nameEn,
          provinces: provinces.map(p => p.id),
          federal
        });
      }
    });

    return Array.from(holidayMap.entries()).flatMap(([date, holidays]) => {
      return holidays.map((holiday, index) => ({
        date: formatDate(date),
        name: holiday.nameEn,
        location: formatLocation(holiday.provinces, holiday.federal),
        duplicateDate: index === 0 ? false : true
      }));
    });
  };

  // Format location to display National, Federal, or provinces
  // Rename PE to P.E.I.
  const formatLocation = (provinces: string[], federal: boolean): string => {
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

  // Update the selected year
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
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
        onInput={handleYearChange}
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
            <th className="py-225 font-h4">
              Day
            </th>
            <th className="py-225 font-h4">
              Holiday
            </th>
            <th className="py-225 font-h4">
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={index} className="bb-sm b-default">
                <td className="sm:pe-300 pe-0 sm:py-225 py-150">
                  {!holiday.duplicateDate ? 
                    <strong>{holiday.date}</strong>
                  :
                    <strong className="visibility-sr-only">{holiday.date}</strong>
                  }
                </td>
                <td className="sm:pe-300 pe-0 sm:pt-225 pt-0 sm:pb-225 pb-150">
                  {holiday.name}
                </td>
                <td className="sm:pt-225 pt-0 sm:pb-225 pb-150">{holiday.location}</td>
            </tr>
        ))}
        </tbody>
      </table>

      <DateModified>2024-08-28</DateModified>

      {/* Hidden aria-live region for announcing year updates */}
      <p ref={yearAnnouncementRef} aria-live="polite" className="sr-only">
        {yearAnnouncement}
      </p>
    </section>
  );
};

export default ViewHolidaysNationwide;