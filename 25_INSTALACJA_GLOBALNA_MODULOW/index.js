const http = require("http");

const server = http.createServer((request, response)=> {
    response.end("Hello Worlccccccccccccccccd!");
});

server.listen(8000,()=> {
    console.log("Serwer uruchomiony pod adresem http://localhost:8000");
});