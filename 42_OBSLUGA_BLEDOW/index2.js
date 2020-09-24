const path = require("path");
const readFile = require("./readfile2").readFile;
const readFileSync = require("./readfile2").readFileSync;

const file = readFile(/*path.join(__dirname, "files", "lorem4.txt")*/);

file
  .on("data", (data) => {
    console.log(data.toString());
  })
  .on("error", (err) => {
    console.log(err);
  });

console.log("To będzie pierwszy console.log");
