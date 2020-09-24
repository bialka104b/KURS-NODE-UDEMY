const EventEmitter = require("events").EventEmitter;
const fs = require("fs");

readFile = (path) => {
  

  let ev = new EventEmitter();
  //sprawdzamy czy ścieżka została podana
  if(!path){
    process.nextTick(()=> {
      ev.emit("error", new Error("ścieżka musi byc podana") );
    });
    return ev;
  }

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
