import "./WeatherCard.css";

interface WeatherCardProps {
  icon: React.ReactNode;
  min: number;
  max: number;
  weekday: string;
}

const WeatherCard = ({ icon, min, max, weekday }: WeatherCardProps) => {
  return (
    <div className="weather-card">
      <div className="flex center column">
        <h3>{weekday}</h3>
        {icon}
        <p>
          {min}° / {max}°
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
