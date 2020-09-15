//PLIK ODPOWIEDZILNY ZA STWORZENIE ROUTERA
const express = require("express");
const users = require("../users");//import pliku users.js

const router = express.Router();


// ____TA CZĘŚĆ BYŁA W PLIKU INDEX.js ale miała podmienione słowo router na app_______________
//TWORZENIE API TYPU REST
router.get("/api/users",(request, response)=> {
    //nie chce nic renderować ale chce pobrać wszystkich uzytkowników i ich odesłać
    response.json(users.list())// sprawdź http://localhost:8080/api/users
    //metoda pozwala nam wstawic obiekt javascriptowy
    //my zwracamy tablice ze wszystkimi użytkownikami
    // przejdź do strony http://localhost:8080/api/users i sprawdź, zobaczysz JSONA
});

router.post("/api/users",(request, response)=> {//metoda podobna do PUT
    //służy do odsyłania do bazy danych podanego użytkownika i zapisania go w bazie plik usersDb.json
    response.json(users.add(request.body))// sprawdź http://localhost:8080/api/users
});


//metoda get(ścieżka, call_back) chcemy ten call_back wykonać dla każdego połączenia z podana ścieżką
router.get("/api/user/:id", (request, response)=> {
    //nie chce nic renderować ale chce pobrać wszystkich uzytkowników i ich odesłać
    //metoda pozwala nam wstawic obiekt javascriptowy
    //my zwracamy tablice ze wszystkimi użytkownikami
    // przejdź do strony http://localhost:8080/api/users/3 i sprawdź, zobaczysz JSONA
    
    response.json(users.get(request.params.id));
    //metoda pozwala nam wstawic obiekt javascriptowy
});

router.put("/api/user/:id", (request, response)=> {//metoda do aktualizacji uzytkownika i usuwania
    //wykorzystujemy tu metode updateUser z pliku users.js
    // przejdź do strony http://localhost:8080/api/users/3 i sprawdź, zobaczysz JSONA
    
    //response.json(users.update(request.params.id));
    //metoda pozwala nam wstawic obiekt javascriptowy

    //console.log(request.body);//{ id: 12, name: 'Natalia', lastName: 'Słowik' } tego typu obiekty będą zwracane
    request.body.id = request.params.id;
    //response.send("");
    response.json(users.update(request.body));
    //te polecenia zadziałają na dodatku POSTMAN, więcej o tym w notatkach
});

router.delete("/api/user/:id", (request, response)=> {//metoda do kasowania
    response.json(users.delete(request.params.id));//taka sama jak get, wystarczy zamienić get na delete
    //znów wykorzystujemy do testów program pOSTMAN
    // http://localhost:8080/api/user/5
});
//____________________________________________________________________________

module.exports = router;

//ABY TEN PLIK ZADZIAŁAŁ MUSI BYĆ STWORZONY PLIK PACKAGE.JSON