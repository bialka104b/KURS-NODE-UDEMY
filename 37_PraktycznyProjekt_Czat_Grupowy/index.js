
const express = require("express");
const app = express();
const server = require("http").Server(app);
const hbs = require("express-handlebars");
const chatExport = require("./chat/chatExport");
//const io = require("./public/js/socket.io")(server);
const io = require("socket.io")(server);

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );

app.get("/", (req, res)=> {

    res.render("home", {
        title: "Czat grupowy",
        styles: [
            "bootstrap.css",
            "custom.css"
        ],
        scripts: [
            "jquery.js",
            "handlebars.js",
            "socket.io.js",
            "chat.js"
        ]
    });

});

server.listen(8080, function() {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");
});

chatExport(io);//przekazanie modułu io do importowanego skryptu chatExport
//aby można było korzystać z io w innym pliku