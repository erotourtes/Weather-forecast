import { TripT } from "../types/trip";
import dbInit, { TRIPS_STORE } from "./dbInit";

const db = await dbInit();

export class TripDAO {
  static async add(trip: TripT): Promise<void> {
    await db.put(TRIPS_STORE, trip);
  }

  static async addAll(trips: TripT[]): Promise<void> {
    const tx = db.transaction(TRIPS_STORE, "readwrite");
    const store = tx.objectStore(TRIPS_STORE);
    const promises = trips.map((trip) => store.put(trip));
    return await Promise.all(promises).then();
  }

  static async getAll(): Promise<TripT[]> {
    const tx = db.transaction(TRIPS_STORE, "readonly");
    const store = tx.objectStore(TRIPS_STORE);
    return await store.getAll();
  }
}
