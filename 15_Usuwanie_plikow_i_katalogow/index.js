const fs = require("fs");
const path = require("path");

//USUWANIE KATALOGÓW
//metoda ta pozwala usuwać wyłącznie katalogi które są puste
fs.rmdir(path.join(__dirname, "files"), (err) => {
  //.rmdir(ścieżka do katalogu, err-first-callback) metoda do usuwania katalogu
  if (err) {
    console.log(`Wystąpił błąd: ${err.message}`);
  } else {
    console.log("Udało się usunąć katalog.");
  }
});
