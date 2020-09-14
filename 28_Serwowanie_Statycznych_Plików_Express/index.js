const express = require("express");
const app = express();

app.use( express.static("public") );//serwowanie statycznych plików
//ODWOŁUJEMY SIE DO EXPRESS .static(podajemy folder w którym mamy statyczne pliki do zaserwowania (index.html, css i reszta), wystarczy nazwa katalogu w którym jest html)
//plik html musi się nazywać index
//KIEDY KTOŚ WYŚLE ZAPYTANIE POD app.get TO NAJPIERW I TAK WYKONA SIĘ FUNKCJA USE

app.get("/", (request, response)=> {
    response.send("Hello world!");//ta linijka została pominięta ponieważ express znalazł plik index.html i jego zaserwował
});

//URUCHOMIENIE SERWERA ZA POMOCĄ EXPRESS
app.listen(8080, function() {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});