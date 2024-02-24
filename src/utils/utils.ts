import { TripT } from "../types/trip";

export const uuid = () => {
  return Math.random().toString(36).substring(2, 9);
};

export const locationFrom = (trip: TripT | null) => {
  if (!trip) return "";
  return `${trip.city}, ${trip.country}`;
};
