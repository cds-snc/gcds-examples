export const provinces: any = {
  AB: "Alberta",
  BC: "British Columbia",
  MB: "Manitoba",
  NB: "New Brunswick",
  NL: "Newfoundland and Labrador",
  NS: "Nova Scotia",
  NT: "Northwest Territories",
  NU: "Nunavut",
  ON: "Ontario",
  PE: "Prince Edward Island",
  QC: "Québec",
  SK: "Saskatchewan",
  YT: "Yukon"
};

export const API_BASE_URL = 'https://canada-holidays.ca/api/v1/';

export type Provinces = {
  id: string;
  nameEn: string;
};

export type holidayObject = {
  id: number;
  date: string;
  nameEn: string;
  nameFr: string;
  provinces: Provinces[];
  federal: number;
};
