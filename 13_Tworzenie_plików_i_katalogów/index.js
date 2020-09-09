const fs = require("fs");
const path = require("path");

//TWORZENIE KATALOGU "files" ZA POMOCĄ .mkdir(ścieżka katalogu, error-first-callback)
fs.mkdir(path.join(__dirname, "files"), (err)=> {
    
    if(err) {//wykona się tylko wtedy gdy nie uda się stworzyć katalogu lub katalog już istnieje
        //aby sprawdzić informacje o błędzie wywołaj console.log(err)
        //zobaczysz tam: errno: -4075, code: 'EEXIST',  syscall: 'mkdir'
        //code to nazwa błędu i możemy ją wykorzystac do jego obsłużenia
        if(err.code === "EEXIST"){
                console.log("Katalog już istnieje.");
            return;
        }

        console.log(`Nie udało się utworzyć katalogu. Powód: ${err.message}.`);
        throw err;//jeśli będzie inny błąd niż EEXIST to wyrzuć tutaj go
    }

    console.log("Katalog files został utworzony.");

});