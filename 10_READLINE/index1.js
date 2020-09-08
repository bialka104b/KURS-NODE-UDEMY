const readline = require("readline");//import modułu readline

const rl = readline.createInterface({//ta funkcja przyjmuje obiekt konfiguracyjny
    input: process.stdin,
    output: process.stdout
});

var prize = [100, 1000, 2000, 400000, 50000];//tablica z nagrodami do wygrania

rl.question("Wybierz sejf od 1 do 5 wpisując liczbę\n", function(answer) {//użytkownik wpisuje jakąś wartość która jest przekazywana do answer jako string

    console.log(`Wygrałeś ${prize[parseInt(answer) - 1]} PLN.`);//wyświetlamy tekst i parsujemy stringa na liczbe
    //odejmujemy 1 bo chcemy sie odwołac do indeksu w tablicy

    rl.close();//kończymy proces
});
//wywołaj funkcje za pomocą komendy node index1