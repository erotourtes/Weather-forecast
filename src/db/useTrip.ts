import { useContext } from "react";
import { TripsContext } from "./TripsProvider";

const useTrips = () => {
  const context = useContext(TripsContext);

  return context;
};

export default useTrips;
