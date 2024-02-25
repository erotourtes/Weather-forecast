import { useState } from "react";
import Cards from "../components/Cards/Cards";
import Dialog from "../components/Dialog/Dialog";
import { SearchInput } from "../components/Input/Input";
import dummyTrips from "../dummy/trips";
import { TripT } from "../types/trip";
import AddCardBtn from "./AddCardBtn";
import DialogForm from "./DialogForm/DialogForm";
import "./MainPage.css";
import SideWeatherInfo from "./SideWeatherInfo/SideWeatherInfo";

const MainPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [trips, setTrips] = useState<TripT[]>(dummyTrips);
  const [selectedTripId, setSelectedTripId] = useState<string>("");
  const [serachInput, setSearchInput] = useState<string>("");

  const filteredTrips = trips.filter((trip) =>
    trip.city.toLowerCase().includes(serachInput.toLowerCase())
  );

  const selectedTrip =
    filteredTrips.length == 1
      ? filteredTrips[0]
      : trips.find((trip) => trip.id === selectedTripId);

  const addTrip = (data: TripT) => {
    setTrips((prev) => [...prev, data]);
  };

  const handleSubmit = (data: TripT) => {
    setOpen(false);
    addTrip(data);
  };

  return (
    <div className="container-wrapper">
      <div className="container cards-row-gap">
        <div className="main">
          <h2>
            Weather <strong>Forecast</strong>
          </h2>
          <div className="input">
            <SearchInput
              placeholder="Search your trip"
              onChange={setSearchInput}
            />
          </div>
          <div className="flex row cards-row-gap">
            <Cards
              cards={filteredTrips}
              onCardClick={(id) => setSelectedTripId(id)}
              selectedCard={selectedTripId}
            />
            <AddCardBtn onClick={() => setOpen(true)} />
          </div>
          <h4>Week</h4>
          <div>Week forecast goes here</div>
        </div>
        <div className="side">
          <SideWeatherInfo trip={selectedTrip} />
        </div>
      </div>

      <Dialog isOpen={isOpen}>
        <DialogForm onClose={() => setOpen(false)} onSubmit={handleSubmit} />
      </Dialog>
    </div>
  );
};

export default MainPage;
