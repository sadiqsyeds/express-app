const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Tour = require("./models/tourModel");
dotenv.config({ path: ".env" });
const app = require("./app");

const db = process.env.DATABASE;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("could not connect", err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

const importData = async () => {
  const tours = JSON.parse(fs.readFileSync("./dev-data/data/tours.json"));

  try {
    await Tour.create(tours);
    console.log("Data loaded successfully");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data deleted successfully");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};
importData();
// deleteData();
