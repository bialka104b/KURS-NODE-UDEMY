const calc = require("./calculator/index.js"); //importuje wszystkie 4 funkcje z pliku index.js

console.log("Moduł main.js");

console.log(calc.add(10, 2)); // tutaj jak widać wywołujemy po nazwie add która wyeksportowaliśmy w index.js
//a nie po nazwie modułu w danym pliku

console.log(calc.divide(calc.add(10, 2), 2)); // można zagnieżdzać ale trzeba wywoływać metody na zmiennej calc

//odwołujemy się do obiektu w index.js o nazwie config gdzie mamy wczytany json z nazwą i wersją modułu
console.log(
    "Nazwa modułu: " +
    calc.config["name Nazwa Naszego Modułu"] +
    "Wersja modułu: " +
    calc.config["version Wersja Naszego Modułu"],
);
