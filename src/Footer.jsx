import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="weather-footer">
      {/* Top Footer Sections */}
      <div className="footer-top">
        <div className="footer-section about">
          <h2>About WeatherNow</h2>
          <p>
            WeatherNow is a real-time weather tracking and forecasting app that provides accurate data
            for cities across the globe. Powered by open weather APIs, we bring hourly, daily, and weekly forecasts.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/forecast">Forecast</a></li>
            <li><a href="/maps">Weather Maps</a></li>
            <li><a href="/alerts">Weather Alerts</a></li>
            <li><a href="/favorites">My Cities</a></li>
            <li><a href="/about">About App</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section cities">
          <h2>Popular Cities</h2>
          <ul>
            <li><a href="/weather/new-york">New York</a></li>
            <li><a href="/weather/london">London</a></li>
            <li><a href="/weather/delhi">Delhi</a></li>
            <li><a href="/weather/tokyo">Tokyo</a></li>
            <li><a href="/weather/sydney">Sydney</a></li>
            <li><a href="/weather/paris">Paris</a></li>
            <li><a href="/weather/dubai">Dubai</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h2>Subscribe for Daily Updates</h2>
          <form>
            <input type="email" placeholder="Your email" required/>
            <button type="submit">Subscribe</button>
          </form>
          <p>No spam. Only weather insights delivered to your inbox.</p>
        </div>
      </div>

      {/* API Info Section */}
      <div className="footer-api-info">
        <h3>API & Data Sources</h3>
        <p>
          We use real-time data from trusted sources including OpenWeatherMap, WeatherAPI, and other global meteorological services.
        </p>
        <ul>
          <li><a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeatherMap API</a></li>
          <li><a href="https://www.weatherapi.com/" target="_blank" rel="noreferrer">WeatherAPI</a></li>
          <li><a href="/api-docs">API Documentation</a></li>
        </ul>
      </div>

      {/* Social and Contact */}
      <div className="footer-social-contact">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="contact-info">
          <p>Email: vasanthavenkatasiva@gmail.com</p>
          <p>Phone: +91 950 248 6918</p>
        </div>
      </div>

      {/* Legal Links */}
      <div className="footer-legal">
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
      </div>

      {/* Filler Content for 200+ lines (dummy rows simulating widgets/cards) */}
      

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WeatherNow App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
