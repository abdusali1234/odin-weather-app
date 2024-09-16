export async function getWeatherData(address, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?unitGroup=${unit}&include=current%2Chours%2Cdays&key=GQ4347GPAJ9AA633ARE9YQ9KY&contentType=json`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (e) {
    console.log(e);
  }
}
