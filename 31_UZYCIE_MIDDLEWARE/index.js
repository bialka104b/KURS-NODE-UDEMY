const express = require("express");
const app = express();


app.use((request, response, next)=> {//dla każdego adresu(np z podfolderem) i połączenia będziemy usuwać nagłówek
    response.locals.data = "Dane dodane wcześniej";//metoda która pozwala przekazywać dalej jakies zmienne, dane lokalne
    //zostanie to przekazane do metody app.get() jako ${response.locals.data}
    response.removeHeader("X-Powered-By");//usuwanie nagłówka o tej nazwie
    next();//to linijka musi być aby kolejna funkcja app.get została wykona

});//cała ta funkcja to jest właśnie middleware

app.get("/", (request, response)=> {
    response.send(`
        Strona główna
        ${response.locals.data}
    `);//tu zostanie wyrenderowany tekst "Dane dodane wcześniej"
});

app.listen(8080, ()=> {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});