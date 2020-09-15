//const { request } = require("express");
const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");//middleware, moduł do parsowania
const users = require("./users");
const api = require("./api/api");//import funkcji POST, DELETE, PUT, GET
const app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );
app.use( bodyParser.json() );//parser za pomocą jsona, są jeszcze .urlencoded()

app.use(api);//używamy teraz tego pliku api.js
//app.use("/api", api);//można też to zapisać tak ale wtedy trzeba w pliku api.js usunąć ze wszystkich ścieżek tekst "/api"

app.get("/",(request, response)=> {
    response.render("home", {//widok "home" znajduje sie w pliku views/home.handlebars
        title: "Lista użytkowników",//renderuje tytuł
        users: users.list()//renderuje liste uzytkowników która znajduje się w pliku users/users.js
    });
});

//URUCHOMIENIE SERWERA
app.listen(8080, ()=> {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});