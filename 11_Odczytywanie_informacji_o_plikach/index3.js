const fs = require("fs"); //moduł do pracy z plikami
const path = require("path"); //moduł do pracy z ścieżkami
//OBSŁUGA BŁĘDÓW TYLKO W METODACH SYNCHRONICZNYCH
try {//metoda wyświetli nam obiekt stats
  var stats = fs.statSync(path.join(__dirname, "files txt", "lorem2.txt"));

  console.log(stats);
} catch (err) {//metoda wyświetli błąd error jeśli on wystąpi, np jeśli plik lorem2.txt nie istnieje
  console.log(`Wystąpił błąd: ${err.message}.`);
}
