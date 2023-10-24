const fs = require("fs");
// Creating a Buffer
const buffer = Buffer.from("Hello, Node.js");

// Reading from a Buffer
console.log(buffer.toString()); // Output: Hello, Node.js

fs.readFile(`./dev-data/img/leo.jpg`, (err, data) => {
  console.log(data);
});
