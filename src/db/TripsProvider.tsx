import React, { PropsWithChildren, createContext } from "react";
import dummyTrips from "../dummy/trips";
import { TripT } from "../types/trip";
import { compareDates } from "../utils/utils";
import { TripDAO } from "./TripDAO";

export const TripsContext = createContext<{
  trips: TripT[];
  init: () => Promise<void>;
  addTrip: (trip: TripT) => Promise<void>;
  chnageTripOrder: (order: "asc" | "desc") => void;
  setAllTripsToState: () => Promise<void>;
}>({
  trips: [],
  init: async () => {},
  addTrip: async () => {},
  chnageTripOrder: async () => {},
  setAllTripsToState: async () => {},
});

const TripsProvider = ({ children }: PropsWithChildren) => {
  const [trips, setTrips] = React.useState<TripT[]>([]);

  return (
    <TripsContext.Provider
      value={{
        trips,
        addTrip: addTrip(setTrips),
        chnageTripOrder: chnageTripOrder(setTrips),
        setAllTripsToState: setAllTripsToState(setTrips),
        init: init(setTrips),
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};

export default TripsProvider;

type SetTrips = React.Dispatch<React.SetStateAction<TripT[]>>;

function addTrip(setTrips: SetTrips) {
  return async (trip: TripT) => {
    await TripDAO.add(trip)
      .then(() => {
        setTrips((prev) => [...prev, trip]);
      })
      .catch((e) => {
        console.error(e);
      });
  };
}

function chnageTripOrder(setTrips: SetTrips) {
  return (order: "asc" | "desc") => {
    setTrips((prev) =>
      [...prev].sort((a, b) =>
        order === "asc"
          ? compareDates(a.startDate, b.startDate)
          : compareDates(b.startDate, a.startDate)
      )
    );
  };
}

function setAllTripsToState(setTrips: SetTrips) {
  return async () => {
    await TripDAO.getAll()
      .then((data) => {
        if (!data || !data.length) return void setTrips(dummyTrips);
        setTrips(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
}

function init(setTrips: SetTrips) {
  return async () => {
    const trips = await TripDAO.getAll();
    if (trips.length) return void setTrips(trips);

    await TripDAO.addAll(dummyTrips);
    setTrips(dummyTrips);
  };
}
