# 🌤️ Weather App - React

A simple weather app built with React that allows users to check the current weather of any city by name.  
It uses the **OpenWeatherMap API** to fetch real-time weather data.

## 🔍 Features

- Search weather by **city name**
- Displays:
  - 🌡️ Temperature (°C)
  - 🌥️ Weather icon & description
  - 💧 Humidity
  - 🌬️ Wind speed
- Default city loaded on app start
- Error handling when:
  - API key is incorrect
  - City is not found
  - Network issues

## 🛠️ Technologies Used

- React (Vite)
- JavaScript (ES6+)
- OpenWeatherMap API
- CSS for styling

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Hoang-vn-git/WeatherApp.git
cd WeatherApp

# 2. Install dependencies
npm install

# 3. Create a .env file and add your API key
touch .env
Paste the following into .env file:

    VITE_APP_ID = your_openweathermap_api_key
(🔑 You can get a free API key from: https://openweathermap.org/api)

# 4. Start the development server
npm run dev
```

## 📁 Project Structure

```
src/
├── assets/           # Weather icons
├── components/
│   └── Weather.jsx   # Main weather component
    └── Weather.css   # Styles
└── main.jsx          # React entry point
└── App.jsx
└── index.css    
```

## 📸 Screenshots

<img width="1725" alt="Screenshot 2025-04-11 at 17 47 43" src="https://github.com/user-attachments/assets/06f621b0-1e71-49aa-a568-bc2eebc47ce1" />

<img width="1725" alt="Screenshot 2025-04-11 at 17 48 03" src="https://github.com/user-attachments/assets/b8f46c69-a3d2-4dc1-9795-c767ab132408" />



## 🚀 Future Improvements

- Add loading spinner while fetching data
- Support weather by current GPS location
- Show forecast for next 5 days
- Allow switching between °C and °F

## 📝 License

This project is open-source and free to use under the MIT License.
