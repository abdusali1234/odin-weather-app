import "./style.css";
import { getWeatherData } from "./data";
import { UserInterface } from "./UI";

console.log("hello!");
const ui = new UserInterface();

const WeatherForm = document.querySelector("form");

WeatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const addressInput = document.getElementById("location").value;
  const units = document.getElementById("units").value;

  const weatherData = await getWeatherData(addressInput, units);
  const address = weatherData.resolvedAddress;
  const currentConditions = weatherData.currentConditions;
  const conditions = currentConditions.conditions;
  const temp = currentConditions.temp;
  const tempFeelsLike = currentConditions.feelslike;
  const icon = currentConditions.icon;
  const dailyConditions = weatherData.days;

  await ui.displayAddress(address);
  await ui.displayCurrentWeather(conditions, icon, temp, tempFeelsLike);

  const today = weatherData.days[0].hours;
  await ui.displayTodaysHourlyForecast(today);
  await ui.displayDailyForecast(dailyConditions);
});
