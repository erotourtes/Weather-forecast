import config from "../config";
import todayWeatherApi from "../dummy/todayWeatherApi";

export const getTodayWeatherFor = async (
  location?: string
): Promise<TodayWeatherT | undefined> => {
  if (config.env === "development") {
    return todayWeatherApi as TodayWeatherT;
  }

  if (!location) return;
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=days&key=${config.apiKey}&contentType=json`
  );
  return await response.json();
};

// export const getWeatherFor = async (city: String) => {
//     const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/[date1]/[date2]?unitGroup=metric&amp;include=days&amp;key=${config.apiKey}&amp;contentType=json`
// }
