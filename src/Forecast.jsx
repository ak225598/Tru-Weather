import React from "react";

const Forecast = ({ forecastData }) => {
  const resizeArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const groupedForecast = resizeArray(forecastData, 3);

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        5-Day Forecast
      </h2>
      <div className="flex flex-col gap-4">
        {groupedForecast.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-row justify-center gap-4">
            {group.map((day, index) => (
              <div
                key={index}
                className="text-center border p-4 rounded-md shadow-md"
              >
                <p className="text-lg font-semibold">{day.dayOfWeek}</p>
                <p className="text-lg">{day.fullDate}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                  alt="Weather Icon"
                  className="w-12 h-12 mx-auto mt-2"
                />
                <p className="mt-2">{day.description}</p>
                <div className="flex items-center justify-center mt-2">
                  <span className="text-blue-500">High: {day.maxTemp}°C</span>
                  <span className="mx-2">|</span>
                  <span className="text-red-500">Low: {day.minTemp}°C</span>
                </div>
                <p className="text-gray-500 mt-2">Wind: {day.windSpeed} m/s</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
