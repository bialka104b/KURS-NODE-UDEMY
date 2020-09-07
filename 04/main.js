const add = require("./add");
//odwołanie na plik add.js jest wczytywane tylko 1 raz 
//nawet gdyby takich odwołań dać kilka to plik zostanie wczytany tylko 1 raz

console.log("Moduł main.js");
console.log(add(5, 6));

//console.log(wiadomosc);

console.log("Ścieżka do pliku to: " + __filename); //zwróci nam ścieżke do pliku main.js
console.log("Ścieżka do katalogu to: " + __dirname); //zwróci nam ścieżke do katalogu w którym znaduje sie main.js

//Gdybyśmy chcieli sprawdzić czy plik add.js został zaimportowany przez reqire to
//można skorzystać z takiego czegoś
console.log("Czy to główny moduł? " + (require.main === module ? "Tak" : "Nie"));
//require jest to funkcja którakieruje na moduł. Ma ona właściwość main
//jeśeli require.main jest równe module to znaczy że jesteśmy w pliku który został wywołany za pomocą node
//jeśli dostaniemy false to znaczy że moduł został wywołany za pomoca require
