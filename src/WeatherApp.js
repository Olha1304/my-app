import "./styles.css";
import Search from "./Search";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <h1> Weather App </h1>
      <Search city="Berlin" />
    </div>
  );
}
