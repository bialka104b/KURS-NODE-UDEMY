const EventEmitter = require("events"); //import modułu events z dokumentacji node

var emiter = new EventEmitter(); //model subcribe/publishing tworzony na podstawie modelu obiektowego

emiter.setMaxListeners(10); // metoda która pozwoli na przyjęcie maksymalnie 10 wiadomości na raz.
//Jeśli wpiszemy 0 to będzie to wartośc nielimitowana

emiter.on("wiadomosc", function (msg) {
  // na zdarzenie o nazwie "wiadomosc" chcemy wywołać ta funkcje
  console.log("wiadomość: " + msg); //i chcemy aby emitr coś do niej przekazał do zmiennej msg
}); // cała funkcja wykona się dopiero wtedy gdy zdarzenie wiadomosc będzie miało miejsce

//tutaj moment gdzie funkcja zostanie wywołana
emiter.emit("wiadomosc", "Hello World");

const Puller = require("./index3");
var puller = new Puller("http://west-info.pl");

function printData(data) {
  console.log(`Otrzymane dane: ${data.data} z adresu: ${data.url}`);
}

puller.on("data", printData); //za każdym razem kiedy Puller wykona emit("data") i przekaże jakiś obiekt z informacjami
//to chcemy wywołać te funkcje printData()
// .on przypisanie zdarzenia (alternatywa to .addListener)
//.removeListener usuwanie zdarzenia

puller.pull(); //następnie chciałbym tego pyllera uruchomić za pomoca metody pull() którą stworzymy w index2.js

//metoda która zatrzyma puller.pull() po 5 sekundach
setTimeout(function () {
  puller.stop(printData);
}, 5000);
