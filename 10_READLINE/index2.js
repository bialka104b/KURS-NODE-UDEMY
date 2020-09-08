const readline = require("readline");//import modułu readline

const rl = readline.createInterface({//ta funkcja przyjmuje obiekt konfiguracyjny
    input: process.stdin,
    output: process.stdout
});

var percentage = 0;
function printPercentage() {

    if(percentage >= 100) {
        rl.write("\nZakończono wczytywanie.");
        return rl.close();
    }

    percentage += 5;//zwiększamy procent o 5 co te 200ms

    readline.clearLine(rl, 0);//mówimy że chcemy wyczyścić ostatnia linijkę interfejsu rl
    // zero oznacza że chcemy czyścic całą linię
    readline.cursorTo(rl, 0);//przesuwanie kursora w lewo do początku lini

    rl.write(`Postęp: ${percentage}%`);//wyświetlanie

    setTimeout(printPercentage, 200);//funkcja będzie co 200ms wywoływać samą siebie
}
printPercentage();//wywołanie