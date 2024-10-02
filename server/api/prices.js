// server/api/prices.js
import axios from 'axios';
import Price from '../models/Price';
import mongoose from 'mongoose';

// Подключение к MongoDB (замените строку подключения на свою)
mongoose.connect('mongodb://localhost:27017/bitcoin', { useNewUrlParser: true, useUnifiedTopology: true });

export default defineEventHandler(async (event) => {
  const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  const { bpi } = response.data;

  const priceData = {
    code: bpi.USD.code,
    rate: bpi.USD.rate,
    description: bpi.USD.description,
  };

  // Сохранение в базе данных
  await Price.create(priceData);

  // Возвращаем текущую цену
  return priceData;
});
