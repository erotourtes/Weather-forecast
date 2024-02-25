import { TripT } from "../types/trip";
import { TRIPS_STORE, WeatherDBT } from "./initDB";

export class TripDAO {
  constructor(private db: Promise<WeatherDBT>) {}

  async add(trip: TripT): Promise<void> {
    const db = await this.db;
    await db.put(TRIPS_STORE, trip);
  }

  async addAll(trips: TripT[]): Promise<void> {
    const db = await this.db;
    const tx = db.transaction(TRIPS_STORE, "readwrite");
    const store = tx.objectStore(TRIPS_STORE);
    const promises = trips.map((trip) => store.put(trip));
    return await Promise.all(promises).then();
  }

  async getAll(): Promise<TripT[]> {
    const db = await this.db;
    const tx = db.transaction(TRIPS_STORE, "readonly");
    const store = tx.objectStore(TRIPS_STORE);
    return await store.getAll();
  }
}
