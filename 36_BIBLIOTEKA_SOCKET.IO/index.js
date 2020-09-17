const express = require("express");
const app = express();
const server = require("http").Server(app);//przekazujemy tutaj applikacje expressa do serwera
const hbs = require("express-handlebars");
const io = require("socket.io")(server);//import socketa z przekazanym serverem

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );

app.get("/", (req, res)=> {
    res.render("home", {
        title: "Wyślij wiadomość"
    });
});

server.listen(8080, ()=> {//tu musi pisać server listen bo inaczej web socket nam nie zadziała
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});

io.on("connection", (socket)=>{
    socket.on("message", (msg)=>{
        socket.emit("message", msg.toUpperCase());//metoda emit(nazwa zdarzenia, to co chcemy odesłać) do wysyłania czegoś do servera
    })
})