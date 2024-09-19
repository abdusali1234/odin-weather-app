export class UserInterface {
  static importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  static images = UserInterface.importAll(
    require.context(
      "././assets/weather_icons/SVG/2nd Set - Monochrome/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  async createWeatherCard(time, conditions, icon, temp, tempFeelsLike) {
    const weatherCard = document.createElement("div");
    weatherCard.setAttribute("class", "weather-card");

    const timeDiv = document.createElement("div");
    weatherCard.setAttribute("class", "time");
    timeDiv.innerHTML = `${time}`;

    const conditionsDiv = document.createElement("div");
    conditionsDiv.setAttribute("class", "conditions");
    conditionsDiv.innerHTML = `${conditions}`;

    const iconsDiv = document.createElement("div");
    iconsDiv.setAttribute("class", "conditions-icon");
    const iconImg = document.createElement("img");
    iconImg.setAttribute("class", "icons");
    const iconFileName = icon + ".svg";
    iconImg.src = `${UserInterface.images[iconFileName]}`;
    iconsDiv.appendChild(iconImg);

    const tempDiv = document.createElement("div");
    tempDiv.setAttribute("class", "temperature");
    tempDiv.innerHTML = `Temperature: ${temp}`;

    const tempFeelsDiv = document.createElement("div");
    tempFeelsDiv.setAttribute("class", "temp-feels-like");
    tempFeelsDiv.innerHTML = `Feels like: ${tempFeelsLike}`;

    weatherCard.appendChild(timeDiv);
    weatherCard.appendChild(conditionsDiv);
    weatherCard.appendChild(iconsDiv);
    weatherCard.appendChild(tempDiv);
    weatherCard.appendChild(tempFeelsDiv);

    return weatherCard;
  }

  async displayAddress(address) {
    const addressSection = document.querySelector("#address");
    addressSection.innerHTML = "";
    const addressDiv = document.createElement("div");
    addressDiv.innerHTML = `${address}`;

    addressSection.prepend(addressDiv);
  }

  async displayCurrentWeather(conditions, icon, temp, tempFeelsLike) {
    const currentConditions = document.querySelector("#current-conditions");
    currentConditions.innerHTML = "";
    const CurrentWeatherCard = await this.createWeatherCard(
      "Now",
      conditions,
      icon,
      temp,
      tempFeelsLike
    );

    currentConditions.appendChild(CurrentWeatherCard);
  }

  async displayTodaysHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.querySelector("#todays-weather-hourly");
    const currentHour = new Date().getHours();
    hourlyForecastDiv.innerHTML = "";
    hourlyData.forEach(async (hour) => {
      const time = hour.datetime;
      const conditions = hour.conditions;
      const icon = hour.icon;
      const temp = hour.temp;
      const feelsLike = hour.feelslike;

      const hourlyWeatherCard = await this.createWeatherCard(
        time,
        conditions,
        icon,
        temp,
        feelsLike
      );

      if (currentHour > time.split(":")[0]) {
        hourlyWeatherCard.classList.replace("time", "time-past");
        hourlyWeatherCard
          .getElementsByTagName("img")[0]
          .classList.replace("icons", "icons-time-past");
      }
      hourlyForecastDiv.appendChild(hourlyWeatherCard);
    });
  }

  async displayDailyForecast(dailyData) {
    const dailyForecastDiv = document.querySelector("#daily-forecast");
    dailyForecastDiv.innerHTML = "";
    dailyData.forEach(async (day) => {
      const date = day.datetime;
      const conditions = day.conditions;
      const icon = day.icon;
      const temp = day.temp;
      const feelsLike = day.feelslike;

      const dailyWeatherCard = await this.createWeatherCard(
        date,
        conditions,
        icon,
        temp,
        feelsLike
      );

      dailyForecastDiv.appendChild(dailyWeatherCard);
    });
  }
}
