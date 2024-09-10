import "./style.css";

async function getDailyWeather() {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=uk&include=current&key=GQ4347GPAJ9AA633ARE9YQ9KY&contentType=json`
    );
    const responseData = await response.json();

    const currentData = responseData.currentConditions;
    const dailyData = responseData.days;
    console.log(currentData);
    console.log(dailyData);
  } catch (error) {
    console.log(error);
  }
}

getDailyWeather();

// TO-DO: create a class with a static method (above method) so it can be reused for daily, hourly, and current data
