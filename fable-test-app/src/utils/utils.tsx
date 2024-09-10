// Format date with full month and weekday at the end
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  };
  const localeDate = date.toLocaleDateString('en-CA', options);

  const [weekday, monthAndDay] = localeDate.split(', ');
  const [month, day] = monthAndDay.split(' ');

  return `${month} ${day}, ${weekday}`;
};

// Generates an array of year strings for a given range around the current year
export const generateYearsList = (range: number): string[] => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: range * 2 + 1 }, (_, i) => (currentYear - range + i).toString());
};
