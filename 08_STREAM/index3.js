const fs = require("fs"); //import modułu file system
const Console = require("console").Console; //import modułu console z dokumentacji node
//po require musimy sie jeszcze odwołać do Console
const zlib = require("zlib").createGzip(); //import podułu zlib i wywołanie na tym metody createGzip()
//tym zlibem mozna na przykład kompresować pliki

var stream = fs.createReadStream("./text.txt", {
  //do odczytywania
  highWaterMark: 32 * 1024,
});

//chcemy utworzyc sobie nową konsole

var logs = fs.createWriteStream("./logs.txt"); //do nadpisywania, w argumencie podajemy nazwe pliku która ma zostać utworzona
var errors = fs.createWriteStream("./errors.txt");
const myConsole = new Console(logs, errors);
//1 argument to stream do którego będa przekazywane wszystkie logi (domyslnie jest process.stdout)
//2 argument będą do niego przekazywane błędy jako parametr (domyślnie jest process.stderr)

var kompresowanie = fs.createWriteStream("./text.txt.gz");
console.time("zlib");//początek odmierzania czasu
stream.pipe(zlib).pipe(kompresowanie).on("close", function(){
    console.timeEnd("zlib");// ta sztuczka sprawdzi nam ile się pakuje plik
});//pipe mozna łączyć i wielokrotnie tu wywoływać
//plik jest pakowany i przekazywany dalej jako kompresowanie i powinien nam sie pojawic po wywołaniu teraz nowy plik text.txt.gz
//kiedy nam się wszystko zakończy  zdarzenie "close" zakończy odmierzać czas timeEnd("zlib")

myConsole.log("Pierwsza wiadomość");
myConsole.log("Druga wiadomość");
myConsole.error("Błędna wiadomość");
//po wywołaniu tego pliku w node pierwsza i druga wiadomośc pojawi sie w pliku logs.txt
//zaś Błędna wiadomośc trafi do pliku errors.txt

