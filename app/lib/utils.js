import mongoose from 'mongoose';

export const connectTODB = async () => {
  if (mongoose.connection.readyState >= 1) return; //chekcs already connected

  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to database');
  }
};
