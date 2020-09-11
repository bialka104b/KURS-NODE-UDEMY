const fs = require("fs");
const path = require("path");
const http = require("http");

const MIME_TYPES = {//tworze tablice do której będzie sie można odwoływać w metodzie response.writeHead()
    ".html": "text/html",//do htmla
    ".css": "text/css",//do cssa
    ".jpg": "image/jpeg",//do obrazów
    ".ico": "image/vnd.microsoft.icon"
};

//TWORZENIE SERWERA
const server = http.createServer((request, response) => {
  //ta funkcja sie wykona dla każdego nowego połączenia

  console.log("Request to: " + request.url + " koniec");
  let fileName = null;
  let file = null;

  if (request.url === "/" || request.url === "index.html") {
    //sprawdzamy tutaj czy wpisaliśmy http://localhost:8080/index.html czy nie
    fileName = "index.html";
  } else {
    fileName = request.url.slice(1);//to jest potrzebne żeby obsłużyć folder css/style.css
    //za pomocą metody slice wycinam pierwszy znak "/"
  }

  file = fs.createReadStream(path.join(__dirname, "public", fileName)); //tworzymy ścieżke do pliku który chcemy uruchomić, metoda createReadStream zwróci nam Stream-a

  file.on("error", ()=> {//przypisuje do file zdarzenie on(error)
      response.writeHead(404, "Not Found");//jeśli status code będzie 404 albo jakiś plik nie będzie istniał to wysyłamy informacje Not Found
      response.end();//kończymy prace serwera,
      // oryginalnie w filmie było to włączone ale coś sie chyba pozmieniało i przy wyłączeniu .end() wywala mi serwer gdy pytam o nieznany plik, dlatego trzeba by poszukać rozwiązania tego problemu
  });

  //response.writeHead(200, { "Content-Type": "text/html" }); //sposób w jaki będzie wysyłana informacjado przeglądarki czyli jako tag html
  response.writeHead(200, {"Content-Type": MIME_TYPES[path.extname(fileName)]});
  //MIME_TYPES[ścieżka.rozszerzenie(z pliku fileName)] - cała metoda zwróci odpowiednią wartość z tablicy za pomocą klucza
  file.pipe(response); //za pomoca pipe odczytujemy ten stream do naszego response(strona internetowa)
});

//URUCHOMIENIE SERWERA
server.listen(8080, () => {
  console.log("Serwer uruchomiony pod adresem: http://localhost:8080");
});
