import React from 'react';

const Navbar = ({ city, country, temperature }) => {
  return (
    <nav className="bg-slate-300 p-2 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <img src="/storm.png" alt="Logo" className="w-8 h-8" />
        <div>
          <h1 className="text-lg font-semibold text-black">TruWeather</h1>
          <h2 className="text-gray-600 text-xs">Weather you can trust</h2>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 rounded-md p-2">
          <h1 className="text-sm font-semibold text-black">{city}, {country}</h1>
          <div className="flex justify-center">
            <h2 className="text-sm text-gray-600">{`${Math.round(temperature)}°C`}</h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
