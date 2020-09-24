const EventEmitter = require("events").EventEmitter;
const fs = require("fs");

readFile = (path, cb) => {

  if(!path){
    process.nextTick(()=> {
       cb(new Error("ścieżka musi byc podana"));
    });
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

readFileSync = (path) => {
  try {
    //obsługa błędów w funkcji synchronicznej
    return fs.readFileSync(path);
  } catch (e) {
    return null;
  }
};

module.exports = {
  readFile,
  readFileSync,
};
