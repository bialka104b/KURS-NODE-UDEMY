const fs = require("fs");
const path = require("path");

function file(filename) {
  //funkcja pomocnicza do odczytu ścieżki do pliku
  //filename to zmienna z nazwą pliku
  return path.join(__dirname, "files", filename);
}

//ZAPISYWANIE DO STREAMÓW
const lorem2 = fs.createWriteStream(file("lorem2.txt")); //stream odczytywalny
// metoda write() do nadpisywania, metoda .end() do nadpisywania i zamykania pliku

//PRZEKOPIOWUJEMY TREŚĆ Z PLIKU lorem1 do lorem2
//kiedy zakończymy zapisywanie do pliku lorem2 to ta funkcja niżej sie wykona
lorem2.on("finish", () => {
  console.log("Zakończono kopiowanie treści pliku.");
});

const lorem1 = fs.createReadStream(file("lorem1.txt")); //stream odczytywalny

lorem1.pipe(lorem2); //metoda pipe() zapisywanie treści do innego pliku(streamu)

//ABY TO ZADZIAŁAŁO MUSi ISTNIEĆ PLIK lorem1.txt W KATALOGU files
