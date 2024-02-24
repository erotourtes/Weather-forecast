import { TiWeatherCloudy } from "react-icons/ti";
import "./SideWeatherInfo.css";
import { TripT } from "../../types/trip";

const time = [
  [30, "DAYS"],
  [15, "HOURS"],
  [15, "MINUTES"],
  [30, "SECONDS"],
];

interface SideWeatherInfoProps {
  info: {
    city: string;
    temperture: number;
    day: string;
  };
}

const SideWeatherInfo = ({ info }: SideWeatherInfoProps) => {
  return (
    <div className={"weather-info flex center column"}>
      <div className="flex center column">
        <h2 className={"day"}>{info.day}</h2>
        <div className="flex center">
          <TiWeatherCloudy />
          <h1 className="degree">{info.temperture}°</h1>
        </div>
        <p className="city">{info.city}</p>
      </div>

      <div className="time-row flex w-full space-evenly">
        {time.map(([value, unit], index) => (
          <div key={index} className="flex center column">
            <p className="time">{value}</p>
            <p className="unit">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideWeatherInfo;
