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
