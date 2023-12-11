require("dotenv").config();
const mongoose = require("mongoose");

const dbURL =
  process.env.NODE_ENV === "development"
    ? process.env.DATABASE
    : process.env.DATABASE;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
};

module.exports = connectDB;
