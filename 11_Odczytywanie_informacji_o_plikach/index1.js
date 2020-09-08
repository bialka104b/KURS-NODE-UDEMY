const fs = require("fs"); //moduł do pracy z plikami
const path = require("path"); //moduł do pracy z ścieżkami

//metoda exists pozwala określić czy dany plik istnieje czy nie (zwróci true lub false)
const filename = "lorem2.txt";
fs.stat(path.join(__dirname, "files txt", filename), (err, stats)=>{
  //funkcja asynchroniczna

  if (err) {
    //jeżeli błąd err istnieje
    console.log(`Wystąpił błąd: ${err.message}`); //wyświetl mi wiadomość tego błędu
    throw err; 
    //zakończ proces bez obsługiwania błędu, tu warto dodać instrukcje by obsłuzyć ten błąd
    //jeśli tego nie zrobimy to poniższe konsole logi się nie wykonają a proces zostanie zakończony
  }

  console.log(`Data utworzenia: ${stats.birthtime}`);
  console.log(`Data ostatniej modyfikacji: ${stats.mtime}`);
  console.log(`isFile: ${stats.isFile()}`);
  console.log(`isDirectory: ${stats.isDirectory()}`);
});
//wywołanie node index1 w terminalu
