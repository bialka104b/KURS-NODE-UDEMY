const fs = require("fs");
const path = require("path");

function file(filename) {
  //funkcja pomocnicza do tworzenia ścieżki pliku
  return path.join(__dirname, "files", filename);
}

//NASŁUCHIWANIE W PLIKACH LUB KATALOGACH
//TA FUNKCJA WYKONA SIE ZA KAŻDYM RAZEM KIEDY BĘDA WUKONYWANE ZMIANY NA DANYM PIKU(ZMIANA NAZWY LUB TREŚCI)
fs.watch(file("lorem1.txt"), (eventType, filename) => {
  // .watch(ścieżka do pliku, call_back(wywołana funkcja rename(zmiana nazwy) lub change(zmaiana zawartości), nazwa pliku lub katalogu))
  //za każdym razem gdy coś się zmieni w pliku, biore treść i zamieniam go na wielkie litery
  fs.readFile(file(filename), "utf-8", (err, data) => {
    //odczytujemy to jako text kodowany w utf-8
    //readFile(ścieżka pliku, kodowanie, error-first-callback)
    console.log(eventType, data);
    //chce te dane(data) za każdym razem zapisać do nowego pliku napisanego z dużych liter
    fs.writeFile(file("lorem1uppercase.txt"), data.toUpperCase(err), (err, result) => {
      //odczytywanie pliku za każdym razem  gdy nie ma errora
      //.toUpperCase() zamienia wszystkie litery na duże
      if (err) {
        //jesli jest error wykonaj
        console.log("error", err);
      }
    });
  });
});
//NA FILMIE JEST POKAZANA INNA METODA JEŚLI CHODZI O IF KTÓRA OBECNIE NIE DZIAŁA
//OBECNE ROZWIĄZANIE ZNALAZŁAM NA STACK OVERFLOW
