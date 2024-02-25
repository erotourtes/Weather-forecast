import config from "../config";
import todayWeatherApi from "../dummy/todayWeatherApi";

const base =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const getTodayWeatherFor = async (
  location?: string
): Promise<TodayWeatherT | undefined> => {
  if (config.env === "development") {
    return todayWeatherApi as TodayWeatherT;
  }

  if (!location) return;
  const response = await fetch(
    `${base}/${location}/today?unitGroup=metric&include=days&key=${config.apiKey}&contentType=json`
  );

  if (!response.ok)
    throw new Error(
      `Failed to fetch today's weather: ${await response.text()}`
    );

  return await response.json();
};

export const getForecastWeatherFor = async (
  location?: string,
  start?: string,
  end?: string
): Promise<WeatherT | undefined> => {
  if (config.env === "development") {
    const temp = { ...todayWeatherApi };
    for (let i = 0; i < 4; i++) {
      temp.days.push(temp.days[0]);
    }
    return temp as WeatherT;
  }
  if (!location || !start || !end) return;

  const limit = config.limitOfDays;
  const diff = new Date(end).getTime() - new Date(start).getTime();
  const numberOfDays = diff / (1000 * 60 * 60 * 24);
  let endDay = end;
  if (numberOfDays > limit) {
    const date = new Date(start);
    date.setDate(date.getDate() + limit);
    endDay = date.toISOString().split("T")[0];
  }

  const response = await fetch(
    `${base}/${location}/${start}/${endDay}?unitGroup=metric&key=${config.apiKey}&contentType=json`
  );

  if (!response.ok)
    throw new Error(
      `Failed to fetch today's weather: ${await response.text()}`
    );

  return await response.json();
};
