const fs = require("fs");
const path = require("path");
const argv = require("./argv");//importuje swój moduł


// 2. Odczytaj pliki z katalogu.
const dir = path.join(__dirname, argv.get("dir"));
//łączymy ścieżke dirname z katalogiem który został przekazany z funkcji argv
//czyli mówimy że chcemy odczytac wszystkie pliki z katalogu images(zmiennea files)

fs.readdir(dir, function(err, files) {
// .readdir(ścieżka, error-first-call_back) odczytujemy pliki z podanego katalogu
    if(err) {//obsługa błędy
        throw err;
    }

    // 3. Przefiltruj tylko te z podanym rozszerzeniem.
    console.log(files);
    //w terminalu wywołaj komende node index1.js --dir "images" --ext "png" --format "photo-$$$"
    //otrzymasz tablice z nazwami wszystkich plików w katalogu images bez względu na rodzaj rozszerzenia

    const validFiles = files.filter((file)=> { //filtrujemy tablice files
        //.filter() filtruje obiekt według podanego parametru i automatycznie dodająca przefiltrowany element do nowej tablicy, czyli filter tworzy nam nową tablice przefiltrowaną
        //.filter(funkcja iterująca po każdym elemencie tablicy)

        return path.extname(file).slice(1) === argv.get("ext");
        //zwróci nam "png"
        //pobieramy rozszerzenie z komendy jaką podajemy w terminalu --ext "png"
        //.extname(ścieżka)- metoda zwraca rozszerzenie pliku o podanej ścieżce -  zwróci nam ".png"
        //.slice() metoda do obcinania pierwszego elementu stringa czyli w naszym przypadku kropki ".png"
    });
    console.log(validFiles);
    
    // // 4. Posortuj tablicę wg daty.
    // validFiles = sortByDate(validFiles, dir);

    // // 5. Zmień nazwę każdego pliku na format zamieniając $$$ na 001 itd.
    // validFiles.forEach(function(file, index) {

    //     try {
    //         fs.renameSync(path.join(dir, file), path.join(dir, newFileName( argv.get("format"), argv.get("ext"), index + 1 )));
    //     } catch(e) {
    //         throw new Error(`Nie można było zmienić nazwy pliku: ${file}\nBłąd: ${e.message}`);
    //     }

    // });
});