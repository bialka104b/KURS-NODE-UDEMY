const express = require("express");
const hbs = require("express-handlebars");//import modułu express-handlebars
const app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));//ustawiamy opcje dla silnika
//hbs({obiekt konfiguracyjny})
//"main" nazwa głównego pliku(layoutu)
app.set("view engine", "handlebars");//taka linijka pojawi się zawsze przy wszystkich template engine

app.use( express.static("public") );

app.get("/", (request, response)=> {
    response.render("home", {//zamiast korzystać z metody .send() korzystamy z .render
        //render("nazwa pliku.handlebars który chcemy wyrenderować", {obiekt który w tym widoku się pojawi})
        title: "Strona główna",//to jest nasze h1
        content: "To jest treść strony głównej."//to jest nasze p
        //te 2 wartości wylądują w pliku home.handlebars
    });
});

app.get("/blog/:date/:id?", (request, response)=> {
    response.render("blog", {
        title: "Blog",
        date: request.params.date,
        id: request.params.id
    });
});

app.listen(8080, ()=> {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});