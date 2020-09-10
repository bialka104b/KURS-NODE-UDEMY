const args = process.argv.slice(2);//odwołujemy sie do argumentów opisanych w pliku index.js obcinając 2 główne argumenty

function argv(arg) {//funkcja która zwróci nam argumenty

    var index = args.indexOf("--" + arg);//indexOf sprawdzanie pod jakim indexem w tablicy znajduje się dir
    //jeżeli zostanie znaleziony index to zwróci nam index, jeżeli nie to zwróci nam -1

    //tablica args[ '--dir', 'files', '--ext', 'png', '--format', 'photo-index$' ]
    if(index !== -1 && args[index + 1] !== undefined) {//jeżeli index nie jest równy -1 i element o indeksie o 1 większym istnieje i nie ma wartości undifined  args[index+1]
        //jeżeli takie elementy są to zwracamy wartość "files"
        return args[index + 1];
    } else {
        //jeśli ich niema to zwracamy wartośc null
        return null;
    }
}

function validateArgs(args) {//funkcje do walidowania czy wszystkie argumenty zostały podane
    //jako argument funkcja przyjmie parametr talice podana w pliku index.js
    //args = ["dir", "ext", "format"]

    let valid = true;//domyslnie walidacja ma być true

    args.forEach((arg)=> {//iterujemy na tablicy
        //pod arg będzie jeden z wartości tablicy args (numer indeksu)
        if(!argv(arg)) {//wykorzystując wcześniej napisaną funkcje argv sprawdzamy czy taki argument sie tam znajduje, jeśli nie to zmiennej walid przypisujemy false 
            valid = false;
        }

    });
    return valid;//zwracam wartośc walidacji true lub false
    //teraz spróbuj jeszcze raz wywołac komende node index.js --dir "files" --ext "png" --format
    //otrzymasz:Nie podano poprawnych parametrów i informacje o błędzie
}

module.exports = {// eksportujemy wszystko do głównego pliku index.js
    get: argv,//eksportujemy obiekt z funkcją o nazwie argv
    validate: validateArgs//exportujemy funkcje do walidowania czy wszystkie argumenty zostały podane
};