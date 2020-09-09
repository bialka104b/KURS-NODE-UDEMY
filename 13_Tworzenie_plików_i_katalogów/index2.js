const fs = require("fs");
const path = require("path");

function file(filename) {
  //funkcja pomocnicza do odczytu ścieżki do pliku
  //filename to zmienna z nazwą pliku
  return path.join(__dirname, "files", filename);
}

//TWORZENIE PLIKU WRAZ Z TREŚCIĄ drugi sposób
//metoda ta będzie za każdym razem dopisywać treść do pliku
fs.appendFile(file("lorem1.txt"), Date.now() + "\n", function(err) {
  //writeFile(ścieżka do pliku, "tekst pliku", error-first-callback)
  if (err) {
    console.log(`Nie udało się dodać treści do pliku. Powód: ${err.message}.`);
    return;
  }
  //jeśli pliku lorem1.txt nie będzie zostanie on automatycznie dodany
  //jeśli katalogu files nie będzie to najpierw trzeba go utworzyć
  console.log("Dodano treść do pliku lorem1.txt");//dodaną treścia będzie ta Date.now()
});