const connectDB = require("../config/db");
const Tour = require("../models/tourModel");
const fs = require("fs");

const path = `${__dirname}/test-tours.json`;
const tourData = JSON.parse(fs.readFileSync(path, "utf8"));

console.log(tourData);

connectDB();

const importData = async () => {
  try {
    await Tour.create(tourData);
    console.log("Data loaded successfully");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  console.log("delete data function triggered");
  try {
    await Tour.deleteMany();
    console.log("Tours deleted successfully");
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

if (process.argv[2] == "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  deleteData();
}
