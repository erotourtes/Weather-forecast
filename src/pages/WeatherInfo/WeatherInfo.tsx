import styles from "./WeatherInfo.module.css";
import { TripT } from "../../types/trip";
import { useQuery } from "react-query";
import { getForecastWeatherFor } from "../../api/weather";
import { locationFrom } from "../../utils/utils";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { stringToIcon, weekday } from "../../utils/mappers";
import config from "../../config";

const WeatherInfo = ({ trip }: { trip?: TripT }) => {
  const {
    data: weatherData,
    isLoading,
    isError,
    isRefetching,
    error,
  } = useQuery(
    ["weather", trip?.city],
    async () =>
      await getForecastWeatherFor(
        locationFrom(trip),
        trip?.startDate,
        trip?.endDate
      ),
    {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: config.staleTime,
    }
  );

  if (!trip) return <div>No trip</div>;
  if (isError) return <div>Error</div>;
  if (isLoading || isRefetching) return <div>Loading...</div>;
  if (!weatherData) return <div>No data</div>;

  return (
    <div>
      <div className={styles["weather-info"]}>
        {weatherData.days.map((day, index) => (
          <WeatherCard
            key={index}
            icon={stringToIcon(day.icon, 50)}
            min={day.tempmin}
            max={day.tempmax}
            weekday={weekday(day.datetime)}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherInfo;
