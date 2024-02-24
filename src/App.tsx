import "./App.css";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import { SearchInput } from "./components/Input/Input";

const cards = [
  {
    title: "China",
    body: "date",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Japan",
    body: "date",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Korea",
    body: "date",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Thailand",
    body: "date",
    img: "https://via.placeholder.com/150",
  },
];

function App() {
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
        <Cards cards={cards} />
        <h4>Week</h4>
        <div>Week forecast goes here</div>
      </div>
      <div className="side"></div>
    </div>
  );
}

export default App;
