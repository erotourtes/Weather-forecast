import { WiCelsius } from "react-icons/wi";
import { useQuery } from "react-query";
import { getTodayWeatherFor } from "../../api/weather";
import CloudAnimation from "../../components/CloudAnimation/CloudAnimation";
import Timer from "../../components/Timer/Timer";
import config from "../../config";
import { TripT } from "../../types/trip";
import { stringToIcon, today } from "../../utils/mappers";
import { locationFrom } from "../../utils/utils";
import "./SideWeatherInfo.css";
import ErrorElement from "../../components/Error";

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
    ["weather-side-info", trip?.city],
    async () => await getTodayWeatherFor(locationFrom(trip)),
    {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: config.staleTime,
      cacheTime: config.cacheTime,
    }
  );

  if (isError)
    return (
      <div className={"weather-info flex center column"}>
        <ErrorElement error={error} />
      </div>
    );

  if (isLoading || isRefetching || !weatherData)
    return (
      <div className={"weather-info flex center column"}>
        <CloudAnimation />
      </div>
    );

  const dayWeather = weatherData!.days[0];

  if (!trip)
    return (
      <div className={"weather-info flex center column"}>
        <h2>Select a trip</h2>
        <CloudAnimation />
      </div>
    );

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

      <Timer key={trip.id} start={trip.startDate} end={trip.endDate} />
    </div>
  );
};

export default SideWeatherInfo;
