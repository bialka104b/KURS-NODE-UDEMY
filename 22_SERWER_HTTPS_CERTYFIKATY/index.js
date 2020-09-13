const fs = require("fs");
const path = require("path");
const https = require("https");

const options = {//tu odczytujemy klucz i certyfikat
    //metody odczytuja zawartość pliku całkowicie, nie ma tu żadnego streama
    key: fs.readFileSync(path.join(__dirname, "cert", "localhost.key")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "localhost.cert"))
};

console.log(options);
const MIME_TYPES = {
    ".html": "text/html",
    ".css": "text/css",
    ".jpg": "image/jpeg",
    ".ico": "image/vnd.microsoft.icon"
};

const server = https.createServer(options, (req, res)=> {

    let fileName = null;
    let file = null;

    if(req.url === "/" || req.url === "/index.html") {
        fileName = "index.html";
    } else {
        fileName = req.url.slice(1);
    }

    file = fs.createReadStream(path.join(__dirname, "public", fileName));
    file.on("error", (err)=> {
        console.log(err);
        res.writeHead(404, "Not Found");
        res.end();
    });

    res.writeHead(200, {"Content-Type": MIME_TYPES[path.extname(fileName)]});
    file.pipe(res);
});

server.listen(8080, ()=> {
    console.log("Serwer uruchomiony pod adresem: https://localhost:8080");
});