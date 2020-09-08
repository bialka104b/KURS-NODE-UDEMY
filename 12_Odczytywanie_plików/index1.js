const fs = require("fs");
const path = require("path");

function file(filename) {//funkcja pomocnicza która wygeneruje ścieżkę do pliku
    //filename to argument nazwy pliku który będziemy podawać do wywołania
    return path.join(__dirname, "files txt", filename);
}

//SYNCHRONICZNE ODCZYTYWANIE PLIKÓW
const lorem2 = fs.readFileSync(file("lorem2.txt"));
console.log(lorem2.toString("utf-8"));