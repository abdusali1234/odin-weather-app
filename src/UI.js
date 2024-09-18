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

  async createWeatherCard(conditions, icon, temp, tempFeelsLike) {
    const weatherCard = document.createElement("div");
    weatherCard.setAttribute("class", "weather-card");

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
    tempDiv.innerHTML = `Current temperature: ${temp}`;

    const tempFeelsDiv = document.createElement("div");
    tempFeelsDiv.setAttribute("class", "temp-feels-like");
    tempFeelsDiv.innerHTML = `Feels like: ${tempFeelsLike}`;

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
      conditions,
      icon,
      temp,
      tempFeelsLike
    );

    currentConditions.appendChild(CurrentWeatherCard);
  }
}
