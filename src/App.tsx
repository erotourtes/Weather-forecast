import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="main">
        <h2>
          Weather <strong>Forecast</strong>
        </h2>
        <input type="text" placeholder="Search your trip" />
        <div>Trips go here</div>
        <h4>Week</h4>
        <div>Week forecast goes here</div>
      </div>
      <div className="side"></div>
    </div>
  );
}

export default App;
