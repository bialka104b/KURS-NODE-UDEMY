const express = require("express");
const hbs = require("express-handlebars");
//const bodyParser = require("body-parser");
const users = require("./users");
//const api = require("./api");
const app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );
//app.use( bodyParser.json() );

//app.use("/api", api);

app.get("/",(request, response)=> {
    response.render("home", {
        title: "Lista użytkowników",
        users: users.list()
    });
});

//URUCHOMIENIE SERWERA
app.listen(8080, ()=> {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});