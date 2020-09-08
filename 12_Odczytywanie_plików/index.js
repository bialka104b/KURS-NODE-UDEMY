const fs = require("fs");
const path = require("path");

function file(filename) {//funkcja pomocnicza która wygeneruje ścieżkę do pliku
    //filename to argument nazwy pliku który będziemy podawać do wywołania
    return path.join(__dirname, "files txt", filename);
}

//ASYNCHRONICZNE ODCZYTYWANIE PLIKÓW
fs.readFile(file("lorem1.txt"), "utf-8", (err, data)=> {//utf8 oznacza odkodowywanie bo domyslnie dostaniemy zakodowany buffer
// file funkcja z argumentem nazwy pliku, kodowanie UTF8, error-first-callback
    if(err) {//obsługa błędu jeśli występuje
        console.log(`Wystąpił błąd: ${err.message}.`);
        throw err;
    }

    console.log(data);//tutaj można też podać metode odkodowywania console.log(data.toString("utf-8"))
});
