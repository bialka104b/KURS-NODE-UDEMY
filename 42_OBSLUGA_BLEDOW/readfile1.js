const EventEmitter = require("events").EventEmitter;
const fs = require("fs");

readFile = (path) => {
  const ev = new EventEmitter();
  fs.readFile(path, (err, data) => {
    if (err) {
      ev.emit("error", err);
    } else {
      ev.emit("data", data);
    }
  });
  return ev;
};

readFileSync = (path) => {
  try {//obsługa błędów w funkcji synchronicznej
    return fs.readFileSync(path);
  } catch (e) {
    return null;
  }
};

module.exports = {
  readFile,
  readFileSync,
};
