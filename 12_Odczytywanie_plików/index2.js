const fs = require("fs");
const path = require("path");

function file(filename) {//funkcja pomocnicza która wygeneruje ścieżkę do pliku
    //filename to argument nazwy pliku który będziemy podawać do wywołania
    return path.join(__dirname, "files txt", filename);
}
//ODCZYTYWANIE PLIKÓW ZA POMOCĄ METODY createReadStream
const lorem3 = fs.createReadStream(file("lorem3.txt"), {
    encoding: "utf8"//obiekt konfiguracyjny z odkodowywaniem
});

lorem3.pipe(process.stdout);//na lorem3 wywołano stream .pipe