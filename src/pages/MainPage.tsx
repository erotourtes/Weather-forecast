import "./MainPage.css";
import AddCardBtn from "./AddCardBtn";
import Cards from "../components/Cards/Cards";
import { SearchInput } from "../components/Input/Input";
import dummyTrips from "../dummy/trips";
import Dialog from "../components/Dialog/Dialog";
import DialogForm from "./DialogForm/DialogForm";
import { useState } from "react";
import { TripT } from "../types/trip";
import SideWeatherInfo from "./SideWeatherInfo/SideWeatherInfo";
import { locationFrom } from "../utils/utils";

const MainPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [trips, setTrips] = useState<TripT[]>(dummyTrips);
  const [selectedTripId, setSelectedTripId] = useState<string>("");

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
              onChange={() => console.log("typing")}
            />
          </div>
          <div className="flex row cards-row-gap">
            <Cards
              cards={trips}
              onCardClick={(id) => setSelectedTripId(id)}
              selectedCard={selectedTripId}
            />
            <AddCardBtn onClick={() => setOpen(true)} />
          </div>
          <h4>Week</h4>
          <div>Week forecast goes here</div>
        </div>
        <div className="side">
          <SideWeatherInfo
            info={{
              city: locationFrom(
                trips.find((trip) => trip.id === selectedTripId)!
              ),
              temperture: 20,
              day: "Today",
            }}
          />
        </div>
      </div>

      <Dialog isOpen={isOpen}>
        <DialogForm onClose={() => setOpen(false)} onSubmit={handleSubmit} />
      </Dialog>
    </div>
  );
};

export default MainPage;
