import { TripT } from "../types/trip";

export const uuid = () => {
  return Math.random().toString(36).substring(2, 9);
};

export const locationFrom = (trip: TripT | null | undefined) => {
  if (!trip) return "";
  return `${trip.city.trim()}, ${trip.country.trim()}`;
};

export const getDateFromNow = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
};

export const compareDates = (a: string, b: string) => {
  return new Date(a).getTime() - new Date(b).getTime();
};
