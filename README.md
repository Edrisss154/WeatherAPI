# WeatherAPI  
### README for "Telegram Weather Bot" Project

---

# **Telegram Weather Bot**  
This project is a simple Telegram bot that provides weather information. Users can send the name of a city to receive its current weather details. The bot uses [WeatherAPI](https://www.weatherapi.com) to fetch weather data.

---

## **Features**
- Get weather information for any city
- Displays:
  - **Current Temperature**
  - **Weather Condition**
  - **Humidity**
  - **Wind Speed**
- Integrates with Telegram using the `node-telegram-bot-api` library
- Powered by the reliable WeatherAPI

---

## **How to Use**

### 1. **Prerequisites**
- Node.js v12 or higher
- `npm` (Node.js package manager) installed
- A Telegram bot token (generated via [BotFather](https://core.telegram.org/bots#botfather))
- A WeatherAPI key (sign up at [WeatherAPI](https://www.weatherapi.com))

---

### 2. **Installation and Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Edrisss154/WeatherAPI.git
   cd WeatherAPI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Edit the project file**
   - Open `index.js`:
     - Replace `TELEGRAM_TOKEN` with your Telegram bot token
     - Replace `WEATHER_API_KEY` with your WeatherAPI key

4. **Run the bot**
   ```bash
   node index.js
   ```

---

### 3. **Test the Bot**
- Open Telegram and message your bot.
- For example, if you send "Tehran," the bot will display the current weather for Tehran.

---

## **Dependencies**
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api): To interact with the Telegram API
- [axios](https://axios-http.com): To make HTTP requests to WeatherAPI

---

## **Sample Bot Response**
```plaintext
Weather in Tehran:
- Temperature: 22°C
- Condition: Clear
- Humidity: 60%
- Wind Speed: 15 km/h
```

---

## **Contact Me**
- **Email:** [edrisss14@gmail.com](mailto:edrisss14@gmail.com)  
- **GitHub:** [Edrisss154](https://github.com/Edrisss154)

---

### **Please ⭐️ the repository if you found this project useful!**
