// connect.js
import mongoose from 'mongoose';

// Функция для подключения к базе данных
export const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return; // Если уже подключены, ничего не делаем

  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};
