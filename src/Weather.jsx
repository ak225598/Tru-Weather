import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";

const WeatherApp = () => {
  const [city, setCity] = useState("Mumbai");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const CurrentWeather = () => {
    // Fetch current weather data
    if (city) {
      axios
        .get(uri)
        .then((response) => {
          if (response.status === 200) {
            setWeatherData(response.data);
          } else {
            setWeatherData(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  };

  const forecast5day = () => {
    if (city) {
      // Fetch 5-day forecast
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        )
        .then((response) => {
          const dailyForecast = response.data.list.filter(
            (reading, index) => index % 8 === 0
          );
          const formattedForecast = dailyForecast.map((reading) => ({
            dayOfWeek: new Date(reading.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
            }),
            fullDate: new Date(reading.dt * 1000).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            icon: reading.weather[0].icon,
            temp: Math.round(reading.main.temp),
            description: reading.weather[0].description,
            maxTemp: Math.round(reading.main.temp_max),
            minTemp: Math.round(reading.main.temp_min),
            windSpeed: reading.wind.speed,
          }));
          setForecastData(formattedForecast);
        })
        .catch((error) => {
          console.error("Error fetching forecast data:", error);
        });
    }
  };

  useEffect(() => {
    CurrentWeather();
    forecast5day();
  }, []);

  const handleCity = () => {
    CurrentWeather();
    forecast5day();
  };

  return (
    <div style={{backgroundColor: '#e9e9e9'}} className="min-h-screen flex items-center justify-center">
      <div className="flex gap-5">
        <div style={{backgroundColor:"#fafafa"}} className="text-blue-900 p-8 rounded shadow-md w-96">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-3">
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />

              <input
                type="submit"
                value="Search"
                className="p-3 border border-gray-300 rounded bg-blue-500 text-white cursor-pointer"
                onClick={handleCity}
              />
            </div>

            {weatherData && (
              <div className="text-center mt-8">
                <h2 className="text-4xl font-semibold mb-6">
                  {weatherData.name}, {weatherData.sys.country}
                </h2>
                <div className="flex items-center justify-center">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt="Weather Icon"
                    className="mr-2 w-12 h-12"
                  />
                  <p className="text-2xl">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div className="mt-5 text-4xl font-semibold mb-5">
                  {`${Math.round(weatherData.main.temp)}°C`}
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  <div>
                    <p>Feels Like</p>
                    <p>{`${Math.round(weatherData.main.feels_like)}°C`}</p>
                  </div>
                  <div>
                    <p>Max Temp</p>
                    <p>{`${Math.round(weatherData.main.temp_max)}°C`}</p>
                  </div>
                  <div>
                    <p>Min Temp</p>
                    <p>{`${Math.round(weatherData.main.temp_min)}°C`}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col">
                    <p>Humidity</p>
                    <p>{weatherData.main.humidity}%</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Pressure</p>
                    <p>{weatherData.main.pressure} hPa</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Wind</p>
                    <p>{weatherData.wind.speed} m/s</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Visibility</p>
                    <p>{weatherData.visibility / 1000} km</p>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-10">
                  <div className="flex flex-row items-center gap-10">
                    <img
                      src="/sunrise.gif"
                      alt="Animated Sunrise"
                      className="w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <div className="bg-gray-300 h-3 w-32 rounded-full relative">
                        <div
                          style={{
                            width: `${Math.min(
                              ((Date.now() / 1000 - weatherData.sys.sunrise) /
                                (weatherData.sys.sunset -
                                  weatherData.sys.sunrise)) *
                                100,
                              100
                            )}%`,
                          }}
                          className="bg-yellow-500 h-full rounded-full"
                        ></div>
                      </div>
                    </div>
                    <img
                      src="/sunset.gif"
                      alt="Animated Sunset"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="flex flex-row mt-2 gap-40 justify-center">
                    <div className="flex flex-col items-center">
                      <p>Sunrise</p>
                      <p>
                        {new Date(
                          weatherData.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>Sunset</p>
                      <p>
                        {new Date(
                          weatherData.sys.sunset * 1000
                        ).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!weatherData && (
              <p className="text-red-500 mt-4">Enter a valid city</p>
            )}
          </div>
        </div>
        <Forecast forecastData={forecastData} />
      </div>
    </div>
  );
};

export default WeatherApp;
