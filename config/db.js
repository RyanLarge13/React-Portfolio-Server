import mongoose from "mongoose";
/*Exporting the connection to MongoDB*/
export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, () => console.log('You have succesfully connected to the database!'));
  } catch (err) {
    console.log(
      `An error occurred while trying to connect to the database : ${err}`
    );
  }
};
