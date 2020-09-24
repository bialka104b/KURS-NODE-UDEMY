const path = require("path");
const readFile = require("./readfile1").readFile;
const readFileSync = require("./readfile1").readFileSync;

const file2 = readFileSync(path.join(__dirname, "files", "lorem4.txt"));
console.log(file2);