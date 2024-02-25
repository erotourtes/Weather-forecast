import config from "../config";

export type IconsT =
  | "snow"
  | "rain"
  | "fog"
  | "wind"
  | "cloudy"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "clear-day"
  | "clear-night";

export type WeatherDayT = {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  dew: number;
  feelslike: number;
  icon: IconsT;
  /* [much more ](https://www.visualcrossing.com/resources/documentation/weather-api/using-the-timeline-weather-api-with-multiple-locations-in-the-same-request/) */
};

export type TodayWeatherT = {
  address: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  timezone: string;
  tzoffset: number;
  days: WeatherDayT[];
  stations: string[];
};

export const getTodayWeatherFor = async (
  location?: string
): Promise<TodayWeatherT | undefined> => {
  if (!location) return;
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=days&key=${config.apiKey}&contentType=json`
  );
  return await response.json();
};

// export const getWeatherFor = async (city: String) => {
//     const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/[date1]/[date2]?unitGroup=metric&amp;include=days&amp;key=${config.apiKey}&amp;contentType=json`
// }
