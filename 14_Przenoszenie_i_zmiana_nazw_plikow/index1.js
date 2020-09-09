const fs = require("fs");
const path = require("path");


function file(filename) {//funkcja pomocnicza do generacji ścieżki do pliku
    return path.join(__dirname, "files", filename);
}

//ASYNCHRONICZNE ZAMIENIANIE PLIKU lorem2.txt NA PLIK lorem1.txt I PRZENIESIENIE GO DO INNEGO PODFOLDERU

fs.rename(file("lorem2.txt"), path.join(__dirname, "newFiles", "lorem1.txt"), (err)=> {
// .rename(ścieżka do pliku którego nazwe chcemy zmienić, ścieżka do pliku docelowego lorem1.txt będącego w podfolderze newFiles, err-fisrt-callback)
    if(err) {
        console.log(`Wystąpił błąd: ${err.message}.`);
        return;
    }
    console.log("Przeniesiono plik files/lorem2.txt do newFiles/lorem1.txt");
});

//ABY METODA ZADZIAŁAŁA KATALOG newFiles MUSI JUŻ ISTNIEĆ