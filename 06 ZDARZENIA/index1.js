// Tworzymy klase która będzie nam pobierac cos z internetu i przesyłac dalej

const EventEmitter = require("events"); //import modułu events z dokumentacji node
const util = require("util"); //import modułu util z dokumentacji node

//var emiter = new EventEmitter(); //model subcribe/publishing tworzony na podstawie modelu obiektowego

function Puller(url) {
    this.url = url;//słowo kluczowe this kieruje na nowy obiekt
    //this.url zostaje dodana nowa właściwość do obiektu o nazwie url
    //po this.url = url przypisujemy wartość argumentu url do tego this'a
}

new Puller(); //kiedy tworzymy sobie nowy obiekt new Puller() to klasa(funkcja) Puller(url jest wywoływana)