const fs = require("fs"); //import modułu file system
//ten moduł ma bardzo wiele metod do pracy z systemem plików

var stream = fs.createReadStream("./text.txt", {
    highWaterMark: 32*1024//czyli bedzie dzieliło teraz po 32 KB
}); //skorzystanie z jednego z modułów file system który nazywa się:
// createReadStream w argumencie podajemy ścieżke pliku tekstowego
//drugi argument to opcjonalny obiekt konfiguracyjny służący do tego aby długośc chunka była dzielona inaczej niż po 64KB

//process.stdout//process standardoutput
//zapisywany stream writeable

stream.pipe(process.stdout);// jako argument podajemy proces który jest zapisywalny
//ta metoda zadziała tak samo jak w pliku index.js, czyli wyswietli nam cały plik text.txt
// metoda pie rózni sie tym że jest krótsza wygodniejsza i metoda end wywołuje sie automatycznie