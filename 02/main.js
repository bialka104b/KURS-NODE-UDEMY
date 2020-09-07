//plik fo którego zaimportujemy plik add.js aby móc korzystac z funkcji add
//w node każdy plik javascriptpowy jest oddzielnym modułem dlatego każdy z takich plików ma dostępną funkcje require()

const add = require("./add.js"); //funkcja która zaimportuje nam plik add.js jako argument podajemy nazwe

console.log(add); //aby wywołac tutaj tą funkcje zaimportowana za pomocą export.module trzeba podać równiez parametry
// poniżej przykład tej samej funkcji z parametrami
console.log(add(10, 15));

// pomimo importu pliku add.js nie ma dostępu do nazw zmiennych z tego pliku
//oto przykład
console.log(wiadomosc); 