import "./App.css";
import Card from "./components/Card/Card";
import { SearchInput } from "./components/Input/Input";

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
        <div>
          <Card title="China" body="date" />
        </div>
        <h4>Week</h4>
        <div>Week forecast goes here</div>
      </div>
      <div className="side"></div>
    </div>
  );
}

export default App;
