import { IDBPDatabase, openDB } from "idb";
import { TripT } from "../types/trip";

export const DB_NAME = "weather-forecast";
export const TRIPS_STORE = "trips";

export type WeatherSchema = {
  [TRIPS_STORE]: TripT;
};

export type WeatherDBT = IDBPDatabase<WeatherSchema>;

const init = async () => {
  const db = await openDB<WeatherSchema>(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(TRIPS_STORE, { keyPath: "id" });
    },
  });

  return db;
};

export default init;
