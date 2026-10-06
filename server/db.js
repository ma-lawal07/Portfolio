import mongoose from 'mongoose';

export async function connect() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
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
