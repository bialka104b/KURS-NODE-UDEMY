//GŁÓWNY PLIK DO WYWOŁANIA w NODE
// Tworzymy klase która będzie nam pobierac cos z internetu i przesyłac dalej

const EventEmitter = require("events"); //import modułu events z dokumentacji node
const util = require("util"); //import modułu util z dokumentacji node

//var emiter = new EventEmitter(); //model subcribe/publishing tworzony na podstawie modelu obiektowego

function Puller(url) {
  EventEmitter.call(this); //aby wszystko odpowiednio działało i aby nowy poniższy obiekt this.url
  //otrzymał odpowiednie właściwości dodajemy to:

  this.url = url; //słowo kluczowe this kieruje na nowy obiekt
  //this.url zostaje dodana nowa właściwość do obiektu o nazwie url
  //po this.url = url przypisujemy wartość argumentu url do tego this'a
}

Puller.prototype.pull = function () {
  // tworzona metoda pull() na prototypie Puller

  var self = this;
  self.interval = setInterval(function () {
    self.emit("data", {
      data: "pobrane dane",
      url: self.url,
    });
  }, 1000); // chce funkcje setInterval wywołac co sekunde
}; //ta funkcja rozpocznie nam pobieranie danych z interetu

Puller.prototype.stop = function (cb) {
  // tworzona metoda stop() na prototypie Puller

  this.removeListener("data", cb); //z naszego pullera chce usunąć zdarzenie "data" i następnie usunąć cb - callback
  //
}; //ta funkcja rozpocznie nam pobieranie danych z interetu

util.inherits(Puller, EventEmitter); //jako argumenty podajemy naszą klasę czyli Puller
//i drugi argument, z czego ma ona dziedziczyć czyli EvetntEmitter
//od teraz wszystkie metody jakie ma Event Emiter będzie mieć też nasza klasa Puller

module.exports = Puller;
