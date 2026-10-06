import mongoose from 'mongoose';

export async function connect() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
  // No local MongoDB on Vercel: skip the 3s connect timeout on every cold start.
  if (process.env.VERCEL && !process.env.MONGODB_URI) {
    console.warn('MONGODB_URI not set — serving seed data');
    return false;
  }
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 3000 });
    console.log('MongoDB connected');
    return true;
  } catch (err) {
    console.warn(`MongoDB unavailable (${err.message}) — serving seed data`);
    return false;
  }
}

export const isConnected = () => mongoose.connection.readyState === 1;
