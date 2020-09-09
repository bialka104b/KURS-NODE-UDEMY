const fs = require("fs");
const path = require("path");

//ASYNCHRONICZNE TWORZENIE KATALOGU Z LOSOWYM NUMERKIEM W NAZWIE
fs.mkdtemp(path.join(__dirname, "uploads-"), (err, dir)=> {
    //mkdtemp(ścieżka katalogu, "nazwa katalogu-", error-first, callback(error, dir to nazwa utworzonego katalogu))
    //za każdym razem będzie nam tworzyło nowy katalog o innej nazwie
    if(err) {
        console.log(`Nie udało sie utworzyć tymczasowego katalogu. Powód: ${err.message}.`);
        return;
    }
    console.log(`Utworzono tymczasowy katalog: ${dir}`);
});

//SYNCHRONICZNE TWORZENIE KATALOGU Z LOSOWYM NUMERKIEM W NAZWIE
// mkdtempSync(ścieżka folderu, "nazwa folderu-losowy numerek")
const tempDir = fs.mkdtempSync(path.join(__dirname, "uploads-"));
console.log(`Utworzono tymczasowy katalog: ${tempDir}`);