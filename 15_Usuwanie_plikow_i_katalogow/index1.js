const fs = require("fs");
const path = require("path");

function file(filename) {
  //funkcja pomocnicza do tworzenia ścieżki do pliku
  return path.join(__dirname, "files", filename);
}

function rmdir(dir, call_back) {
  const dirname = path.join(__dirname, dir); //zmienna która utworzy nam ściezke do katalogu "files"

  fs.rmdir(dirname, (err) => {
    //usuń ten katalog o ścieżce dirname

    if (err) {
      if (err.code !== "ENOTEMPTY") {
        //jeżeli err.code jest inny niż błąd ENOTEMPTY(katalog nie jest pusty) to wykonaj
        return call_back(err, dir); //zwróć funkcje call_back i przekaż nazwę katalogu
      }

      fs.readdir(dirname, (err, files) => {
        //metoda do odczytywania wszystkich plików znajdujących sie w katalogu files
        if (err) {
          //jeżeli się nie uda odczytac tego katalogu to zwróci nam sie funkcja callback
          return cb(err, dirname);
        }
        let counter = 0; //zmienna do przechowywania wartości, będzie zwiększana za każdym razem kiedy uda się usunąć jakiś plik
        files.forEach((file, index) => {
          //na files(tablica z nazwami plików) wykonujemy iteracje forEach
          //forEach(nazwa pliku, index pliku w tablicy)

          fs.unlink(path.join(dirname, file), (err) => {
            //fs.unlink(ścieżka pliku, error-first-callback), metoda do usuwania pliku
            if (!err) {
              // jeśli niema errora to zwiększ counter o 1 aby przejśc do następnego pliku
              counter++;
            }
            if (index + 1 === files.length && counter !== files.length) {
              // jeśli następny index jest równy dlugości tablicy
              //i counter nie jest równy długości tablicy (niebędzie wtedy gdy wystąpi choc jeden error w trakcie iteracji)
              //tworzę nową instancje błędu i wypisuje komunikat
              return call_back(new Error("Nie wszystkie pliki udało się usunąć."), dir);
              //w ten sposób wywoła się funkcja rmdir z linijki 62
            }
            if (counter === files.length) {
              //sprawdzamy czy counter jest taki jak ilośc plików w tablicy i wywołujemy funkcje rmdir
              return rmdir(dir, call_back);
              //robimy to po to by po zakończeniu usuwania plików wrócić do katalogu files i spróbować go usunąć(rekurencja)
            }
          });
        });
      });
    } else {
      //jeśli udało się usunąć katalog to będziemy wykonywać else
      call_back(null, dir); //wywołyjemy naszą funkcje call_back, z wartością null bo nie było błędu
      //następnie chcemy ten usunięty katalog dir przekazać dalej
    }
  });
}

//wywołanie naszego modułu do usuwania katalogu wraz z plikami
rmdir("files", (err, dirname) => {
  //w naszym przypadku podajemy tylko nazwe katalogu usuwanego
  //rmdir(ścieżka lub nazwa katalogu, call_back(błąd, nazwa katalogu który usuwamy))
  if (err) {
    return console.log(`Wystąpił błąd: ${err.message}`);
  }

  console.log(`Usunięto katalog ${dirname}`);
});
