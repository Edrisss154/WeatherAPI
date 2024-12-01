const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// توکن خود
const TELEGRAM_TOKEN = '7966505872:AAFAl4N-EyySEUziwjMTFR3GGO2tJiuXxnc';
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// جایگزین کردن با API Key خود از WeatherAPI
const WEATHER_API_KEY = 'ec4c632bae0d4ddea60195343241911';

const getWeather = async (city) => {
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
      params: {
        key: WEATHER_API_KEY,
        q: city,
      },
    });
    const data = response.data;
    return `آب و هوای شهر ${data.location.name}:
- دما: ${data.current.temp_c}°C
- وضعیت: ${data.current.condition.text}
- رطوبت: ${data.current.humidity}%
- سرعت باد: ${data.current.wind_kph} کیلومتر/ساعت`;
  } catch (error) {
    return 'خطایی رخ داده است یا نام شهر اشتباه است.';
  }
};


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const city = msg.text;

  const weatherInfo = await getWeather(city);
  bot.sendMessage(chatId, weatherInfo);
});
