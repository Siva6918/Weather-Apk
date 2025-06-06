import React, { useState } from "react";
import "./App.css";
import HowItWorks from "./HowItWorks.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const API_KEY = "3419d7dc66a85f4c5e006f0bb2ae6da6";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric");
  const [unitLabel, setUnitLabel] = useState("°C");

  const fetchWeather = async (queryCity = city) => {
    if (!String(queryCity).trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&units=${unit}&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather({
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
        name: data.name,
        country: data.sys.country,
      });
      setError("");
    } catch (err) {
      setWeather(null);
      setError(err.message || "An error occurred");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    const newLabel = newUnit === "metric" ? "°C" : "°F";
    setUnit(newUnit);
    setUnitLabel(newLabel);
    if (city) fetchWeather(city);
  };

  const getCurrentLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${API_KEY}`
          );
          if (!response.ok) throw new Error("Failed to fetch location weather");
          const data = await response.json();
          setWeather({
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
            name: data.name,
            country: data.sys.country,
          });
          setCity("");
          setError("");
        } catch (err) {
          setWeather(null);
          setError(err.message || "Failed to get location weather");
        }
      },
      () => {
        setError("Permission to access location was denied.");
      }
    );
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Main">
        <div className="app">
          <h1>Search by City</h1>
          <form
            className="input-group"
            onSubmit={(e) => {
              e.preventDefault();
              fetchWeather();
            }}
          >
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="City name"
            />
            <button type="submit" aria-label="Search weather">
              Submit
            </button>
            <button
              type="button"
              onClick={getCurrentLocationWeather}
              className="geolocation-button"
              aria-label="Get weather from current location"
            >
              📍
            </button>
          </form>
          <HowItWorks />
        </div>
        <div className="app">
          <h1>Weather Details</h1>
          <p className="instructions">View the current weather conditions _</p>

          {error && <p className="error">⚠️ {error}</p>}

          {weather && (
            <div className="weather" role="region" aria-live="polite">
              <h2>
                {weather.name}, {weather.country}
              </h2>
              <img src={weather.icon} alt={weather.description} />
              <p className="desc">☁ {weather.description}</p>
              <p>
                <strong>Temperature:</strong> {weather.temp} {unitLabel}
              </p>
              <p>
                <strong>Feels Like:</strong> {weather.feels_like} {unitLabel}
              </p>
              <p>
                <strong>Humidity:</strong> 💧 {weather.humidity}%
              </p>
              <p>
                <strong>Wind Speed:</strong> 💨 {weather.wind}{" "}
                {unit === "metric" ? "m/s" : "mph"}
              </p>
              <p className="date">🕒 {new Date().toLocaleString()}</p>
              
            </div>
          )}
          <button className="toggle" onClick={toggleUnit}>
                Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
              </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
