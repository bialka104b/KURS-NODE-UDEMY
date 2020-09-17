const express = require("express");
const WebSocketServer = require("ws").Server;
const hbs = require("express-handlebars");
const app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );

app.get("/", (req, res)=> {

    res.render("home", {
        title: "Wyślij wiadomość"
    });
});

app.listen(8080, ()=> {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});
const wss = new WebSocketServer({port: 5500});
wss.on("connection", (socket)=> {//funkcja wykona się za każdym razem gdy ktoś podłączy się do servera ale tylko raz
    //socket to będzie podłączony klient
    socket.on("message", (message)=>{//za każdym razem gdy klient wyśle do serwera coś to wykona sie ta funkcja
        console.log(message);
        socket.send(message.toUpperCase());//tutaj możemy coś odesłać
    })
})