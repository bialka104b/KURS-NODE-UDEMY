const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser"); //middleware, moduł do parsowania
const users = require("./users");
const api = require("./api/api"); //import funkcji POST, DELETE, PUT, GET
const app = express();

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.json()); //parser za pomocą jsona, są jeszcze .urlencoded()

app.use("/api", api);

app.get("/", (request, response) => {
  users.list((err, users) => {
    //ta metoda  zastepuje metode render z poprzedniej lekcji, bo teraz ccemy to robic asynchhronicznie
    // const user = err ? [] : users
    response.render("home", {
      //widok "home" znajduje sie w pliku views/home.handlebars
      title: "Lista użytkowników", //renderuje tytuł
      users:  err ? [] : users //renderuje liste uzytkowników która znajduje się w pliku users/users.js
      //jeśli wystąpi błąd to wygeneruje nam pustą tablice, jeżeli nie to dostaniemy użytkowników users
    });
  });
});

app.get("/user/:id", (request, response) => {
  users.get(request.params.id, (err, data) => {
    if (err) {
        response.status(404).send(err.message);
    } else {
        response.status(!data ? 404:200).render("user", data);
    }
  });
});

//URUCHOMIENIE SERWERA
app.listen(8080, () => {
  console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});
