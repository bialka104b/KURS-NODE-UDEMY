const http = require("http"); //moduł http do którego można się podłączyć z przeglądarki internetowej
//moduł HTTP korzysta pod spodem z mudułu NET

const server = http.createServer((request, response) => {
  //tworzymy serwer http
  //.createServer(call_back(zapytanie, odpowidź)) funkcja wywoływana dla każdego nowego połączenia
  //request - zapytanie do przeglądarki
  //response - odpowiedź od przeglądarki
  //request i response są to streamy, nazwa tych argumentów jest dowolna jednak trzeba byś świadomym że są to stream-y

  let body = null; //na początku nasza końcuwka url będzie null
  let status = 200;
  if (request.url === "/") {
    body = "Strona główna";
  } else if (request.url === "/o-nas") {
    body = "O nas"; //jeżeli będzie w url tekst o-nas
  } else {
    body = "Nie znaleziono";
    status = 404; //jeśli jakiś zasób nie istnieje pokaże nam 404
  }

  response.writeHead(status, { "Content-Type": "text/html" });
  response.write(body);
  response.write(`<h3>HTTP ${request.httpVersion} ${request.method}</h3>`); //method np metoda GET POST DELETE
  response.write(`<h3>URL: ${request.url}</h3>`); //http://localhost:8000/o-nas o nas to jest ten nasz request.url
  response.write(`<pre>${JSON.stringify(request.headers, null, 4)}</pre>`); //wyświetlamy wszystkie nagłówki które zostały wysłane przez pzeglądarke
  //JSON.stringify() metoda do wyświetlania obiektu w JSON, liczba 4 to ilość spacji przy wcięciach w JSONIE
  response.end(); //zakończenie pracy serwera
});

server.listen(8000, () => {
  //uruchomienie serwera na porcie 8000
  console.log("Serwer uruchomiony pod adresem http://localhost:8000");
});
