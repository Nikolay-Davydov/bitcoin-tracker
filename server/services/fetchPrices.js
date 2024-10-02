// fetchPrices.js
import mongoose from 'mongoose';
import { connectToDatabase } from '../../database/connect';

// Определяем модель для хранения цен
const PriceSchema = new mongoose.Schema({
  time: { type: Date, required: true },
  price: { type: Number, required: true }
});
const Price = mongoose.model('Price', PriceSchema);

// Функция для получения данных за указанный период
export const getPricesByPeriod = async (period) => {
  await connectToDatabase();

  const now = new Date();
  let startDate;

  switch (period) {
    case '1d':
      startDate = new Date(now.setDate(now.getDate() - 1));
      break;
    case '1w':
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case '1m':
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case '1y':
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    default:
      startDate = new Date(now.setDate(now.getDate() - 1));
  }

  const prices = await Price.find({ time: { $gte: startDate } }).sort({ time: 1 });
  return prices;
};
