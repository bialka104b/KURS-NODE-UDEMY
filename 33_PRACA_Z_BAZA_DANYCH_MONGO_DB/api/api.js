//PLIK ODPOWIEDZILNY ZA STWORZENIE ROUTERA
const express = require("express");
const users = require("../users");//import pliku users.js

const router = express.Router();


// ____TA CZĘŚĆ BYŁA W PLIKU INDEX.js ale miała podmienione słowo router na app_______________
//TWORZENIE API TYPU REST
router.get("/users",(request, response)=> {
    users.list((err, data)=>{
        if (err) {
            response.status(404);
            response.json({
                error: "User nie stworzony"
            });
        } else {
            response.json(data);
        }
    })
    // przejdź do strony http://localhost:8080/api/users i sprawdź, zobaczysz JSONA
});

router.post("/users",(request, response)=> {//metoda podobna do PUT
    //służy do odsyłania do bazy danych podanego użytkownika i zapisania go w bazie plik usersDb.json
    users.add(request.body, (err, data)=>{
        if (err) {
            response.status(404);
            response.json({
                error: "User nie stworzony"
            });
        } else {
            response.json(data);
        }
    })
});


//metoda get(ścieżka, call_back) chcemy ten call_back wykonać dla każdego połączenia z podana ścieżką
router.get("/user/:id", (request, response)=> {
    // przejdź do strony http://localhost:8080/api/users/3 i sprawdź, zobaczysz JSONA
    
    users.get(request.params.id, (err, data)=>{
        if (err) {
            response.status(404);
            response.json({
                error: "User nie stworzony"
            });
        } else {
            response.json(data);
        }
    })
});

router.put("/user/:id", (request, response)=> {
    // przejdź do strony http://localhost:8080/api/users/3 i sprawdź, zobaczysz JSONA
    request.body.id = request.params.id;
    users.update(request.body, (err, data)=>{
        if (err) {
            response.status(404);
            response.json({
                error: "User nie stworzony"
            });
        } else {
            response.json(data);
        }
    })
});

router.delete("/user/:id", (request, response)=> {//metoda do kasowania
    users.delete(request.params.id, (err, data)=>{
        if (err) {
            response.status(404);
            response.json({
                error: "User nie stworzony"
            });
        } else {
            response.json(data);
        }
    })
    // http://localhost:8080/api/user/5
});
//____________________________________________________________________________

module.exports = router;

//ABY TEN PLIK ZADZIAŁAŁ MUSI BYĆ STWORZONY PLIK PACKAGE.JSON w katalogu api