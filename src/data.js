export async function getWeatherData() {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london%20uk?unitGroup=metric&include=current%2Chours%2Cdays&key=GQ4347GPAJ9AA633ARE9YQ9KY&contentType=json`
    );
    const weatherData = await response.json();
    const currentConditions = weatherData.currentConditions;
    const address = weatherData.resolvedAddress;
    const conditions = currentConditions.conditions;
    const conditionsIcon = currentConditions.icon;
    const temp = currentConditions.temp;
    const tempFeelsLike = currentConditions.feelslike;
    //console.log({ address, conditions, conditionsIcon, temp, tempFeelsLike });
    return { address, conditions, conditionsIcon, temp, tempFeelsLike };
  } catch (e) {
    console.log(e);
  }
}
