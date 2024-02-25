import { ReactElement } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import {
  WiCloud,
  WiCloudyGusts,
  WiDayCloudy,
  WiDaySunny,
  WiFog,
  WiNightAltCloudy,
  WiNightClear,
  WiRainMix,
  WiSnowWind,
} from "react-icons/wi";

export const weekday = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  });

export const today = () => weekday(new Date().toISOString());

const stringToIconMapper: { [K in IconsT]: ReactElement } = {
  snow: <WiSnowWind />,
  "clear-day": <WiDaySunny />,
  "partly-cloudy-day": <WiDayCloudy />,
  "clear-night": <WiNightClear />,
  "partly-cloudy-night": <WiNightAltCloudy />,
  cloudy: <TiWeatherCloudy />,
  fog: <WiFog />,
  rain: <WiRainMix />,
  wind: <WiCloudyGusts />,
};

export const stringToIcon = (icon: IconsT, size: number | undefined = 1) => {
  const jsx = stringToIconMapper[icon] || <WiCloud />;
  return <jsx.type {...jsx.props} size={size} />;
};
