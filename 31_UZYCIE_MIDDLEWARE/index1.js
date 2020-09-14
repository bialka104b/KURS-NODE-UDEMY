const express = require("express");
const serveIndex = require("serve-index"); //to jest moduł do obrazków
const app = express();

const USER = "admin";
const PASSWORD = "1234";

app.use("/files", express.static("public"));
//"/files" ścieżka dla której będzie ustawione serwowanie obrazków
// express.static("public") z jakiego katalogu chcemy te obrazki serwować
app.use("/files", serveIndex("public"));
//obie linijki są potrzebne aby serwować obrazki pod adresem http://localhost:8080/files/

app.use("/admin", (request, response, next) => {
  //ten middleware wykona sie tylko dla app.get("/admin")
  if (request.query.user === USER && request.query.password === PASSWORD) {
    //pobieramy query.user i przyrównujemy do zmiennej
    //pobieramy query.password i przyrównujemy do zmiennej
    return next(); //jeżeli tak to wykonaj app.get("/admin")
  }
  //jeżeli nie to przekierowujemy do strony głównej za pomoca metody redirect()
  response.redirect("/");
});

app.get("/", (request, response) => {
  response.send(`
        Strona główna
    `);
});

app.get("/admin", (request, response) => {
  //tworzymy ścieżke z podfolderem admin
  response.send("Zaplecze administratora."); // http://localhost:8080/admin?user=admin&password=1234
});

app.listen(8080, () => {
  console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});
