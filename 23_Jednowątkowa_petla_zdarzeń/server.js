function sleep(ms) {
  const now = Date.now();
  while (Date.now() - now < ms) {}
}
//OBSŁUGA TAKIEGO ADRESU http://localhost:8080?kill=1
const http = require("http");
const url = require("url");
const querystring = require("querystring"); //Moduł pozwalający odczytywać to kill=1
const server = http.createServer((request, res) => {
  //   fs.readFile("lorem1.txt", (err, data)=> {//odeślij ten plik ale dopiero jak go odczytasz
  //       res.end(data);
  //     console.log(err);
  //   }); //to mi nie działa bo niemam tego pliku

  const kill = querystring.parse(url.parse(request.url).query).kill;
  //url.parse pozwoli nam przekazać url i zwróci nam .query(czyli dokładnie to co jest w adresie poz naku zapytania kill=1) a potem po sparsowaniu do modułu pozwoli nam odwołać się do .kill
  //w wyniku tego gdy wpiszemy adres http://localhost:8080?kill=1 to strona będzie się wczytywała 10sek
  console.time("bbb");
  if (kill == 1) {
    //jeśli kill = 1
    sleep(10000); //metoda opóźnienia wywołana na 10 sek
    console.timeEnd("bbb");
  }
  res.end("Hello world!");
});

server.listen(8080, () => {
  console.log("Serwer uruchomiony pod adresem http://localhost:8080");
});
