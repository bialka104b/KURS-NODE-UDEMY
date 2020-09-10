const fs = require("fs");
const path = require("path");
const argv = require("./argv");//importuje swój moduł

//GRUPOWA ZMIANA NAZW PLIKÓW
// node index.js --dir 'files' --ext 'png' --format 'photo-$$$'
// --dir "files" oznacza że chce zmienić nazwy wszystkich plików które są w katalogu files
// --ext "png" chce przefiltrować wszystkie nazwy tych plików które maja rozrszerzenie png
// --format "photo-$$$" chce taka wyjąciową nazwe plików

// UWAGA! W systemie Windows w powyższym poleceniu zamień
// apostrofy na cudzysłowy!

/*
1. Sprawdź poprawność podanych argumentów .plik index.js i argv.js
2. Odczytaj pliki z katalogu. plik index1.js
3. Przefiltruj tylko te z podanym rozszerzeniem. index1.js
4. Posortuj tablicę wg daty.
5. Zmień nazwę każdego pliku na format zamieniając $$$ na 001 itd.
*/

// 1. Sprawdź poprawność podanych argumentów
console.log(process.argv.slice(2)); // process.argv(bez slice) dostaniesz tablice ze wszystkimi podanymi tam argumentami
// [
//   "C:\\Program Files\\nodejs\\node.exe", //ścieżka do pliku wykonywanego node
//   "C:\\Users\\HP\\Projekty w VSC\\Kurs-Node-Udemy\\17_Project_Grupowa _zmaiana_nazw_plikow\\index", //ścieżka do aktualnego katalogu
// ];
//aby się ich pozbyć można dopisać process.argv.slice(2) metoda obetnie 2 argumenty

//teraz wpisz w terminalu: node index.js --dir "files" --ext "png" --format "photo-$$$"
//otrzymasz: [ '--dir', 'files', '--ext', 'png', '--format', 'photo-index$' ]

//wywołuje funkcje argv zaimportowaną z pliku argv.js
console.log(argv.get("dir"));
//w terminalu wpisz: node index.js --dir "files" --ext "png" --format
//otrzymasz: files

if( !argv.validate(["dir", "ext", "format"]) ) {//metoda walidate do sprawdzania czy wszystkie argumenty zostały podana, ma zwracać true lub false
    throw new Error("Nie podano poprawnych parametrów");
}