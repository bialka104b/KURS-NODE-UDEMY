//IMPORTY
const fs = require("fs");
const path = require("path");

//ASYNCHRONICZNE PRZENIESIENIE lorem1.txt DO INNEGO PODFOLDERU
function moveFileTo(filepath, directory, call_back) {
    filepath = path.join(__dirname, path.normalize(filepath));
    //.normalize(filepath) pozwoli nam rozczytać różne typy ścieżek zapisanych tutaj moveFileTo("files/lorem2.txt",
    // czyli jeśli ktoś poda moveFileTo("./files/lorem1.txt" to też zostanie to poprawnie rozczytane

    //teraz tworzymy ścieżke do folderu
    fs.mkdir(path.join(__dirname, directory), (err)=> {

        if(err && err.code !== 'EEXIST') {//jeżeli wystąpił błąd i niejest to błąd EEXIST to chce zwrócić funkcje call_back przekazując jej błąd
        //bo gdybyśmy mieli katalog newFiles już to by nam tu error wyskoczył, a ja chce tego uniknąć bo niechce tworzyć nowego katalogu o tej samej nazwie
            return call_back(err, filepath, directory);
        }

        //NASTĘPUJE TUTAJ PRZENOSZENIE PLIKU za pomocą rename
        const pathBaseName = path.join(__dirname, directory, path.basename(filepath))
        //path.join(ścieżka do folderu głównego, nazwa katalogu newFiles, nazwa tego pliku przenoszonego)
        //path.basename(filepath) zostanie zwrócone właśnie lorem1.txt

        fs.rename(filepath, pathBaseName, (err)=> {
        // .rename(ścieżka do pliku którego chcemy przenieść, ścieżka do pliku docelowego lorem1.txt będącego w podfolderze newFiles, err-fisrt-callback)
            if(err) {//jeżeli wystąpił błąd to chce zwrócić funkcje call_back przekazując jej błąd
                //filepath i directory przekazujemy tutaj dodatkowo z tej funkcji na dole
                return call_back(err, filepath, directory);
            }

            call_back(null, filepath, directory);
            //jeśli wszystko pójdzie dobrze to funkcja call_back sie musi wykonać, null zapobiegnie nam wykonywaniu kodu z lini 43
        });

    });
}

const directory1 = "newFiles";
const directory2 = "files";
moveFileTo("files/lorem1.txt", directory2, (err, filepath, directory)=> {
//moveFileTo(ścieżka do pliku, "folder do którego ma być przeniesiony plik", err-first-callback(error, ścieżka do pliku, nazwa folderu docelowego))
//katalog "newFiles" zostanie automatycznie stworzony jeśli nie istnieje

    //call back
    if(err) {
        return console.log(`Wystąpił błąd: ${err.message}.`);
    }
    console.log(`Przeniesiono plik ${filepath} do katalogu ${directory}`);
});//CAŁA TA FUNKCJA BĘDZIE W FUNKCJI WYŻEJ POD PARAMETREM call_back


//CAŁA TA METODA TO JEST WŁASNA FUNKCJA A NIE WBUDOWANA W NODE'a