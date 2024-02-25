import { WiCelsius } from "react-icons/wi";
import { useQuery } from "react-query";
import { getTodayWeatherFor } from "../../api/weather";
import { TripT } from "../../types/trip";
import { stringToIcon, today } from "../../utils/mappers";
import { locationFrom } from "../../utils/utils";
import "./SideWeatherInfo.css";

const time = [
  [30, "DAYS"],
  [15, "HOURS"],
  [15, "MINUTES"],
  [30, "SECONDS"],
];

interface SideWeatherInfoProps {
  trip?: TripT;
}

const SideWeatherInfo = ({ trip }: SideWeatherInfoProps) => {
  const {
    data: weatherData,
    isLoading,
    isError,
    isRefetching,
    error,
  } = useQuery(
    ["weather", { city: trip?.city }],
    async () => await getTodayWeatherFor(locationFrom(trip)),
    {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 1000 * 60 * 60 * 6, // 6 hours
    }
  );

  console.log(weatherData, isError, error, isLoading);
  if (isLoading || isRefetching) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!weatherData) return <div>No data</div>;
  if (!trip) return <div>No trip</div>;

  const dayWeather = weatherData.days[0];

  return (
    <div className={"weather-info flex center column"}>
      <div className="flex center column">
        <h2 className={"day"}>{today()}</h2>
        <div className="degree-info flex center">
          {stringToIcon(dayWeather.icon, 50)}
          <h1 className="degree">{dayWeather.feelslike}</h1>
          <WiCelsius className="degree-icon" />
        </div>
        <p className="city">{trip!.city}</p>
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
