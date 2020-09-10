const fs = require("fs");
const path = require("path");
const argv = require("./argv"); //importuje swój moduł
const sortByDate = require("./utils").sortByDate; //import pliku utils i od razu wywołanie metody "sortByDate" wskazującej na funkcje sortByDate
const newFileName = require("./utils").newFileName; //import pliku utils i od razu wywołanie metody "newFileName" wskazującej na funkcje newFileName

// 2. Odczytaj pliki z katalogu.
const dir = path.join(__dirname, argv.get("dir"));
//łączymy ścieżke dirname z katalogiem który został przekazany z funkcji argv
//czyli mówimy że chcemy odczytac wszystkie pliki z katalogu images(zmiennea files)

fs.readdir(dir, function (err, files) {
  // .readdir(ścieżka, error-first-call_back) odczytujemy pliki z podanego katalogu
  if (err) {
    //obsługa błędy
    throw err;
  }

  // 3. Przefiltruj tylko te z podanym rozszerzeniem.
  console.log(files);
  //w terminalu wywołaj komende node index1.js --dir "images" --ext "png" --format "photo-$$$"
  //otrzymasz tablice z nazwami wszystkich plików w katalogu images bez względu na rodzaj rozszerzenia

  let validFiles = files.filter((file) => {
    //filtrujemy tablice files
    //.filter() filtruje obiekt według podanego parametru i automatycznie dodająca przefiltrowany element do nowej tablicy, czyli filter tworzy nam nową tablice przefiltrowaną
    //.filter(funkcja iterująca po każdym elemencie tablicy)

    return path.extname(file).slice(1) === argv.get("ext");
    //zwróci nam "png"
    //pobieramy rozszerzenie z komendy jaką podajemy w terminalu --ext "png"
    //.extname(ścieżka)- metoda zwraca rozszerzenie pliku o podanej ścieżce -  zwróci nam ".png"
    //.slice() metoda do obcinania pierwszego elementu stringa czyli w naszym przypadku kropki ".png"
  });
  console.log("Nieposortowana tablica to: " + validFiles);

  // 4. Posortuj tablicę wg daty.
  validFiles = sortByDate(validFiles, dir);
  console.log("Posortowana tablica to: " + validFiles);

  // 5. Zmień nazwę każdego pliku na format zamieniając $$$ na 001 itd.
  //najpierw przystepujemy do iteracji posortowanej już tablicy validFiles
  validFiles.forEach((file, index) => {
    // ((pojedynczy string nazwy pliku, indeks w tej tablicy)=>

    try {
      //try-spróbuj - uzywamy try catch aby obsłużyć ewentualne błędy bo korzystamy z metod synchronicznych
      fs.renameSync(
        //zmiana nazwy pliku
        path.join(dir, file), //ścieżka katalog(linijka7) + plik
        path.join(
          // ścieżka do nowego pliku
          dir, //katalog
          newFileName(argv.get("format"), argv.get("ext"), index), //nowa nazwa pliku tworzona za pomoca newFileName w pliku utils.js z numerowaniem od 0
          //argv.get("ext") pobieramy rozszerzenie pliku czyli "png"
          //argv.get("format")pobieramy format pliku czyli "photo-$$$"
        ),
      );
    } catch (e) {
      //przechwyć bład i wyrzuc go na konsole
      throw new Error(`Nie można było zmienić nazwy pliku: ${file}\nBłąd: ${e.message}`);
    }
  });
});

//komenda do wywoływania funkcji zmiany nazw plików to: node index1.js --dir "images" --ext "png" --format "nazwa$$$"
//funkcja dziwnie sie zachowuje przy wielu znakach dolara
