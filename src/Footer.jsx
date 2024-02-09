import React from "react";

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl font-bold text-white mb-2">TruWeather</h1>
            <p className="text-lg text-gray-200">
              Your ultimate weather companion for accurate forecasts and real-time updates.
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ankitkumar225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300"
            >
              <i className="fab fa-linkedin-in text-4xl"></i>
            </a>
            <a
              href="https://www.instagram.com/ankit225598/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-all duration-300"
            >
              <i className="fab fa-instagram text-4xl"></i>
            </a>
            <a
              href="https://m.facebook.com/profile.php?id=100016218132388"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300"
            >
              <i className="fab fa-facebook text-4xl"></i>
            </a>
            <a
              href="mailto:ankit225598@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition-all duration-300"
            >
              <i className="fab fa-google text-4xl"></i>
            </a>
            <a
              href="https://github.com/ak225598"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              <i className="fab fa-github text-4xl"></i>
            </a>
          </div>
        </div>
        <footer className="text-gray-300 text-sm text-center mt-8">
          &copy; {new Date().getFullYear()} TruWeather. All rights reserved. Developed with ❤️ by Ankit Kumar.
        </footer>
      </div>
    </>
  );
};

export default Footer;
