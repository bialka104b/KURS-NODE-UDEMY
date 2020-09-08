const fs = require("fs"); //moduł do pracy z plikami
const path = require("path"); //moduł do pracy z ścieżkami

fs.readdir(path.join(__dirname, "files txt"), (err, files)=> {
    //readdir() metoda do odczytywania zawartości katalogu
    if(err) {
        console.log(`Wystąpił błąd: ${err.message}.`);
        throw err;
    }
    console.log(files); //wyświetli nam liste z nazwami plików w katalogu files txt

    //aby odczytać informacje z tych plików trzeba dołożyć kolejną metode na zmiennej files
    files.forEach((filename)=>{//pod filename są poszczególne stringi z nazwami tych plików

        fs.stat(path.join(__dirname, "files txt", filename), (err, stats)=> {
            //odnajdujemy ścieżke do pliku i wywołujemy metode stat która sprawdza czy plik istnieje

            if(err) {
                console.log(`Wystąpił błąd: ${err.message}.`);
                throw err;//OBSŁUGA BŁEDÓW W METODACH ASYNCHRONICZNYCH ODBYWA SIĘ WEWNĄTRZ FUNKCJI CALLBACK
            }

            console.log(`Informacje o pliku ${filename}:`);
            console.log(`Data utworzenia: ${stats.birthtime.getFullYear()}\n`);//wyświetlamy rok kiedy taki plik został utworzony

        });

    });

});