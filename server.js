const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: ".env" });
const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
