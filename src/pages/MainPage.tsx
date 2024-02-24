import "./MainPage.css";
import AddCardBtn from "./AddCardBtn";
import Cards from "../components/Cards/Cards";
import { SearchInput } from "../components/Input/Input";
import trips from "../dummy/trips";
import Dialog from "../components/Dialog/Dialog";
import DialogForm from "./DialogForm/DialogForm";

const MainPage = () => {
  return (
    <div className="container">
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
          <AddCardBtn />
        </div>
        <h4>Week</h4>
        <div>Week forecast goes here</div>
      </div>
      <div className="side"></div>
      <Dialog isOpen={true}>
        <DialogForm />
      </Dialog>
    </div>
  );
};

export default MainPage;
