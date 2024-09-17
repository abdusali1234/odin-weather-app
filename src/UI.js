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

  async displayCurrentWeather(address, conditions, icon, temp, tempFeelsLike) {
    console.log(UserInterface.images);
    console.log(icon);
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
    const iconFileName = icon + ".svg";
    iconImg.src = `${UserInterface.images[iconFileName]}`;
    iconsDiv.appendChild(iconImg);
    console.log(iconFileName);

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
