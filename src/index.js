import "./style.css";
import { getWeatherData } from "./data";

console.log("hello!");

let { address, conditions, conditionsIcon, temp, tempFeelsLike } =
  await getWeatherData();
//      console.log(getWeatherData().address);

console.log({ address, conditions, conditionsIcon, temp, tempFeelsLike });
