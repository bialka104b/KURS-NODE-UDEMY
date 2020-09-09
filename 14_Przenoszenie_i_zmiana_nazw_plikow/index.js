const fs = require("fs");
const path = require("path");


function file(filename) {//funkcja pomocnicza do generacji ścieżki do pliku
    return path.join(__dirname, "files", filename);
}

//ASYNCHRONICZNE ZAMIENIANIE PLIKU lorem1.txt NA PLIK lorem2.txt
fs.rename(file("lorem1.txt"), file("lorem2.txt"), (err)=> {
// .rename(ścieżka do pliku którego nazwe chcemy zmienić, ścieżka do pliku docelowego, err-fisrt-callback)

    if(err) {//gdyby wystąpił błąd, zostanie on tutaj obsłuzony
        console.log(`Wystąpił błąd: ${err.message}.`);
        return;
    }
    console.log("Zmieniono nazwę pliku lorem1.txt na lorem2.txt");
});
//TRZEBA PAMIĘTAĆ ŻE FUNKCJA ZMIENIA NAM PLIK Z TĄ SAMĄ ZAWAROŚCIĄ TREŚCI ALE NIE TWORZY NAM NOWEGO
// OPERACJA JEST WYKONANA DOKŁADNIE NA TYM SAMYM PLIKU
//WARUNKIEM WYKONANIA OPERACJI JEST ISTNIENIE PLIKU lorem1.txt NA POCZĄTKU