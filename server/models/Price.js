// server/models/Price.js
import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
  code: String,
  rate: String,
  description: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('Price', priceSchema);
