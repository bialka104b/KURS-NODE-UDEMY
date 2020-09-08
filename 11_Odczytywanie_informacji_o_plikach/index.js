const fs = require("fs"); //moduł do pracy z plikami
const path = require("path"); //moduł do pracy z ścieżkami

//metoda exists pozwala określić czy dany plik istnieje czy nie (zwróci true lub false)
const filename1 = "lorem3.txt";
fs.exists(path.join(__dirname, "files txt", filename1), (exists) => {//funkcja asynchroniczna
  
  if(exists) {//jeśli exists jest true
      console.log(exists);
      console.log(`Plik o nazwie ${filename1} istnieje`);
  }else {
    console.log(exists);
    console.log(`Plik o nazwie ${filename1} nie istnieje`);
  }
});
//wywołanie node index w terminalu