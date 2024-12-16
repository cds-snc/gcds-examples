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

export type SpacingValues =
  | '0'
  | '25'
  | '50'
  | '75'
  | '100'
  | '125'
  | '150'
  | '175'
  | '200'
  | '225'
  | '250'
  | '300'
  | '350'
  | '400'
  | '450'
  | '500'
  | '550'
  | '600'
  | '650'
  | '700'
  | '750'
  | '800'
  | '850'
  | '900'
  | '950'
  | '1000'
  | '1050'
  | '1100'
  | '1150'
  | '1200'
  | '1250';