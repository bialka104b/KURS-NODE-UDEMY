const fs = require("fs");
const path = require("path");

function file(filename) {
  //funkcja pomocnicza do odczytu ścieżki do pliku
  //filename to zmienna z nazwą pliku
  return path.join(__dirname, "files", filename);
}

//TWORZENIE PLIKU WRAZ Z TREŚCIĄ
fs.writeFile(file("lorem1.txt"), "", (err) => {
  //writeFile(ścieżka do pliku, "tekst pliku", error-first-callback)
  if (err) {
    console.log(`Nie udało się utworzyć pliku. Powód: ${err.message}.`);
    return
  }
  //jeśli katalogu files nie będzie to najpierw trzeba go utworzyć
  console.log("Plik lorem1.txt został utworzony.");
});
