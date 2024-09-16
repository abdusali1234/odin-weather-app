import "./style.css";
import { getWeatherData } from "./data";

console.log("hello!");

const WeatherForm = document.querySelector("form");

WeatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const addressInput = document.getElementById("location").value;
  const units = document.getElementById("units").value;
  getWeatherData(addressInput, units).then((data) => {
    const address = data.resolvedAddress;
    const currentConditions = data.currentConditions;
    const conditions = currentConditions.conditions;
    const temp = currentConditions.temp;
    const tempFeelsLike = currentConditions.feelslike;
    const dailyConditions = data.days;
    console.log({ address, conditions, temp, tempFeelsLike });
    console.table(dailyConditions);
  });

  //      console.log(getdata().address);
});
