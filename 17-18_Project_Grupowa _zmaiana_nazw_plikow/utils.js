const fs = require("fs");
const path = require("path");

function sortByDate(files, dir) {//metod
    //sortByDate(nazwy plików w tablicy, nazwa katalogu images)
    files.sort((a, b)=> {//.sort() sortowanie tablicy gdzie a i b są to 2 kolejne występujące po sobie elementy w tablicy
        
        //odczytujemy informacje z pliku podając jego ścieżkę(katalog i nazwa pliku)
        var aStat = fs.statSync(path.join(dir, a));
        var bStat = fs.statSync(path.join(dir, b));

        return aStat.birthtime.getTime() - bStat.birthtime.getTime();
        // .birthname - obiekt daty
        // .getTime - zwraca liczbe milisekund od momentu utworzenia pliku
        //odejmując jedno od drugiego dowiemy się który plik jest starszy
        //jeśli wartość wyjdzie minusowa to b jest starsze
        //jeśli wartość wyjdzie plusowa to a jest starsze
        
    });
    return files;//zwracam posortowaną tablice
}

function newFileName(format, ext, index) {
// newFileName(format czyli "photo-$$$", ext czyli "png", indeks w tablicy)
    // zamieniamy dolarki z nazwy formatu na 001 002 itd
    
    const formatted = format.replace(/(\$+)/, (match)=> {
    // na zmiennej format wywołujemy metode replace która zamieni nam dolary na liczby
    // (/\$/) tworzymy grupe która nam znajdzie coś ze znakiem dolara
    // (/\$+/) dodanie plusa oznacza że ma być jeden lub więcej dolarów
    // ( (/\$+/), "1" ) takie wyrażenie zamieniło by wszystkie dolary na 1, czyli bysmy dostali photo-1
    //jednak my zamist liczby podamy funkcje
        console.log(match);
        //tworzymy zmienną diff i wywołujemy metode lenght na match po to żeby napisać zamiast trzech dolarów trzy cyfry
        //czyli match.length=3 - 1 = 2 (co oznacza że 0 na początku chce powtórzyć 2 razy)
        //czyli match.length=3 - 2 = 1 (co oznacza że 0 na początku chce powtórzyć 1 raz i potem do tego dodac indeks)
        //String(index) - zamieniamy tu liczbe indeks na stringa czyli z 1 zrobi się "1" i wtedy ożemy wywołac lenght
        const diff = match.length - String(index).length;

        //"0".repeat(diff) zero zostanie powtórzone tyle razy ile wynosi diff
        // u nas powtarzamy 0 diff razy ale jeśli diff jest mniejszy od 0 to nie dodajemy żadnego zera tylko sam indeks, jesli nie to zwracamy diff i dodajemy nasz index czyli np "00 + index nr 1"
        return "0".repeat(diff - 1 < 0 ? 0 : diff) + index;

    });
    format = formatted + "." + ext; ;
    return format; //zwracam np "001.png"

}

module.exports = {
    //nazwa metody: wskazanie na funkcje o nazwie
    //w pliku index1.js wywołujemy właśnie nazwe metody
    sortByDate: sortByDate,//export metody do pliku index1.js
    newFileName: newFileName//export metody do pliku index.js
};

//komenda do wywoływania funkcji zmiany nazw plików to: node index1.js --dir "images" --ext "png" --format "nazwa$$$"
//funkcja dziwnie sie zachowuje przy wielu znakach dolara