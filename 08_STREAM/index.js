const fs = require("fs"); //import modułu file system
//ten moduł ma bardzo wiele metod do pracy z systemem plików

var stream = fs.createReadStream("./text.txt", {
    highWaterMark: 32*1024//czyli bedzie dzieliło teraz po 32 KB
}); //skorzystanie z jednego z modułów file system który nazywa się:
// createReadStream w argumencie podajemy ścieżke pliku tekstowego
//drugi argument to opcjonalny obiekt konfiguracyjny służący do tego aby długośc chunka była dzielona inaczej niż po 64KB

//od teraz do zmiennej stream możemy przypisywać zdarzenia .on ponieważ metado createReadStream dziedziczy z EventEmmitera
stream.on("data", function(chunk) {// funkcja przyjmuje jako argument chunk jeden  kawałek danych odczytany
    //od teraz możemy sobie coś z tymi danymi robić
    //argument chunk to tak naprawde buffer dlatego mozna korzystac z metod buffera

    
    console.log(chunk);//wyświetlam chunk w postaci numerów
    //console.log(chunk.toString());//wyświetlam w postaci stringa

    //buffer ma taka właściwość jak lenght czli możemy sobie na chank wywołać ta właściwość
    console.log("Wielkość kawałka: "+ Math.round( (chunk.toString().length/1024)) + "KB");
});

stream.on("end", function() {//zdarzenie "end" które wywołanie sie dopiero gdy zakończymy odczytywanie pliku
    console.log("Odczytywanie pliku zakończone");//zwrócono Odczytywanie pliku zakończone
})