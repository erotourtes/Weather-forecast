type IconsT =
  | "snow"
  | "rain"
  | "fog"
  | "wind"
  | "cloudy"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "clear-day"
  | "clear-night";

type WeatherDayT = {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  dew: number;
  feelslike: number;
  icon: IconsT;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype: string | null;
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  description: string;
  stations: string[];
  source: string;
  /* [much more ](https://www.visualcrossing.com/resources/documentation/weather-api/using-the-timeline-weather-api-with-multiple-locations-in-the-same-request/) */
};

type StationT = {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
};

type TodayWeatherT = {
  address: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  timezone: string;
  tzoffset: number;
  days: WeatherDayT[];
  stations: { [key: string]: StationT };
};
