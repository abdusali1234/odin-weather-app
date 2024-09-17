export class UserInterface {
  async displayCurrentWeather(address, conditions, icon, temp, tempFeelsLike) {
    const currentConditions = document.querySelector(".current-conditions");
    currentConditions.innerHTML = "";
    const addressDiv = document.createElement("div");
    addressDiv.setAttribute("id", "address");
    addressDiv.innerHTML = `${address}`;

    const conditionsDiv = document.createElement("div");
    conditionsDiv.setAttribute("id", "conditions");
    conditionsDiv.innerHTML = `${conditions}`;

    const iconsDiv = document.createElement("div");
    iconsDiv.setAttribute("id", "conditions-icon");
    const iconImg = document.createElement("img");
    iconImg.setAttribute("class", "icons");
    iconImg.src = `./assets/weather_icons/SVG/1st_set_monochrome/${icon}.svg`;
    iconsDiv.appendChild(iconImg);

    const tempDiv = document.createElement("div");
    tempDiv.setAttribute("id", "temperature");
    tempDiv.innerHTML = `Current temperature: ${temp}`;

    const tempFeelsDiv = document.createElement("div");
    tempFeelsDiv.setAttribute("id", "temp-feels-like");
    tempFeelsDiv.innerHTML = `Feels like: ${tempFeelsLike}`;

    currentConditions.appendChild(addressDiv);
    currentConditions.appendChild(conditionsDiv);
    currentConditions.appendChild(iconsDiv);
    currentConditions.appendChild(tempDiv);
    currentConditions.appendChild(tempFeelsDiv);
  }
}
