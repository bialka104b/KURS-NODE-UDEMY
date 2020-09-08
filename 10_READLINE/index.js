const readline = require("readline");//import modułu readline

const rl = readline.createInterface({//ta funkcja przyjmuje obiekt konfiguracyjny
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt("Wpisz coś:\n>>> ");// to wyświetla tylko dodatkowe 3 strzałki przed wpisaniem komendy
rl.on("line", function(line) {//na zdarzenie line wywołujemy funkcję
    //jeżeli wpisaliśmy exit to wykonaj, zmienna line juz jest sparsowana na UTF8
    if(line === "exit") {
        return rl.close();//zakończ
    }

    console.log(`Wpisałeś: ${line}\n`);
    rl.prompt();
    //po uruchomieniu pliku >node index musimy coś  wspisać
    //jeśli wpiszemy słowo inne niż exit to nam się wyświetli console.log
    //jeśli wpiszemy exit to program sie zakończy
});