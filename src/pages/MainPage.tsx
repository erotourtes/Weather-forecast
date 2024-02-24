import "./MainPage.css";
import AddCardBtn from "./AddCardBtn";
import Cards from "../components/Cards/Cards";
import { SearchInput } from "../components/Input/Input";
import trips from "../dummy/trips";
import Dialog from "../components/Dialog/Dialog";
import DialogForm from "./DialogForm/DialogForm";
import { useState } from "react";
import { TripT } from "../types/trip";

const MainPage = () => {
  const [isOpen, setOpen] = useState(false);

  const addTrip = (data: TripT) => {
    console.log(data);
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
            <Cards cards={trips} />
            <AddCardBtn onClick={() => setOpen(true)} />
          </div>
          <h4>Week</h4>
          <div>Week forecast goes here</div>
        </div>
        <div className="side"></div>
      </div>

      <Dialog isOpen={isOpen}>
        <DialogForm onClose={() => setOpen(false)} onSubmit={handleSubmit} />
      </Dialog>
    </div>
  );
};

export default MainPage;
